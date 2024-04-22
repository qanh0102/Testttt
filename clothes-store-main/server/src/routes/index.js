const adminRouter = require('./admin');
const newsRouter = require('./news');

function route(app) {
    app.use('/admin', adminRouter);
    app.use('/news', newsRouter)
}

module.exports = route;
