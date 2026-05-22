const mongoose = require('mongoose');

const favoriteAcademySchema = new mongoose.Schema({
    academyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Academy', // مرجع إلى نموذج الأكاديمية
        required: true
    },
    userId: {
        type: String,
        required: true // يمكن استخدامه لتمييز المعاهد المفضلة لكل مستخدم
    }
});

module.exports = mongoose.model('FavoriteAcademy', favoriteAcademySchema);
