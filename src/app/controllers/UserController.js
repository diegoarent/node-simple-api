const users = ['User', 'Diego', 'Gisele', 'Lia'];

class UserController {
  index(req, res) {
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

    const user = users[userId];

    if (!user) {
      return res.status(400).json({ error: 'User not found!' });
    }

    // Usuário encontrado
    return res.json(user);
  }
}

export default new UserController();
