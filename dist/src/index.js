const express = require('express');
const mongoose = require('mongoose');
a;
const app = express();
mongoose.connect('mongodb://localhost/urlShortener', {
    useNewUrlParser: true, useUnifiedTopology: true
});
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});
app.post('/shortUrls', async (req, res) => {
    res.redirect('/');
});
app.listen(process.env.PORT || 5000);
//# sourceMappingURL=index.js.map