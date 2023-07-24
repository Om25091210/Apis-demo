const prisma = require('../ds');

async function getAllUsers(req, res) {
    try {
        console.log("Running this function . . .");
        const allUsers = await prisma.users.findMany();
        res.json(allUsers);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to get users." })
    }
}

module.exports = { getAllUsers };
