const mongoose = require('mongoose');


const thoughtSchema = new mongoose.Schema({

    thoughtText: {
        type: String,
        // required: true,
        minLength: 1,
      maxLength: 280,

    },

    username: {
        type: String,
        // required: true,
    },

    reactions: {
        type: String,
        // required: true,
    },

},
{timestamps: true}

)

const reactionSchema = new mongoose.Schema({

    reactionId:{
        type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
        
    },
    reactionBody:{
        type: String,
        // required: true,
        maxLength: 280,
    },
    username:{
        type: String,
        // required: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    },

},
{
    toJSON: {
      getters: true,
    },
    id: false,
  }
)


const Thought = mongoose.model("Thought", thoughtSchema);
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

module.exports = Thought;