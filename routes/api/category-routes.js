const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get('/api/categories/', (req, res) => {
  Category.findAll({ include: Product }).then((categoryData) => {
    res.json(categoryData)
  })
    .catch((err) => {
      console.log(err)
    })
});

// find one category by its `id` value
// be sure to include its associated Products
router.get('/api/categories/:id', (req, res) => {
  Category.findByPk(req.params.id, { include: Product }).then((categoryData) => {
    res.json(categoryData)
  })
    .catch((err) => {
      console.log(err);
    })
});

// create a new category
router.post('/api/categories/', (req, res) => {
  Category.create(req.body)
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      res.jaon(err);
    })
});

// update a category by its `id` value
router.put('/api/categories/:id', (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedCategory) => {
      res.json(updatedCategory);
    })
    .catch((err) => {
      res.json(err)
    });
});

// delete a category by its `id` value
router.delete('/api/categories/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => {
      res.json(err)
    })
});

module.exports = router;
