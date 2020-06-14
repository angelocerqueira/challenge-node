import Message from "../models/Message";

class MemoryControler {
  async index(req, res) {
    try {
      const heapTotal = Math.round(
        ((process.memoryUsage().heapTotal / 1024 / 1024) * 100) / 100
      );
      const heapUsed = Math.round(
        ((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100
      );
      const rss = Math.round(
        ((process.memoryUsage().rss / 1024 / 1024) * 100) / 100
      );

      return res.status(200).json({
        heapTotal,
        heapUsed,
        rss,
      });
    } catch (err) {
      return res.status().json({ err });
    }
  }

  async show(req, res) {
    try {
      const listar = await Message.find().sort({ _id: -1 }).limit(1);
      if (listar == " " || listar == "") {
        return res.status(419).json({ msg: " deu ruim" });
      }
      return res.json(listar);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async store(req, res) {
    const { string } = req.query;
    try {
      let message = await Message.findOne({ msg: string });
      if (!message) {
        message = await Message.create({ msg: string });
      }
      return res.status(204).json(message);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}

export default new MemoryControler();
