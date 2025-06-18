const User = require('../model/user')

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

exports.createUser = async (req, res) => {
    try {
        let { name, location, phone } = req.body
        if (!name || !location || !phone) {
            return res.status(400).json({ message: 'Please fill all fields' })
        }

        name = capitalize(name)
        location = capitalize(location)
        phone = phone.toString().trim()
        if (phone.length !== 10 || isNaN(phone)) {
            return res.status(400).json({ message: 'Phone number must be 10 digits' })
        }

        if (!/^\d{10}$/.test(phone)) {
            return res.status(400).json({ message: 'Phone number must be 10 digits' })
        }

        const user = await User.create({ name, location, phone })

        res.status(201).json({ user })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}

exports.getUserList = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({ users })
    } catch (err) {
        res.status(500).json({ messag: err.message })
    }
}
exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById({ _id: id })
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.status(200).json({ user })
    } catch (err) {
        res.status(500).json({ messag: err.message })
    }
}
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params
        let { name, location, phone } = req.body

        const user = await User.findByIdAndUpdate(id, { name, location, phone }, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        res.status(200).json({ user })
    } catch (err) {
        res.status(500).json({ messag: err })
    }
}
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndDelete({ _id: id })
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        res.status(200).json({ message: 'Deleted' })
    } catch (err) {
        res.status(500).json({ messag: err })
    }
}