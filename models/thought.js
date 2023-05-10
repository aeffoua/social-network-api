const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({

    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
      maxLength: 280,

    },

    createdAt: { 
        type: Date,
        default: Date.now
        //Use a getter method to format the timestamp on query
        get: (timestamp) => dateFormat(timestamp)
        
        },

    username: {
        type: String,
        required: true,
    },

    reactions: {
        type: String,
        required: true,
    },

}

),

const reactionSchema = new mongoose.Schema({

    reactionId:{
        type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
        
    },
    reactionBody:{
        type: String,
        required: true,
        maxLength: 280,
    },
    username:{
        type: String,
        required: true
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