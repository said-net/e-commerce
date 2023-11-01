const { model, Schema, models } = require('mongoose');
const schema = new Schema({
    id: {
        type: Number,
        default: 1
    },
    // BOT
    bot_token: {
        type: 'String',
        default: ''
    },
    bot_username: {
        type: 'String',
        default: ''
    },
    send_new_order: {
        type: Boolean,
        default: true
    },
    send_recontact_order: {
        type: Boolean,
        default: true
    },
    send_success_order: {
        type: Boolean,
        default: true
    },
    send_archived_order: {
        type: Boolean,
        default: true
    },
    send_copy_order: {
        type: Boolean,
        default: true
    },
    send_rejected_order: {
        type: Boolean,
        default: true
    },
    send_sended_order: {
        type: Boolean,
        default: true
    },
    send_delivered_order: {
        type: Boolean,
        default: true
    },
    send_plus_balance: {
        type: Boolean,
        default: true
    },
    // OPERATOR DIST
    min_oper_payment: {
        type: Number,
        default: 5000
    },
    max_oper_payment: {
        type: Number,
        default: 500000
    },
    next_order: {
        type: Number,
        default: 300
    },
    auto_dist: {
        type: Boolean,
        default: false
    },
    type_dist: {
        type: String,
        default: "order_count"
    },//order_count, rating
    // FOR USERS & SELLERS
    register: {
        type: Boolean,
        default: true
    },
    shopping_cart: {
        type: Boolean,
        default: false
    },
    auto_stream: {
        type: Boolean,
        default: true
    },
    open_stream: {
        type: Boolean,
        default: true
    },
    stream_dist: {
        type: String,
        default: "first_product",
    },//first_product, all_product,
    min_payment: {
        type: Number,
        default: 5000
    },
    max_payment: {
        type: Number,
        default: 5000000
    },
    currency: {
        type: String,
        default: "SO'M"
    },//USD, SO'M, UZS, RUB, EUR
    send_coins: {
        type: Boolean,
        default: false
    },
    sms_duration: {
        type: Number,
        default: 120,
    },
    // ORDERS
    auto_new: {
        type: Boolean,
        default: false
    },
    auto_new_time: {
        type: Number,
        default: 3600
    },
    coins: {
        type: Boolean,
        default: false
    },
    // SITE
    operator_working: {
        type: Boolean,
        default: true
    },
    courier_working: {
        type: Boolean,
        default: true
    },
    client_working: {
        type: Boolean,
        default: true
    },
    seller_working: {
        type: Boolean,
        default: true
    },
    logo: {
        type: String,
        default: '/uploads/logo.png'
    },
    mobile_logo: {
        type: String,
        default: '/uploads/mobile-logo.png'
    }
});
module.exports = model('Setting', schema)