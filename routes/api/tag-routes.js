const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try{
    const tags = await Tag.findAll({ include: [{model: Product }]});
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try{
    const tag = await Tag.findByPk(req.params.id, { include: [{model: Product }]});
    if (!tag) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }
    res.status(200).json(tag);
  }catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try{
    const tag = await Tag.create(req.body);
    res.status(200).json(tag);
  }catch (err) {
    res.status(400).json({ message: 'Bad Request' });
  }
  // create a new tag
});

router.put('/:id',async (req, res) => {
  try{
    const tag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!tag) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }
    res.status(200).json(tag);
  }catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  try{
    const tag = Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tag) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
  // delete on tag by its `id` value
});

module.exports = router;
