const express = require('express');
const router = express.Router();
const favoriteAcademyController = require('../controllers/favController');

// إضافة معهد مفضل
router.post('/', favoriteAcademyController.addFavorite);

// حذف معهد مفضل
router.delete('/:id', favoriteAcademyController.deleteFavorite);

// جلب المعاهد المفضلة الخاصة بالمستخدم
router.get('/:userId', favoriteAcademyController.getFavorites);

module.exports = router;
