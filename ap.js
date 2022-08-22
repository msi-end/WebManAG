const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use('/static', express.static(path.join(__dirname, 'static')));

// app.engine('html', require('ejs').renderFile)

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.status(200).send(' dvbdfvd/views/index.ejs');
})




app.listen(port, () => { console.log('This site is running on port ' + port) });