const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  lastName: String,
  city: String,
  email: String,
  imgUrl: {type: String, default: "https://placeholdit.imgix.net/~text?txtsize=33&txt=250%C3%97250&w=250&h=250"},
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

const Client = mongoose.model('Client', userSchema);
module.exports = Client;
