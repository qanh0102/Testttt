const express = require('express');
const router = express.Router();
const newsController = require('../controllers/NewsController');

// Sử dụng endpoint mới để lấy dữ liệu từ cả hai collection
router.get('/api/news', newsController.index);

module.exports = router;
