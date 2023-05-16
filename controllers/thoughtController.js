const {Thought}= require ('../models')


module.exports={

   //  test(req,res){
   //      res.json({
   //      message:"server is running"
   //   })
   //  },
     createThought(req,res){
        Thought.create(req.body)
        .then((dbThoughtData)=>res.json(dbThoughtData))
        .catch((err)=>res.status(500).json(err))
     },
 
//Get all thoughts
   getThoughts(req,res){
      Thought.find()
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));

   },

   //  Get a single thought
 getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((dbThoughtData) =>
        !dbThoughtData
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(dbThoughtData)
      )
      .catch((err) => res.status(500).json(err));
  },

  //Update Thought

  updateThought(req, res) {
   Thought.findOneAndUpdate(
     { _id: req.params.thoughtId },
     { $set: req.body },
   //   { runValidators: true, new: true }
   )
     .then((dbThoughtData) =>
       !dbThoughtData
         ? res.status(404).json({ message: 'No thought with this id!' })
         : res.json(dbThoughtData)
     )
     .catch((err) => {
       console.log(err);
       res.status(500).json(err);
     });
   },

   //Delete Thought
   deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((dbThoughtData) =>
        (!dbThoughtData)
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.status(200).json({message: "thought successfullt deleted!"})
          )
      .catch((err) => 
      {
        console.log(err);
        res.status(500).json(err)
      });
  },

  //Create a reaction
  createReaction(req,res){
    console.log('you added a reaction');
    Thought.findByIdAndUpdate(
      req.params.thoughtId
      )
    .then((dbThoughtData)=>
    !dbThoughtData
    ? res
    .status(404)
    .json({ message: 'No thought found with that ID :(' })
          : res.json(dbThoughtData)
    )
    .catch((err)=>{
     console.log(err);
     res.status(500).json(err)
  });
 },

 //Delete a reaction
 deleteReaction(req, res) {
  console.log('you deleted a reaction');
  Thought.findByIdAndDelete(
    req.params.thoughtId,
  )
    .then((dbThoughtData) =>
      !dbThoughtData
        ? res.status(404)
        .json({ message: 'No reaction with that ID' })
      : res.json(dbThoughtData)
    )
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    });
},


}
