const { SERVER_LINK } = require("../configs/env.config");
const settingModel = require("../models/setting.model")
const fs = require("fs");
module.exports = {
    getSettings: async (req, res) => {
        const $s = await settingModel.findOne({ id: 1 });
        res.send({
            code: 200,
            data: {
                ...$s?._doc,
                logo: SERVER_LINK + $s?.logo,
                mobile_logo: SERVER_LINK + $s?.mobile_logo,
                next_order: $s?.next_order / 60,
                sms_duration: $s?.sms_duration / 60
            }
        });
    },
    setClientWorking: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { working } = req?.body;
        $settings.set({ client_working: working }).save().then(() => {
            res.send({ code: 200 });
        });
    },
    setOperatorWorking: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { working } = req?.body;
        $settings.set({ operator_working: working }).save().then(() => {
            res.send({ code: 200 });
        });
    },
    setSellerWorking: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { working } = req?.body;
        $settings.set({ seller_working: working }).save().then(() => {
            res.send({ code: 200 });
        });
    },
    setCourierWorking: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { working } = req?.body;
        $settings.set({ courier_working: working }).save().then(() => {
            res.send({ code: 200 });
        });
    },
    setBotToken: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { bot_token } = req?.body;
        $settings.set({ bot_token }).save().then(() => {
            res.send({ code: 200 });
        });
    },
    setBotUsername: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { bot_username } = req?.body;
        $settings.set({ bot_username }).save().then(() => {
            res.send({ code: 200 });
        });
    },
    setSendRejected: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { value } = req?.body;
        $settings.set({ send_rejected_order: value }).save().then(($saved) => {
            res.send({ code: 200 });
        });
    },
    setSendArchived: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { value } = req?.body;
        $settings.set({ send_archived_order: value }).save().then(() => {
            res.send({ code: 200 });
        });
    },
    setSendCopy: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { value } = req?.body;
        $settings.set({ send_copy_order: value }).save().then(() => {
            res.send({ code: 200 });
        });
    },
    setSendNew: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { value } = req?.body;
        $settings.set({ send_new_order: value }).save().then(() => {
            res.send({ code: 200 });
        });
    },
    setSendSuccess: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { value } = req?.body;
        $settings.set({ send_success_order: value }).save().then(() => {
            res.send({ code: 200 });
        });
    },
    setSendRecontact: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { value } = req?.body;
        $settings.set({ send_recontact_order: value }).save().then(() => {
            res.send({ code: 200 });
        });
    },
    setSendSended: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { value } = req?.body;
        $settings.set({ send_sended_order: value }).save().then(() => {
            res.send({ code: 200 });
        });
    },
    setSendDelivered: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { value } = req?.body;
        $settings.set({ send_delivered_order: value }).save().then(() => {
            res.send({ code: 200 });
        });
    },
    setPlusBalance: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { value } = req?.body;
        $settings.set({ send_plus_balance: value }).save().then(() => {
            res.send({ code: 200 });
        });
    },
    // OPERS
    setOperatorMinPayment: async (req, res) => {
        const { min_oper_payment } = req?.body;
        const $settings = await settingModel.findOne({ id: 1 });
        if (min_oper_payment < 100) {
            res.send({ code: 501 });
        } else {
            $settings.set({ min_oper_payment }).save().then(() => {
                res.send({ code: 200 });
            });
        }
    },
    setOperatorMaxPayment: async (req, res) => {
        const { max_oper_payment } = req?.body;
        const $settings = await settingModel.findOne({ id: 1 });
        if (max_oper_payment < 100) {
            res.send({ code: 501 });
        } else {
            $settings.set({ max_oper_payment }).save().then(() => {
                res.send({ code: 200 });
            });
        }
    },
    setOperatorAutoDist: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { value } = req?.body;
        $settings.set({ auto_dist: value }).save().then(() => {
            res.send({ code: 200 });
        });
    },
    setOperatorTypeDist: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { type_dist } = req?.body;
        $settings.set({ type_dist }).save().then(() => {
            res.send({ code: 200 });
        });
    },
    // USER & SELLERS
    setRegister: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { value } = req?.body;
        $settings.set({ register: value }).save().then(() => {
            res.send({ code: 200 });
        });
    },
    setNextOrder: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { next_order } = req?.body;
        if (next_order < 1) {
            res.send({ code: 501 })
        } else {
            $settings.set({ next_order: next_order * 60 }).save().then(() => {
                res.send({ code: 200 });
            });
        }
    },
    setShoppingCart: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { value } = req?.body;
        $settings.set({ shopping_cart: value }).save().then(() => {
            res.send({ code: 200 });
        });
    },
    setAutoStream: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { value } = req?.body;
        $settings.set({ auto_stream: value }).save().then(() => {
            res.send({ code: 200 });
        });
    },
    setOpenStream: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { value } = req?.body;
        $settings.set({ open_stream: value }).save().then(() => {
            res.send({ code: 200 });
        });
    },
    setStreamDist: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { stream_dist } = req?.body;
        $settings.set({ stream_dist }).save().then(() => {
            res.send({ code: 200 });
        });
    },
    setMinPayment: async (req, res) => {
        const { min_payment } = req?.body;
        const $settings = await settingModel.findOne({ id: 1 });
        if (min_payment < 100) {
            res.send({ code: 501 });
        } else {
            $settings.set({ min_payment }).save().then(() => {
                res.send({ code: 200 });
            });
        }
    },
    setMaxPayment: async (req, res) => {
        const { max_payment } = req?.body;
        const $settings = await settingModel.findOne({ id: 1 });
        if (max_payment < 100) {
            res.send({ code: 501 });
        } else {
            $settings.set({ max_payment }).save().then(() => {
                res.send({ code: 200 });
            });
        }
    },
    setCurrency: async (req, res) => {
        const { currency } = req?.body;
        const $settings = await settingModel.findOne({ id: 1 });
        $settings.set({ currency }).save().then(() => {
            res.send({ code: 200 });
        });
    },
    setCoins: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { value } = req?.body;
        $settings.set({ coins: value }).save().then(() => {
            res.send({ code: 200 });
        });
    },
    setSendCoins: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { value } = req?.body;
        $settings.set({ send_coins: value }).save().then(() => {
            res.send({ code: 200 });
        });
    },
    setSmsDuration: async (req, res) => {
        const $settings = await settingModel.findOne({ id: 1 });
        const { sms_duration } = req?.body;
        if (sms_duration < 1) {
            res.send({ code: 501 })
        } else {
            $settings.set({ sms_duration: sms_duration * 60 }).save().then(() => {
                res.send({ code: 200 });
            });
        }
    },
    // CLIENT
    setLogo: async (req, res) => {
        const logo = req?.files?.logo;
        const $settings = await settingModel.findOne({ id: 1 });
        if (!logo || !logo?.mimetype?.startsWith('image')) {
            res.send({ code: 501 });
        } else {
            try {
                fs?.unlink('./uploads/logo.png', () => { });
            } catch { }
            $settings.set({ logo: '/uploads/logo.png' }).save().then(() => {
                res.send({ code: 200 });
                logo?.mv(`./uploads/logo.png`);
            })
        }
    },
    setMobileLogo: async (req, res) => {
        const logo = req?.files?.logo;
        const $settings = await settingModel.findOne({ id: 1 });
        if (!logo || !logo?.mimetype?.startsWith('image')) {
            res.send({ code: 501 });
        } else {
            try {
                fs?.unlink('./uploads/mobile-logo.png', () => { });
            } catch { }
            $settings.set({ logo: '/uploads/mobile-logo.png' }).save().then(() => {
                res.send({ code: 200 });
                logo?.mv(`./uploads/mobile-logo.png`);
            })
        }
    },
}