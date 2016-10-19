const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const router = express.Router();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'nunjucks');
nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

app.use(express.static(path.join(__dirname, '/public')));

const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', (req, res) => {
  res.render('index', { title: '首頁' });
});

router.get('/api/query', (req, res) => {
  res.json(req.query);
});

router.post('/api/body', urlencodedParser, (req, res) => {
  res.json(req.body);
});

router.get('/api/users/1', (req, res) => {
  const user = {
    id: 1,
    name: 'Joe',
    age: 18,
  };
  res.json(user);
});

router.get('/api/users/2', (req, res) => {
  const user = {
    id: 2,
    name: 'John',
    age: 22,
  };
  res.json(user);
});
app.use('/', router);
app.use((req, res) => {
  res.status('404').send('Sorry cant find that!');
});
app.listen(3000);
