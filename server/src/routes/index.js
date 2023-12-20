const router = require('express').Router();

router.use('/teacher', require('./teacher'));
router.use('/student', require('./student'));

module.exports = router;
