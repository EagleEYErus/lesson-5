const router = require('express').Router();
const db = require('../core/db');

router
  .get('/id/:id', (req, res) => {
    db.tasks.findOne({where: {id: req.params.id}})
      .then(result => {
        res.render('edit', {title: 'Редактировать задачу', task: result});
      }).catch(error => res.sendStatus(400));
  })
  .post('/', (req, res) => {
    console.log(req.body.name);
    db.tasks.update({
      name: req.body.name,
      description: req.body.description
    },
    {
      where: {id: req.body.id}
    })
    .then(() => res.redirect('/'))
    .catch(error => res.redirect('/'));
  });

module.exports = router;
