
const User = require('../models/userModel');

const Manager = require('../models/managerModel');

// ✅ Create User
exports.createUser = async (req, res) => {
    try {
        const { full_name, mob_num, pan_num, manager_id } = req.body;

        if (!await Manager.findOne({ manager_id, is_active: true })) {
            return res.status(400).json({ error: "Invalid or inactive manager_id" });
        }

        const newUser = new User({ full_name, mob_num, pan_num, manager_id });
        await newUser.save();

        res.status(201).json({ message: "User created successfully", user_id: newUser.user_id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ Get All Users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ Delete User
exports.deleteUser = async (req, res) => {
    try {
        const { user_id } = req.params;
        const deletedUser = await User.findOneAndDelete({ user_id });

        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ Update User
exports.updateUser = async (req, res) => {
    try {
        const { user_id } = req.params;
        const updates = req.body;
        updates.updated_at = Date.now();

        const updatedUser = await User.findByIdAndUpdate(user_id, updates, { new: true });  // ✅ Use _id instead of user_id

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully", updatedUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
