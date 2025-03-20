Elite Gatherings - Event Management System
A fully functional Event Management System for admins and customers to manage event listings, bookings, payments, and analytics.

📌 Table of Contents
Features
Tech Stack
Installation
Project Structure
API Endpoints
Environment Variables
Running the Project
Screenshots
Contributing
License
🎯 Features
✅ User Authentication (JWT, bcrypt)
✅ Admin Dashboard with revenue insights & analytics
✅ Event Listings & Booking System
✅ Event Categories & Filters
✅ Shopping Cart & Secure Checkout
✅ Payment Gateway Integration (UPI, Razorpay, PayPal)
✅ Role-Based Access (Admin & Customers)
✅ Email & SMS Notifications
✅ Reports & Analytics for Admins
✅ Modern UI with Tailwind CSS & Dark Mode

🛠 Tech Stack
Frontend:

⚛ React.js (with Vite)
🎨 Tailwind CSS
🔗 Axios (for API calls)
Backend:

🚀 Node.js with Express.js
🛢 MySQL (Database)
🔑 JWT Authentication
📨 Nodemailer (Email notifications)
Deployment & Hosting:

🌍 Vercel / Netlify (Frontend)
☁ AWS / DigitalOcean / Firebase (Backend & Database)
📡 API Endpoints
Authentication
POST /api/auth/signup - Register new user
POST /api/auth/login - Authenticate user & get JWT
Events
GET /api/events - Fetch all events
POST /api/events - Create a new event (Admin only)
Bookings
POST /api/bookings - Create a new booking
GET /api/bookings - View user bookings
Payments
POST /api/payments - Process payments via Razorpay


🖼 Screenshots
![alt text](<Screenshot 2025-03-20 222652.png>)



🤝 Contributing
Fork the repository
Create a new branch: git checkout -b feature-name
Commit your changes: git commit -m "Added new feature"
Push to your branch: git push origin feature-name
Open a Pull Request
📜 License
This project is licensed under MIT License.

