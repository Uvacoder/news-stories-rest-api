const {fetchTopics} = require('../MODELS/topics_models');

exports.getTopics = (req, res, next) => {
    fetchTopics()
    .then((data) => {
        res.status(200).send({data})
    })
    .catch((err) => console.log(err))
}