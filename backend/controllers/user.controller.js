const User = require('../model/user')

exports.createUser = async (req, res) => {
    try {
        const { name } = req.body
        const user = await User.create({ name })

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
        const { name } = req.body
        const user = await User.findByIdAndUpdate(id, { name }, { new: true });
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