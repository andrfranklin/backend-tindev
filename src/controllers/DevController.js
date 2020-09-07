const axios = require('axios');
const dev = require('../models/Dev');

module.exports = {
   async store(req, res){
        const { username } = req.body;

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const Dev = await dev.create({ nome: response.data.name, user: response.data.login, bio: response.data.bio, avatar: response.data.avatar_url});

        return res.json(Dev);
    }
}