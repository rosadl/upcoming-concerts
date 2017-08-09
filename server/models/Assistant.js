
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssistantSchema = new Schema({
  clientId: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
    required: true
  },
  concertId: {
    type: Schema.Types.ObjectId,
    ref: 'Concert',
    required: true
  },
  similarArtist : [],
  }, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  });

  const Assistant = mongoose.model('Assistant', AssistantSchema);

  module.exports = Assistant;
