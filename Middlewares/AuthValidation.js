const pawan = require('joi');

const signupValidation = (req, res, next) => {
    const schema = pawan.object({
        userName: pawan.string().min(3).max(100).required(),
        email: pawan.string().email().required(),
        password: pawan.string().min(4).max(100).required(),
        role: pawan.string().max(10)
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: 'Bad request', error: error.details[0].message });
    }
    next();
};

const loginValidation = (req, res, next) => {
    const schema = pawan.object({
        email: pawan.string().email().required(),
        password: pawan.string().min(4).max(100).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: 'Bad request', error: error.details[0].message });
    }
    next();
};

const productsValidation = (req, res, next) => {
    const schema = pawan.object({
        title: pawan.string().max(50).min(1).required(),
        description: pawan.string().min(10).max(1000).required(),
        image: pawan.string().min(4).max(100).required(),
        price: pawan.number().min(1).required()
   
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: 'Bad request', error: error.details[0].message });
    }
    next();
};

module.exports = {
    signupValidation,
    loginValidation,
    productsValidation
};
