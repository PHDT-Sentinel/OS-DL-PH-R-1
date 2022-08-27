const { auth } = require('../configs/firebase.config')
module.exports = {

    signUp: async data => {
        return await auth.createUser({
            email: data.email,
            emailVerified: false,
            phoneNumber: data.phone,
            password: data.password,
            displayName: data.name,
            photoURL: '',
            disabled: false,
        })

            .then(result => {
                return result.uid;
            })

            .catch(e => {
                return e;
            });
    },

    update: async data => {
        return await auth.updateUser(data.id, {
            email: data.email,
            emailVerified: false,
            phoneNumber: data.phone,
            password: data.password,
            displayName: data.name,
            photoURL: '',
            disabled: false,
        })

            .then(result => {
                return result.toJSON();
            })

            .catch(e => {
                return e;
            })
    },

    delete: async data => {
        return await auth.deleteUser(data.id)

            .then(() => {
                return true;
            })

            .catch(() => {
                return false;
            })
    }

}