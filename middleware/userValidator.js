/**
 * Verifies that the user info is the proper data type/restriction.
 * 
 * MAKE SURE that this middleware comes AFTER the bodyValidator. This middleware uses
 * `res.locals.valid` to find the properties it needs.
 */
module.exports = (req, res, next) => {

    const user = res.locals.valid
    // Verify the username is a string
    if (typeof user.username !== "string") return next({ status:400, details: "The username must be a string!" })
    if (typeof user.password !== "string") return next({ status:400, details: "The password must be a string!" })

    next();
}