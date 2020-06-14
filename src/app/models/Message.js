import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  msg: String,
});

export default mongoose.model('Message', MessageSchema);
