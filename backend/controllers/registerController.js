const path = require('path');
const bcrypt = require('bcrypt');
const registerRoute = require('../routes/registerRoutes')

const handleNewUser = async (req, res) => {
    const {email, pwd} = req.body;
    if(!email || !pwd) return res.status(400).json({'message': 'Email and Password are required.' });

    //check for duplicate email in database
    try {
        const response = await fetch("http://localhost:4000/api/register/getexistinguser/:${email}");
        console.log(response.found);

        if(response.found === 1){
            return res.status(409); //conflict
        }

    } catch (err) {
        res.status(500).json({'message' : err.message});
    }

    try{
        //hash password
        const hashPwd = await bcrypt.hash(pwd, 10);
        //store new user
        const newUser = {"email" : email, "password" : hashPwd};
           fetch("http://localhost:4000/api/register/createnewuser", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newUser)
            });


        res.status(201).json({'success': 'New user ${email} created!'});

    }catch(err){
        res.status(500).json({'message' : err.message});
    }
}

module.exports = { handleNewUser };