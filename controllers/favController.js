const FavoriteAcademy = require('../models/favModel');

// إضافة معهد مفضل
exports.addFavorite = async (req, res) => {
    const { academyId, userId } = req.body;

    try {
       
        const existingFavorite = await FavoriteAcademy.findOne({ academyId, userId });
        if (existingFavorite) {
            return res.status(400).json({ message: 'هذا المعهد مضاف بالفعل إلى المفضلة' });
        }

        const newFavorite = new FavoriteAcademy({ academyId, userId });
        await newFavorite.save();
        res.status(201).json({ message: ' تمت إضافة المعهد للمفضلة بنجاح', favorite: newFavorite });
    } catch (error) {
        res.status(500).json({ message: 'حدث خطأ', error });
    }
};
// حذف معهد مفضل
exports.deleteFavorite = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedFavorite = await FavoriteAcademy.findByIdAndDelete(id);
        if (!deletedFavorite) {
            return res.status(404).json({ message: 'لم يتم العثور على المعهد  للحذف' });
        }
        res.status(200).json({ message: 'معهدالمتواجد ضمن المفضلة تم حذفه بنجاح' });
    } catch (error) {
        res.status(500).json({ message: 'حدث خطأ', error });
    }
};

// جلب المعاهد المفضلة الخاصة بالمستخدم
exports.getFavorites = async (req, res) => {
    const { userId } = req.params;

    try {
        const favorites = await FavoriteAcademy.find({ userId }).populate('academyId');
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ message: 'حدث خطأ', error });
    }
};
