const axios = require('axios');
const dev = require('../models/Dev');

module.exports = {
    async index(req, res) {
        const { user } = req.headers;

        const loggedUser = await dev.findById(user);

        const users = await dev.find({
            $and: [
                { _id: { $ne: user} },
                { _id: { $nin: loggedUser.likes } },
                { _id: { $nin: loggedUser.dislikes } }
            ]
        })

        return res.json(users);
    },

   async store(req, res){
        const { username } = req.body;

        const userExists = await dev.findOne({'user': username});

        if (userExists) {
            return res.send(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name: nome, login: user, bio, avatar_url: avatar} = response.data;

        const Dev = await dev.create({ nome, user, bio, avatar});

        return res.json(Dev);
    }

    
}