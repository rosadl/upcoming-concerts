const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const adminSchema = new Schema({
  name: String,
  location: String,
  email: String,
  description: String,
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

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
