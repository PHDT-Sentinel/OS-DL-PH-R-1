const {
    create,
    retrieve,
    update,
    remove,
    // signUp
} = require('../services');

module.exports = {

    create: async (req, res) => {
        let result = await create(req.body);
        res.status(result.status).send(result.data);
    },

    retrieve: async (req, res) => {
        let result = await retrieve(req.query);
        res.status(result.status).send(result.data);
    },

    update: async (req, res) => {
        let result = await update(req.body);
        res.status(result.status).send(result.data);
    },

    remove: async (req, res) => {
        let result = await remove(req.body);
        res.status(result.status).send(result.data);
    },

    // signUp: async (req, res) => {
    //     let result = await signUp(req.body);
    //     res.status(result.status).send(result.data);
    // },

}