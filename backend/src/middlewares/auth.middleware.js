const foodPartnerModel = require("../models/foodpartner.model");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

function getToken(req) {
    if (req.cookies && req.cookies.token) {
        return req.cookies.token;
    }
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
        return req.headers.authorization.split(" ")[1];
    }
    return null;
}

async function authFoodPartnerMiddleware(req, res, next) {
    const token = getToken(req);

    if (!token) {
        return res.status(401).json({
            message: "Please login as a Food Partner first"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret');
        const foodPartner = await foodPartnerModel.findById(decoded.id);

        if (!foodPartner) {
            return res.status(401).json({
                message: "Food partner account not found"
            });
        }

        req.foodPartner = foodPartner;
        next();
    } catch (err) {
        return res.status(401).json({
            message: "Invalid token, please login again"
        });
    }
}

async function authUserMiddleware(req, res, next) {
    const token = getToken(req);

    if (!token) {
        return res.status(401).json({
            message: "Please login first"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret');
        
        let user = await userModel.findById(decoded.id);
        if (!user) {
            // Also check if user is a food partner accessing user routes
            const foodPartner = await foodPartnerModel.findById(decoded.id);
            if (foodPartner) {
                user = foodPartner;
            }
        }

        if (!user) {
            return res.status(401).json({
                message: "User account not found"
            });
        }

        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({
            message: "Invalid token, please login again"
        });
    }
}

module.exports = {
    authFoodPartnerMiddleware,
    authUserMiddleware
};