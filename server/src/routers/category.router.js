const categoryController = require('../controllers/category.controller');
const { ADMIN } = require('../middlewares/auth.middleware');

module.exports = require('express').Router()
    .post(`/create`, ADMIN, categoryController.create)
    .put('/edit-image', ADMIN, categoryController.editImage)
    .put('/edit-title', ADMIN, categoryController.editTitle)
    .put('/edit-status', ADMIN, categoryController.editStatus)
    .get('/get-all-to-admin', ADMIN, categoryController.getAllToAdmin)
    .get('/get-all-to-user', ADMIN, categoryController.getAllToUser)