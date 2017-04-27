const router = require('express').Router();
const db = require('../core/db');

router
  .get('/', (req, res) => {
    db.tasks.findAll().then(result => {
      res.render('index', {title: 'ToDo List', tasks: result});
    }).catch(error => res.render('index'));
  }).get('/id/:id', (req, res) => {
    console.log(req.params.id);
    db.tasks.destroy({where: {id: req.params.id}}).then(() => {
      res.redirect('/');
    });
  });

module.exports = router;
