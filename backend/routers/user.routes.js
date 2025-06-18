const express = require('express')
const { getUserList, getUserById, createUser, updateUser, deleteUser } = require('../controllers/user.controller')
const validateUserData = require('../middlewares/validateuserdata')

const router = express.Router()

router.get('/', getUserList)
router.get('/:id', getUserById)
router.post('/',validateUserData, createUser)
router.put('/:id',validateUserData, updateUser)
router.delete('/:id', deleteUser)

module.exports = router