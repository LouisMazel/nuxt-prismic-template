const { Router } = require('express')

const contacts = require('./../controllers/contacts.js')

const router = Router()

router.post('/contacts', contacts.create)

module.exports = router
