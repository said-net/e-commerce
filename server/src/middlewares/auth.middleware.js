const { ADMIN_SECRET } = require('../configs/env.config');
const adminModel =require( '../models/admin.model');

const jwt = require('jsonwebtoken');

module.exports = {
    ADMIN: (req, res, next) => {
        const token = req?.headers['x-auth-token'];
        if (!token || !token?.startsWith('Bearer ')) {
            res.send({code:299});
        } else {
            const signature = token?.replace('Bearer ', '');
            jwt?.verify(signature, ADMIN_SECRET, async (err, payload) => {
                if (err) {
                    res?.send({code:299});
                } else {
                    const { _id } = payload;
                    try {
                        const $admin = await adminModel.findById(_id);
                        if (!$admin) {
                            res?.send({code:299});
                        } else if ($admin?.access !== signature) {
                            res?.send({code:299});
                        } else {
                            const { name, username } = $admin;
                            req.admin = { _id, name, username };
                            next();
                        }
                    } catch (error) {
                        console.log(error);
                        res.send({code: 501})
                    }
                }
            })
        }
    }
}