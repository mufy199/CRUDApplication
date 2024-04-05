const express = require('express')
const router = express.Router()
const { getContacts,createContact,updateContact,deleteConatct } = require('../controllers/contactController')

router.route('/').get(getContacts).post(createContact)
router.route('/:id').patch(updateContact).delete(deleteConatct)

module.exports = router