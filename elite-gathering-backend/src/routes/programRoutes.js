const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/authMiddleware');
const {createProgram, getProgram, updateProgram, deleteProgram } = require('../controller/programController');

router.post('/create', protect, createProgram);
router.put('/update/:id',updateProgram);
router.delete('/delete/:id',protect, deleteProgram);
router.get('/get/:id',getProgram);


module.exports = router;
