const express = require('express');
const router = express.Router();
const appointments_controller = require('../controllers/appointments.controller.js')

// POST request 
router.post('/post', appointments_controller.post_appointment );
router.get('/', appointments_controller.get_appointments)

module.exports = router;