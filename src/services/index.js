const {
    create,
    retrieve,
    update,
    remove,
} = require('../utils/firestore.util');

module.exports = {

    create: async data => {
        return await create(data);
    },

    retrieve: async data => {
        return await retrieve(data);
    },

    update: async data => {
        return await update(data);
    },

    remove: async data => {
        return await remove(data);
    },

};