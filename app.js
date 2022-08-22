const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const mainRoute = require('./routes/index-route')
const panels = require('./routes/panels')


app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({ extended: true }));

// app.engine('html', require('ejs').renderFile)

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.status(200).render('index');
});
app.use('/p', mainRoute);
app.use( panels);


app.get('*', (req, res) => {
    res.render('./page/error');
});
app.listen(port, () => { console.log('This site is running on port ' + port) });