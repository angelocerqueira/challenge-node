import Message from '../models/Message';

// import { io } from '../../server';

class SocketController {
  async index(req, res) {
    const response = await Message.find().sort({ _id: -1 }).limit(1);

    const string = response.map((a) => {
      return a.msg;
    });
    return string;
  }
}

export default new SocketController();
