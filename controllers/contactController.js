const asyncHandelr = require('express-async-handler')
const Contact = require('../models/contactModel')

//@desc get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandelr(async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
})

//@desc create new contacts
//@route POST /api/contacts
//@access public

const createContact = asyncHandelr(async (req, res) => {
    console.log("The request body is", req.body)

    const { name, email, phone, instagram, facebook, linkedin } = req.body
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All Fields Must Be Filled!")
    }
    const contact = await Contact.create({ name, email, phone, instagram, facebook, linkedin })

    res.status(201).json(contact)
})

//@desc upadte contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandelr(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error("Contact not Found")
    }
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedContact)
})

//@desc delete contacts
//@route DELETE /api/contacts/:id
//@access public

const deleteConatct = asyncHandelr(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error("Contact not Found")
    }
    await Contact.deleteOne(contact)
    res.json(contact)
})


module.exports = { getContacts, createContact, updateContact, deleteConatct }