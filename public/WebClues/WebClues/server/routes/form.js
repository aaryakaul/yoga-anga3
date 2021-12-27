const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const multer = require('multer');
const { check, validationResult } = require('express-validator');

const Form = require('../models/Form');

router.get('/', async (req, res) => {
  try {
    const all = await Form.find({});
    res.json(all);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post(
  '/',
  [
    check('name', 'Please add name').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const pp = req.files.image;

    const { name, email, password } = req.body;

    try {
      let form = await Form.findOne({ email });

      if (form) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      pp.mv('public/img/' + pp.name, async (err) => {
        if (err) {
          res.json({ status: 'file not uploaded' });
        } else {
          form = new Form({
            name,
            email,
            password,
            profileImage: pp.name,
          });

          const salt = await bcrypt.genSalt(10);

          form.password = await bcrypt.hash(password, salt);

          await form.save();
          res.json({ status: 'record inserted successfully' });
        }
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
