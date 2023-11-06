const express = require('express');
const router = express.Router();

const ideas = [
  {
    id: 1,
    text: 'Under the starry night sky, the curious cat chased a firefly through the enchanting forest, guided by the gentle whispers of the wind.',
    tag: 'Technology',
    username: 'TonyStark',
    date: '2023-03-12',
  },
  {
    id: 2,
    text: 'As the sun dipped below the horizon, a rainbow appeared, casting a colorful bridge across the tranquil lake, where a lone swan gracefully glided.',
    tag: 'Inventions',
    username: 'BruceBanner',
    date: '2023-04-24',
  },
  {
    id: 3,
    text: '"Amid the bustling city streets, a street musician played a soulful melody on his saxophone, capturing the hearts of passersby as the sun set in the background."',
    tag: 'Gaming',
    username: 'MikeMyers',
    date: '2021-12-30',
  },
];

// Get all Ideas
router.get('/', (req, res) => {
  res.json({ success: true, data: ideas });
});

// Get single idea
router.get('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }

  res.json({ success: true, data: idea });
});

// Add an idea
router.post('/', (req, res) => {
  const idea = {
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10),
  };

  ideas.push(idea);

  res.json({ success: true, data: idea });
});

module.exports = router;
