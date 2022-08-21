const firestore = require('../configs/firestore.config');
const logger = require('../configs/logger.config');
require('dotenv').config();
module.exports = {

    create: async data => {
        return await firestore
            .collection(process.env.FIRESTORE_DEFAULT_COLLECTION)
            .doc(data.id)
            .collection(data.collection)
            .add(data.item)
            .then(() => {
                logger.info('Created!');
                return {
                    status: 200,
                    data: {
                        code: 'Created',
                        message: ''
                    }
                };
            })
            .catch(() => {
                logger.info('Failed!');
                return {
                    status: 400,
                    data: {
                        code: 'Failed',
                        message: ''
                    }
                };
            });
    },

    retrieve: async data => {
        let items = [];

        await firestore
            .collection(process.env.FIRESTORE_DEFAULT_COLLECTION)
            .doc(data.id)
            .collection(data.collection)
            .get()
            .forEach(i => {
                items.push({
                    id: i.id,
                    data: i.data()
                });
            });
        
        logger.info('Retrieved!');
        
        return {
            status: 200,
            data: {
                code: 'Retrieved',
                message: '',
                data: items
            }
        }
    },

    update: async data => {
        return await firestore
            .collection(process.env.FIRESTORE_DEFAULT_COLLECTION)
            .doc(data.id)
            .collection(data.collection)
            .doc(data.item.id)
            .update(data.item)
            .then(() => {
                logger.info('Updated!');
                return {
                    status: 200,
                    data: {
                        code: 'Updated',
                        message: ''
                    }
                };
            })
            .catch(() => {
                logger.info('Failed!');
                return {
                    status: 400,
                    data: {
                        code: 'Failed',
                        message: ''
                    }
                };
            });
    },

    remove: async data => {
        return await firestore
            .collection(process.env.FIRESTORE_DEFAULT_COLLECTION)
            .doc(data.id)
            .collection(data.collection)
            .doc(data.item.id)
            .delete()
            .then(() => {
                logger.info('Deleted!');
                return {
                    status: 200,
                    data: {
                        code: 'Deleted',
                        message: ''
                    }
                };
            })
            .catch(e => {
                logger.info('Failed!');
                return {
                    status: 400,
                    data: {
                        code: 'Failed',
                        message: ''
                    }
                };
            });
    },

    auth: async id => {

        return await firestore
            .collection(process.env.FIRESTORE_DEFAULT_COLLECTION)
            .doc(id)
            .get()
            .then(results => {
                if (!results.exists) {
                    logger.info('Authentication Failes!');
                    return false;
                } else {
                    logger.info('Authentication Successful!');
                    return true;
                }
            });
    },

};