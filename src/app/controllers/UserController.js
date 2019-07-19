import User from '../models/User';

// const users = ['User', 'Diego', 'Gisele', 'Lia'];

class UserController {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }

  store(req, res) {
    const { name } = req.body;

    if (!name) {
      res.status(400).json({ error: 'Invalid name!' });
    }

    const userExists = users.find(user => user === name);
    if (userExists) {
      res.status(400).json({ error: 'User already exists!' });
    }

    users.push(name);

    return res.json(users);
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
      res.status(400).json({ error: 'Invalid name!' });
    }

    const userExists = users.findIndex(user => user === name);
    if (userExists !== -1 && userExists != userId) {
      res.status(400).json({
        error: 'Name already choosen by other!',
      });
    }

    users[userId] = name;

    return res.json(users);
  }

  delete(req, res) {
    const { userId } = req.params;

    if (!users[userId]) {
      return res.status(400).json({ error: 'User not found!' });
    }

    users.splice(userId, 1);

    return res.json(users);
  }
}

export default new UserController();
