const { Router } = require('express');
const router = Router();

const {
    getQuestions
} = require('../controllers/questions.controller');


// questions
router.get('/api/questions', getQuestions);

module.exports = router;