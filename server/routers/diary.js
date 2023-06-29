const diaryRouter = require('express').Router()

const diaryController = require('../controllers/diary')

diaryRouter.get('/', diaryController.index)
//diaryRouter.get('/:id', diaryController.show)

module.exports = diaryRouter
