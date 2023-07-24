const prisma=require("../ds");

async function createUser(req,res){
    try{
        const newUser = await prisma.users.create({
            data: {
              email: req.body.email,
              name: req.body.name,
              password: req.body.password,
              phoneNo: req.body.phoneNo,
              updatedAt: new Date().toISOString(),
            },
          });
          res.status(201).json(newUser);
    }catch(error){
        res.status(500).json({ error: 'Failed to create user.' });
    }
}

module.exports = { createUser };