const firestore = require('../configs/firestore.config');
require('dotenv').config();
module.exports = {

    create: async data => {
        return await firestore
            .collection(process.env.FIRESTORE_DEFAULT_COLLECTION)
            .doc(data.id)
            .collection(data.collection)
            .add(data.item)
            .then(() => {
                return {
                    status: 200,
                    data: {
                        code: 'Created',
                        message: ''
                    }
                };
            })
            .catch(() => {
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
                return {
                    status: 200,
                    data: {
                        code: 'Updated',
                        message: ''
                    }
                };
            })
            .catch(() => {
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
                return {
                    status: 200,
                    data: {
                        code: 'Deleted',
                        message: ''
                    }
                };
            })
            .catch(e => {
                return {
                    status: 400,
                    data: {
                        code: 'Failed',
                        message: ''
                    }
                };
            });
    },

};