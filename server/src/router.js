module.exports = require('express').Router()
.use('/admin', require('./routers/admin.router'))
.use('/setting', require('./routers/setting.router'))
.use('/category', require('./routers/category.router'))