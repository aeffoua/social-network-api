const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
 deleteFriend
} = require('../../controllers/userController');

// /api/users
router.route('/')
.get(getUsers)
.post(createUser);


// /api/users/:userId
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

// // /api/users/:userId/friends/:friendId
router.route('/friends/:userId')
.post(addFriend)
.delete(deleteFriend)

module.exports = router;


