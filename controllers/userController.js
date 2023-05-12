const {User}= require('../models')



module.exports = {

    // test(req,res) {
    //     res.json({
    //        message:"server is running" 
    //     })
    // },

// create a new user
    createUser(req,res){
        User.create(req.body)
        .then((user)=>res.json(user))
        .catch((err)=>res.status(500).json(err))
    },

    //Get all users

    getUsers(req,res) {
        User.find(req.body)
        .then((users)=>res.json(users))
        .catch((err)=>res.status(500).json(err));
     },

// get user by Id



 // Get a single user
 getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
}
