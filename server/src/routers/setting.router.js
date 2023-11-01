const settingController = require('../controllers/setting.controller');
const { ADMIN } = require('../middlewares/auth.middleware');

module.exports = require('express').Router()
    .get('/get-settings', ADMIN, settingController.getSettings)
    // 
    .post('/set-client-working', ADMIN, settingController.setClientWorking)
    .post('/set-operator-working', ADMIN, settingController.setOperatorWorking)
    .post('/set-seller-working', ADMIN, settingController.setSellerWorking)
    .post('/set-courier-working', ADMIN, settingController.setCourierWorking)
    // 
    .post('/set-bot-token', ADMIN, settingController.setBotToken)
    .post('/set-bot-username', ADMIN, settingController.setBotUsername)
    // 
    .post('/set-send-rejected', ADMIN, settingController.setSendRejected)
    .post('/set-send-archived', ADMIN, settingController.setSendArchived)
    .post('/set-send-copy', ADMIN, settingController.setSendCopy)
    .post('/set-send-new', ADMIN, settingController.setSendNew)
    .post('/set-send-recontact', ADMIN, settingController.setSendRecontact)
    .post('/set-send-success', ADMIN, settingController.setSendSuccess)
    .post('/set-send-sended', ADMIN, settingController.setSendSended)
    .post('/set-send-delivered', ADMIN, settingController.setSendDelivered)
    .post('/set-plus-balance', ADMIN, settingController.setPlusBalance)
    // 
    .post('/set-operator-min-payment', ADMIN, settingController.setOperatorMinPayment)
    .post('/set-operator-max-payment', ADMIN, settingController.setOperatorMaxPayment)
    .post('/set-operator-auto-dist', ADMIN, settingController.setOperatorAutoDist)
    .post('/set-operator-type-dist', ADMIN, settingController.setOperatorTypeDist)
    // 
    .post('/set-register', ADMIN, settingController.setRegister)
    .post('/set-next-order', ADMIN, settingController.setNextOrder)
    .post('/set-shopping-cart', ADMIN, settingController.setShoppingCart)
    .post('/set-auto-stream', ADMIN, settingController.setAutoStream)
    .post('/set-open-stream', ADMIN, settingController.setOpenStream)
    .post('/set-stream-dist', ADMIN, settingController.setStreamDist)
    .post('/set-min-payment', ADMIN, settingController.setMinPayment)
    .post('/set-max-payment', ADMIN, settingController.setMaxPayment)
    .post('/set-currency', ADMIN, settingController.setCurrency)
    .post('/set-coins', ADMIN, settingController.setCoins)
    .post('/set-send-coins', ADMIN, settingController.setSendCoins)
    .post('/set-sms-duration', ADMIN, settingController.setSmsDuration)
    // 
    .post('/set-logo', ADMIN, settingController.setLogo)
    .post('/set-mobile-logo', ADMIN, settingController.setMobileLogo)
