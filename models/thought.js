const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({

  
  reactionBody:{
      type: String,
      required: true,
      maxLength: 280,
  },
  username:{
      type: String,
      required: true
  },
  

},
{
  timestamps: true,
  
}
)
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

    reactions: [
      { 
  type: String,
  type: reactionSchema

      }
  ],

},
{timestamps: true}

)


const Thought = mongoose.model("Thought", thoughtSchema);
const Reaction = mongoose.model("Reaction", reactionSchema);
// reactionSchema.pre("findOneAndDelete",function(next){
//   Thought.updateOne(
//       {_id: this.parent},
//       {$pull:{reactions: this._id}}
    
//   )
// })
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

module.exports = {Thought, Reaction};
