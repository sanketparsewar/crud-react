function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

const validateUserData = (req, res, next) => {
    let { name, location, phone } = req.body;

    // Check empty fields
    if (!name.trim() || !location.trim() || !phone.trim()) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }

    // Clean + format values
    name = capitalize(name.trim());
    location = capitalize(location.trim());
    phone = phone.toString().trim();

    // Validate phone
    if (phone.length !== 10 || isNaN(phone) || !/^\d{10}$/.test(phone)) {
        return res.status(400).json({ message: 'Phone number must be 10 digits' });
    }

    // Save cleaned values back to req.body
    req.body.name = name;
    req.body.location = location;
    req.body.phone = phone;

    // All good - move to next middleware/handler
    next();
};

module.exports = validateUserData;
