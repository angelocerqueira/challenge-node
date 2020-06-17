import Memory from '../models/Memory';

class MemoryControler {
  async store(req, res) {
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
      const response = await Memory.create({ heapTotal, heapUsed, rss });

      return res.status(200).json(response);
    } catch (err) {
      return res.status().json({ err });
    }
  }
}

export default new MemoryControler();
