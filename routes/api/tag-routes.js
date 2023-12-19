const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
// be sure to include its associated Product data
router.get('/api/tags/', (req, res) => {
  Tag.findAll({
    include: [
      { model: Product },
      { model: ProductTag },
    ]
  })
  .then((tagData) => {
    res.json(tagData)
  })
  .catch((err) => {
    res.json(err)
  })
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get('/api/tags/:id', (req, res) => {
});

// create a new tag
router.post('/api/tags/', (req, res) => {
});

// update a tag's name by its `id` value
router.put('/api/tags/:id', (req, res) => {
});

// delete on tag by its `id` value
router.delete('/api/tags/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((deletedTag) => {
    res.json(deletedTag)
  })
  .catch((err) => {
    res.json(err)
  })
});

module.exports = router;
