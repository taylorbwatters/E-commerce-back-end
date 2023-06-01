const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [Product],
  })
  .then((categoryData) => {
    res.json(categoryData);
  })
  .catch((err) => {
    console.log(error);
    res.status(500).json({msg: 'Error', err});
  });
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {
    include:[Product],
  })
    .then((categoryData) => {
      res.json(categoryData);
    })
    .catch((err) => {
      console.log(error);
      res.status(500).json({ msg: 'Error', err});
    });
});

router.post('/', (req, res) => {
 Category.create(req.body)
 .then((newCategory) => {
   res.json(newCategory);
 })
 .catch((err) => {
   console.log(error);
   res.status(500).json({ msg: "Error", err });
 });
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: { id: req.params.id },
  })
    .then((editCategory) => {
      res.json(editCategory);
    })
    .catch((err) => {
      console.log(error);
      res.status(500).json({ msg: 'Error', err });
    });
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: { id: req.params.id },
  })
    .then((delCategory) => {
      res.json(delCategory);
    })
    .catch((err) => {
      console.log(error);
      res.status(500).json({ msg: 'Error', err });
    });
});

module.exports = router;
