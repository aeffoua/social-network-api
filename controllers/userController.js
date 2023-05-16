const {User}= require('../models')



module.exports = {
// create a new user
    createUser(req,res){
        User.create(req.body)
        .then((dbUserData)=>res.json(dbUserData))
        .catch((err)=>res.status(500).json(err))
    },

    //Get all users

    getUsers(req,res) {
        User.find()
        .then((dbUserData)=>res.json(dbUserData))
        .catch((err)=>res.status(500).json(err));
     },


 // Get a single user
 getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((dbUserData) =>
        !dbUserData
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(dbUserData)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Update user
  updateUser(req,res) {
    User.findOneAndUpdate(
      {_id:req.params.userId},
      { $set: req.body },
      // { runValidators: true, new: true }
    )
    .then((dbUserData) =>
        !dbUserData
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(dbUserData)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Delete User

    deleteUser(req, res) {
      User.findOneAndDelete({ _id: req.params.userId })
        .then((dbUserData) =>
          !dbUserData
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.status(200).json({message: 'user successfully deleted!'})
        )
        .catch((err) => {
          console.log(err);
          res.status(500).json(err)
        });
    },



  //Add a friend

  addFriend(req, res) {
    console.log('You are adding a friend');
    console.log(req.body);
    User.findByIdAndUpdate(
      req.params.userId ,
      { $addToSet: { friends: req.body.friendId } },
      { runValidators: true, new: true }
    )
      .then((dbUserData) =>
        !dbUserData
          ? res
              .status(404)
              .json({ message: 'No user found with that ID :(' })
          : res.json(dbUserData)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err)

      });
  },


  //Delete a friend

  deleteFriend(req, res) {
    console.log('you deleted a friend');
    User.findByIdAndDelete(
      req.params.userId ,
    )
      .then((dbUserData) =>
        !dbUserData
          ? res.status(404)
          .json({ message: 'No friend with that ID' })
        : res.json(dbUserData)
      )
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      });
  },
}

  
