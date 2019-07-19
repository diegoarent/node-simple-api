import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });

    return res.json(file);
  }

  async index(req, res) {
    const { page = 1 } = req.query;
    const perPage = 5;

    const files = await File.findAll({
      limit: perPage,
      offset: (page - 1) * perPage,
    });

    return res.json(files);
  }

  async delete(req, res) {
    const { fileId } = req.params;

    const file = await File.findByPk(fileId);

    if (!file) {
      return res.status(400).json({ error: 'File not found!' });
    }

    file.destroy();

    return res.status(204).send();
  }
}

export default new FileController();
