const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    username: { 
        type: String,
         required: true,
         unique: true,
         trim: true
        },
   email: { 
    type: String,
    required: true,
    match: [/.+\@.+\..+/],
    unique: true

},
    thoughts: [
        { 
    type: String,
    type: mongoose.Schema.Types.ObjectId,
        ref: 'Thought'

        }
    ],

    friends:[
        { 
    type: String,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'

        }
    ],
},

{
    toJSON: {
      getters: true,
    },
  }
);

//  Create a virtual 'friendCount' that retrieves the length 
//      of the user's friends array field on query

userSchema.virtual('friendCount').get(function () {
    return this.user.length;
  });

  // Initialize our User model
const User = model('user', userSchema);

module.exports = User;
