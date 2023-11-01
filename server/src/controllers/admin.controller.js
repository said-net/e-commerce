const md5 = require("md5");
const adminModel = require("../models/admin.model")
const jwt = require('jsonwebtoken');
const { ADMIN_SECRET } = require('../configs/env.config');
const settingModel = require("../models/setting.model");
module.exports = {
    default: async () => {
        const $admin = await adminModel.findOne({ username: 'saidnet' });
        if (!$admin) {
            new adminModel({
                name: "Saidislom",
                username: "saidnet",
                password: md5('555555')
            }).save();
        }
        const $setting = await settingModel.findOne({ id: 1 });
        if (!$setting) {
            new settingModel().save();
        }
    },
    signIn: async (req, res) => {
        const { username, password, remember } = req?.body;
        if (!username || !password) {
            res?.send({ code: 203 });
        } else {
            try {
                const $admin = await adminModel.findOne({ username, password: md5(password) });
                if (!$admin) {
                    res.send({ code: 199 });
                } else {
                    const access = jwt.sign({ _id: $admin?._id }, ADMIN_SECRET, { expiresIn: !remember ? '1h' : '9999d' });
                    $admin.set({ access }).save().then(() => {
                        res.send({ code: 202, access });
                    })
                }
            } catch (error) {
                console.log(error);
                res?.status(500).json(error)
            }
        }
    },
    verfiySession: async (req, res) => {
        res?.send({ code: 200, data: req?.admin })
    },
}