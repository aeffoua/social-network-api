const router = require('express').Router();
const {
  // test,
    getThoughts,
    getSingleThought,
    createThought,
    // updateThought,
    // deleteThought,
    // createReaction,
    // deleteReaction

} = require('../../controllers/thoughtController');


// /api/thoughts
router.route('/')
// .get(test)
.get(getThoughts)
.post(createThought);


// /api/thoughts/:thoughtId
router.route('/:thoughId')
    .get(getSingleThought)
//     .put(updateThought)
//     .delete(deleteThought);

//     router.route('/:thoughtId/reactions')
//     .post(createReaction)
   
//     router.route('/:thoughtId/reactions/:reactionId')

//     .delete(deleteReaction);

module.exports = router;