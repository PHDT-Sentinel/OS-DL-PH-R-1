const {
    create,
    retrieve,
    update,
    remove,
} = require('../utils/firestore.util');

const logger = require('../configs/logger.config');

module.exports = {

    create: async data => {
        logger.info('Creating ...');
        return await create(data);
    },

    retrieve: async data => {
        logger.info('Retrieving ...');
        return await retrieve(data);
    },

    update: async data => {
        logger.info('Updating ...');
        return await update(data);
    },

    remove: async data => {
        logger.info('Deleting ...');
        return await remove(data);
    },

};