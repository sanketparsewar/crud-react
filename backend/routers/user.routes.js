const express = require('express')
const { getUserList, getUserById, createUser, updateUser, deleteUser } = require('../controllers/user.controller')

const router = express.Router()

router.get('/', getUserList)
router.get('/:id', getUserById)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router