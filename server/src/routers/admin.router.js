const adminController = require('../controllers/admin.controller');
const { ADMIN } = require('../middlewares/auth.middleware');

module.exports = require('express').Router()
    .post('/sign-in', adminController.signIn)
    .get('/verify-session', ADMIN, adminController.verfiySession)