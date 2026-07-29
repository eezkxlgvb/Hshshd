const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// سرویس فایل‌های استاتیک
app.use(express.static(path.join(__dirname, 'public')));

// همه درخواست‌ها به index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Den login page running on port ${PORT}`);
});
