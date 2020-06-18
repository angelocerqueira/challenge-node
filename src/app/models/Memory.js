import mongoose from 'mongoose';

const MemorySchema = new mongoose.Schema({
  heapTotal: Number,
  heapUsed: Number,
  rss: Number,
});

export default mongoose.model('Memory', MemorySchema);
