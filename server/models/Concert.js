const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const concertSchema = new Schema({
  artist: String,
  similarArtist: [],
  tags: [],
  summary: String,
  date: Date,
  capacity: Number,
  imgUrl:{},
  userID: {
   type: Schema.Types.ObjectId,
   ref: 'User'
 },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Concert = mongoose.model('Concert', concertSchema);
module.exports = Concert;
