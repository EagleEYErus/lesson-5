const router = require('express').Router();
const db = require('../core/db');

router
  .get('/', (req, res) => {
    res.render('add', {title: 'Добавить задачу'})
  })
  .post('/', (req, res) => {
    console.log(req.body.name);
    db.tasks.create({
      name: req.body.name,
      description: req.body.description
    })
    .then(() => res.redirect('/'))
    .catch(error => res.redirect('/'));
  });

module.exports = router;
