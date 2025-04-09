const Program = require('../models/Program');


const createProgram = async (req, res) => {
    try {
        const {
            name,
            description,
            datetime,
            maxPeople,
            venue,
            type
        } = req.body;
        if (!name || name.trim() === '') {
            return res.status(400).json({ error: 'Program name is required' });
        }
        if (!description || description.trim() === '') {
            return res.status(400).json({ error: 'Description is required' });
        }
        if (!datetime || isNaN(Date.parse(datetime))) {
            return res.status(400).json({ error: 'A valid date/time is required' });
        }
        if (!maxPeople || typeof maxPeople !== 'number') {
            return res.status(400).json({ error: 'Maximum number of people must be a number' });
        }
        if (!venue || venue.trim() === '') {
            return res.status(400).json({ error: 'Venue is required' });
        }
        if (!type || type.trim() === '') {
            return res.status(400).json({ error: 'Type is required' });
        }
        const newProgram = new Program({
          ...req.body,
          createdBy: req.user._id 
        });
        await newProgram.save();
        res.status(201).json({ message: 'Program created successfully', program: newProgram });
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
};
const deleteProgram = async (req, res) => {
  const { id } = req.params;
  try {
    const program = await Program.findById(id);

    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }
    if (program.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this program' });
    }
    await program.deleteOne(); 
    res.status(200).json({ message: 'Program deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};


const updateProgram = async (req, res) => {
    try {
      const { id } = req.params;
      const {name,description,datetime,maxPeople,venue,type,guest,poster,programList} = req.body;
      if (!name || name.trim() === '') {
        return res.status(400).json({ error: 'Program name is required' });
      }
      if (!description || description.trim() === '') {
        return res.status(400).json({ error: 'Description is required' });
      }
      if (!datetime || isNaN(Date.parse(datetime))) {
        return res.status(400).json({ error: 'A valid date/time is required' });
      }
      if (!maxPeople || typeof maxPeople !== 'number') {
        return res.status(400).json({ error: 'Maximum number of people must be a number' });
      }
      if (!venue || venue.trim() === '') {
        return res.status(400).json({ error: 'Venue is required' });
      }
      if (!type || type.trim() === '') {
        return res.status(400).json({ error: 'Type is required' });
      }
      const updatedProgram = await Program.findByIdAndUpdate(
        id,{name,description,datetime, maxPeople,venue,type,guest,poster,programList},
        { new: true, runValidators: true }
      );

      if (!updatedProgram) {
        return res.status(404).json({ error: 'Program not found' });
      }  
      res.status(200).json({ message: 'Program updated successfully', program: updatedProgram });
  
    } catch (err) {
      res.status(500).json({ error: 'Server error: ' + err.message });
    }
  };

  const getProgram = async (req, res) => {
    try {
        const programs = await Program.find();
        res.status(200).json(programs);
    } catch (err) {
        res.status(500).json({ error: 'Server error: ' + err.message });
    }
}

module.exports = { createProgram, getProgram, updateProgram, deleteProgram };
