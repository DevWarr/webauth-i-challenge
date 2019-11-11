module.exports = {
    name: "f",
    secret: "You wan da cooooookie???",
    cookie: {
        maxAge: 1000 * 15,
        secure: process.env.COOKIESECURE || false // SHOULD BE true IN PRODUCTION
    },
    httpOnly: true,
    resave: false,
    saveUninitialized: false
}