const attachUserId = (req, res, next) => {
    const userId = req.header('user_id');
    if (!userId) {
        return res.status(400).json({ error: 'User ID header is missing' });
    }
    req.userId = userId;
    next();
};

export default attachUserId;
