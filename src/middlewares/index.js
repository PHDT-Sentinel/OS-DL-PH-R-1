const firestore = require('../utils/firestore.util');
const { validate } = require('../validations/index');

const auth = async (req, res, next) => {

    const { error, value } = validate.validate(req.body);
    
    if (error) {
        return res.status(400).send({
            code: 'Incorrect',
            message: 'Please correct your request parameters!'
        });
    }
    
    let valid = await firestore.auth(req.body.id);

    if (!valid) {
        return res.status(400).send({
            code: 'Unauthorized',
            message: ''
        });
    }
    
    return next();
}

module.exports = auth;