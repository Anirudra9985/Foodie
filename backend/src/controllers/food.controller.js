const foodModel = require('../models/food.model');
const storageService = require('../services/storage.service');
const likeModel = require("../models/likes.model");
const saveModel = require("../models/save.model");
const { v4: uuid } = require("uuid");

async function createFood(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Video file is required" });
        }

        const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid());

        const foodItem = await foodModel.create({
            name: req.body.name,
            description: req.body.description,
            video: fileUploadResult.url,
            foodPartner: req.foodPartner._id
        });

        res.status(201).json({
            message: "Food created successfully",
            food: foodItem
        });
    } catch (err) {
        console.error("Error in createFood:", err);
        res.status(500).json({ message: err.message || "Failed to create food reel" });
    }
}

async function getFoodItems(req, res) {
    try {
        const foodItems = await foodModel.find({}).populate('foodPartner', 'name email address phone').sort({ createdAt: -1 });
        res.status(200).json({
            message: "Food items fetched successfully",
            foodItems
        });
    } catch (err) {
        console.error("Error in getFoodItems:", err);
        res.status(500).json({ message: "Failed to fetch food items" });
    }
}

async function likeFood(req, res) {
    try {
        const { foodId } = req.body;
        const user = req.user;

        const isAlreadyLiked = await likeModel.findOne({
            user: user._id,
            food: foodId
        });

        if (isAlreadyLiked) {
            await likeModel.deleteOne({
                user: user._id,
                food: foodId
            });

            await foodModel.findByIdAndUpdate(foodId, {
                $inc: { likeCount: -1 }
            });

            return res.status(200).json({
                message: "Food unliked successfully"
            });
        }

        const like = await likeModel.create({
            user: user._id,
            food: foodId
        });

        await foodModel.findByIdAndUpdate(foodId, {
            $inc: { likeCount: 1 }
        });

        res.status(201).json({
            message: "Food liked successfully",
            like
        });
    } catch (err) {
        console.error("Error in likeFood:", err);
        res.status(500).json({ message: "Failed to update like status" });
    }
}

async function saveFood(req, res) {
    try {
        const { foodId } = req.body;
        const user = req.user;

        const isAlreadySaved = await saveModel.findOne({
            user: user._id,
            food: foodId
        });

        if (isAlreadySaved) {
            await saveModel.deleteOne({
                user: user._id,
                food: foodId
            });

            await foodModel.findByIdAndUpdate(foodId, {
                $inc: { savesCount: -1 }
            });

            return res.status(200).json({
                message: "Food unsaved successfully"
            });
        }

        const save = await saveModel.create({
            user: user._id,
            food: foodId
        });

        await foodModel.findByIdAndUpdate(foodId, {
            $inc: { savesCount: 1 }
        });

        res.status(201).json({
            message: "Food saved successfully",
            save
        });
    } catch (err) {
        console.error("Error in saveFood:", err);
        res.status(500).json({ message: "Failed to update save status" });
    }
}

async function getSaveFood(req, res) {
    try {
        const user = req.user;

        const savedFoods = await saveModel.find({ user: user._id }).populate({
            path: 'food',
            populate: { path: 'foodPartner', select: 'name email address phone' }
        });

        res.status(200).json({
            message: "Saved foods retrieved successfully",
            savedFoods: savedFoods || []
        });
    } catch (err) {
        console.error("Error in getSaveFood:", err);
        res.status(500).json({ message: "Failed to fetch saved foods" });
    }
}

module.exports = {
    createFood,
    getFoodItems,
    likeFood,
    saveFood,
    getSaveFood
};