module.exports = (req, res, next) => {
    if (req.session && req.session.user) {
        next();
    } else {
        next({ status:401, details:"Please login to continue." });
    }
}