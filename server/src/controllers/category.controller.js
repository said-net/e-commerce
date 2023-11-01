const { SERVER_LINK } = require("../configs/env.config");
const categoryModel = require("../models/category.model");
const fs = require("fs");
module.exports = {
    create: async (req, res) => {
        const { title } = req?.body;
        const image = req?.files?.image;
        if (!title || !image) {
            res.send({ code: 501 });
        } else {
            try {
                const filePath = `/uploads/categories/${image?.md5}.png`;
                const id = await categoryModel.find().countDocuments() + 1;
                new categoryModel({
                    id,
                    title,
                    iamge: filePath
                }).save().then(() => {
                    image.mv(`.${filePath}`);
                    res.send({ code: 201 });
                })
            } catch (error) {
                console.log(error);
                res.send({ code: 500 });
            }
        }
    },
    getAllToAdmin: async (req, res) => {
        const $categories = await categoryModel.find();
        const data = [];
        $categories?.forEach((c) => {
            data?.push({
                id: c?.id,
                title: c?.title,
                hidden: c?.hidden,
                image: SERVER_LINK + c?.image
            })
        })
    },
    getAllToUser: async (req, res) => {
        const $categories = await categoryModel.find({ hidden: false });
        const data = [];
        $categories?.forEach((c) => {
            data?.push({
                id: c?.id,
                title: c?.title,
                image: SERVER_LINK + c?.image
            })
        })
    },
    editImage: async (req, res) => {
        const { id } = req?.params;
        try {
            const $c = await categoryModel.findOne({ id });
            const image = req?.files?.image;
            if (!$c) {
                res.send({ code: 501 });
            } else {
                fs.unlink(`.${c?.image}`, () => { });
                const filePath = `/uploads/categories/${image?.md5}.png`;
                $c.set({ image: filePath })?.save()?.then(() => {
                    image?.mv(`.${filePath}`);
                    res.send({ code: 200 });
                })
            }
        } catch (error) {
            res.send({ code: 500 });
        }
    },
    editTitle: async (req, res) => {
        const { id } = req?.params;
        const { title } = req?.body;
        try {
            const $c = await categoryModel.findOne({ id });
            if (!$c) {
                res.send({ code: 501 });
            } else {
                $c.set({ title })?.save()?.then(() => {
                    res.send({ code: 200 });
                })
            }
        } catch (error) {
            res.send({ code: 500 });
        }
    },
    editStatus: async (req, res) => {
        const { id } = req?.params;
        const { status } = req?.body;
        try {
            const $c = await categoryModel.findOne({ id });
            if (!$c) {
                res.send({ code: 501 });
            } else {
                $c.set({ hidden: status })?.save()?.then(() => {
                    res.send({ code: 200 });
                })
            }
        } catch (error) {
            res.send({ code: 500 });
        }
    }
}