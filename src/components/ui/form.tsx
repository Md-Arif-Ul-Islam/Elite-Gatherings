// Importing necessary modules and components
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label" // Radix label for accessibility
import { Slot } from "@radix-ui/react-slot" // For passing props to children
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form" // React Hook Form utilities

import { cn } from "@/lib/utils" // Utility for merging class names
import { Label } from "@/components/ui/label" // Custom Label component

// Exporting the Form context provider from react-hook-form
const Form = FormProvider

// Define the shape of the context for FormField
type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

// Create a React context to store current field name
const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

// Wrapper around Controller that also provides the field name via context
const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

// Custom hook to access field state and related metadata
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext) // Access field name
  const itemContext = React.useContext(FormItemContext) // Access item ID
  const { getFieldState, formState } = useFormContext() // Access global form state

  const fieldState = getFieldState(fieldContext.name, formState) // Get this field's state

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

// Context to provide unique ID to form items for accessibility
type FormItemContextValue = {
  id: string
}

// Create context for form item
const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

// Component that wraps form elements and provides unique ID via context
const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId() // Generate unique ID

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

// Custom FormLabel that binds to form field ID and shows error color if any
const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)} // Apply red text if error
      htmlFor={formItemId} // Binds label to input
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

// Slot wrapper that sets proper accessibility props on the input
const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      } // Assistive tech support
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = "FormControl"

// Renders a description under the form control
const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)} // Style description
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

// Shows error message if validation fails
const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children // Prefer validation message

  if (!body) {
    return null // Don’t render empty message
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)} // Red text for error
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

// Export all form components and hook
export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
