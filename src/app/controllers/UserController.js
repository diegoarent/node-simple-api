const users = ['User', 'Diego', 'Gisele', 'Lia'];

class UserController {
  index(req, res) {
    return res.json(users);
  }
}

export default new UserController();
