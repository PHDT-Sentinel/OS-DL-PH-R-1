const firestore = require('../utils/firestore.util');

const auth = async (req, res, next) => {
    let valid = await firestore.auth(req.body.id);

        if (valid) return next();
        else return res.status(400).send({
            code: 'Unauthorized',
            message: ''
        })
}
module.exports = auth;