const router = require('express').Router();
const {
  // test,
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction

} = require('../../controllers/thoughtController');


// /api/thoughts
router.route('/')
// .get(test)
.get(getThoughts)
.post(createThought);


// /api/thoughts/:thoughtId
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

    router.route('/reactions')
    .post(createReaction)
    .delete(deleteReaction);



module.exports = router;