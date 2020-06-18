import Message from '../models/Message';

class StringController {
  async show(req, res) {
    try {
      const menssage = await Message.find().sort({ _id: -1 }).limit(1);

      const string = menssage.map((a) => {
        return a.msg;
      });
      if (string == ' ' || string == '') {
        return res.status(419).json({ msg: ' deu ruim' });
      }
      const toInter = +string;

      if (typeof toInter === 'number') {
        return setTimeout(() => {
          return res.json(string);
        }, toInter * 1000);
      }
      return res.json(string);
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

export default new StringController();
