const prisma = require('../ds');

async function updateUser(req, res) {
    try {
        console.log("Running this function . . .");
      const updatedUser = await prisma.users.update({
        where: {
          email: req.params.email,
        },
        data: {
          phoneNo: req.body.phoneNo,
        },
      });
      res.json(updatedUser);
    }catch (error) {
      res.status(500).json({ error: 'Failed to update user.' });
    }
}


module.exports = { updateUser };
