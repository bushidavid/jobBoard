const path = require('path');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const {user, pwd} = req.body;
    if(!user || !pwd) return res.status(400).json({'message': 'Email and Password are required.' });

    //check for duplicate email in database
    const duplicate = 'David' //userDB.users.find(person => person.email === user)
    if(duplicate) return res.status(409); //Conflict
    try{
        const hashPwd = await bcrypt.hash(pwd, 10);
        //store new user
        const newUser = {'username' : user, 'password': hashedPwd};
        /*
        database part
        */
        console.log(/*database.table*/);
        res.status(201).json({'success': 'New user ${user} created!'});

    }catch(err){
        res.status(500).json({'message' : err.message});
    }
}

module.exports = { handleNewUser };