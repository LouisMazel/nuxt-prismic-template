const { Router } = require('express')

const contacts = require('./contacts')

const router = Router()

// Add Routes
router.use(contacts)

module.exports = router
