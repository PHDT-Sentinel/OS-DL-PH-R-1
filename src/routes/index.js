const router = require('express').Router();
const controller = require('../controllers/index');
router.post('/', controller.create);
router.get('/', controller.retrieve);
router.put('/', controller.update);
router.delete('/', controller.remove);
module.exports = router;