const {Thought}= require ('../models')


module.exports={

   //  test(req,res){
   //      res.json({
   //      message:"server is running"
   //   })
   //  },
     createThought(req,res){
        Thought.create(req.body)
        .then((thought)=>res.json(thought))
        .catch((err)=>res.status(500).json(err))
     },
 
//Get all thoughts
   getThoughts(req,res){
      Thought.find(req.body)
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));

   },

   //  Get a single thought
 getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
}