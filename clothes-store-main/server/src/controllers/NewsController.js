const MainNews = require('../models/MainNews');
const SecondaryNews = require('../models/SecondaryNews');

class NewsController {
    
    async index(req, res, next) {
        try {
             // Truy vấn dữ liệu từ cả hai collection
             const mainNews = await MainNews.find({});
             const secondaryNews = await SecondaryNews.find({});
 
             // Kết hợp dữ liệu từ cả hai collection thành một kết quả duy nhất
             const allNews = { mainNews, secondaryNews };
 
            res.json(allNews);
        } catch (error) {
            next(error); // Chuyển lỗi đến middleware xử lý lỗi nếu có lỗi
        }
    }
}

module.exports = new NewsController;
