'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
  const r = parseFloat(req.params.r);
  const result = {
    area: (Math.PI * r * r).toFixed(2),
    circumference: (2 * Math.PI * r).toFixed(2)
  };
res.json(result);
});

app.get('/math/rectangle/:width/:height', (req, res) => {
  const w = parseFloat(req.params.width);
  const h = parseFloat(req.params.height);
  const result = {
    area: (w * h).toFixed(2),
    perimeter: (w + w + h + h).toFixed(2)
  };
  res.json(result);
});


app.get('/math/power/:base/:exponent?', (req, res) => {
  const base = parseFloat(req.params.base);
  const exponent = req.params.exponent === undefined ? 2 : parseFloat(req.params.exponent);

  if (isNaN(base) || isNaN(exponent)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const result = { result: Math.pow(base, exponent) };

  if (req.query.root === 'true') {
    result.root = Math.sqrt(base);
  }

  res.json(result);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});