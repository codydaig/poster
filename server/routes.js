var postProcessor = require('./post-processor.js');
var router = require('express').Router();

router.get('/general', postProcessor.general.get);
router.post('/general', postProcessor.general.post);
router.get('/filterMessagesByUsername', postProcessor.filterMessagesByUsername.get);
router.get('/filterMessageById', postProcessor.filterMessageById.get);
router.put('/update', postProcessor.update.put);
router.delete('/update', postProcessor.update.delete);

module.exports = router;