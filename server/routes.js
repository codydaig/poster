var postProcessor = require('./post-processor.js');
var router = require('express').Router();

router.get('/general', postProcessor.general.get);
router.post('/general', postProcessor.general.post);
router.get('/custom', postProcessor.custom.get);
router.put('/custom', postProcessor.custom.put);
router.delete('/custom', postProcessor.custom.delete);

module.exports = router;