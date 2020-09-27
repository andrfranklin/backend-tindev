const Dev = require("../models/Dev");

module.exports = {
    async store(req, res){

        console.log(req.io, req.connectedUser);

        const { user } = req.headers;
        const { devID } = req.params;

        const loggedUser = await Dev.findById(user);
        const targetUser = await Dev.findById(devID);

        if (!targetUser) {
            return res.status(400).json({ error: ' Dev not exists '});
        }

        if (loggedUser.likes.includes(targetUser)) {
            return res.json(loggedUser);
        }

        if (targetUser.likes.includes(loggedUser._id)) {
            const loggedsocket = req.connectedUser[user];
            const targetsocket = req.connectedUser[devID];

            if (loggedsocket) {
                req.io.to(loggedsocket).emit('match', targetUser);
            }

            if (targetsocket) {
                req.io.to(targetsocket).emit('match', loggedUser);
            }

        }

        loggedUser.likes.push(targetUser._id);

        await loggedUser.save();

        return res.json(loggedUser);
    }
};