import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .min(6)
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists!' });
    }

    req.body.password_hash = req.body.password;
    const { id, name, email } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }

  read(req, res) {
    const { userId } = req.params;

    if (!users[userId]) {
      return res.status(400).json({ error: 'User not found!' });
    }

    return res.json(users[userId]);
  }

  update(req, res) {
    const { userId } = req.params;
    const { name } = req.body;

    if (!users[userId]) {
      return res.status(400).json({ error: 'User not found!' });
    }

    if (!name) {
      return res.status(400).json({ error: 'Invalid name!' });
    }

    const userExists = users.findIndex(user => user === name);
    if (userExists !== -1 && userExists != userId) {
      return res.status(400).json({
        error: 'Name already choosen by other!',
      });
    }

    users[userId] = name;

    return res.json(users);
  }

  async delete(req, res) {
    const { userId } = req.params;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(400).json({ error: 'User not found!' });
    }

    await user.destroy();

    return res.status(204).send();
  }
}

export default new UserController();
