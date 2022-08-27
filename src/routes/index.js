const router = require('express').Router();
const controller = require('../controllers/index');
const auth = require('../middlewares/index');
router.post('/', auth, controller.create);
router.get('/', auth, controller.retrieve);
router.put('/', auth, controller.update);
router.delete('/', auth, controller.remove);
// router.post('/user/signUp', auth, userController.signUp); // this is a template
module.exports = router;