var router = require('express').Router();

router.use('/days', require('./days'));
router.use('/attractions', require('./attractions'));

module.exports = router;