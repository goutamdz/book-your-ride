const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.authUser = async (req, res, next) => {
    // Get token from cookies or authorization header
    console.log(req.headers.authorization || req.cookies.token);
    const token = (req.cookies.token)||(req.headers.authorization && req.headers.authorization && req.headers.authorization.split(' ')[1])|| null;
    //|| (req.headers.authorization && req.headers.authorization.split(' ')[1])

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const tokenInBlacklist = await blacklistTokenModel.findOne({token: token});
    if (tokenInBlacklist) {
        return res.status(401).json({ message: 'Unauthorized: Token blacklisted' });
    }

    try {
        // Verify token using JWT secret
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find user by ID
        const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Attach user to request object for later use in the request lifecycle
        req.user = user;
        next();
    } catch (err) {
        // Return a more informative error message
        return res.status(401).json({ message: `Unauthorized: ${err.message}` });
    }
};
