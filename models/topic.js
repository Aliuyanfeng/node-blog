var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

var Schema = mongoose.Schema

var topicSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    mcontent: {
        type: String,
        required: true
    },
    ctime: {
        type: String,
        required: true
    },
    classify: {
        type: String,
        required: true
    },
    like: {
        type: Number
    },
    dislike: {
        type: Number
    },
    read: {
        type: Number,
        default: 0
    }

})
var Topic = module.exports = mongoose.model('Topic', topicSchema)

// var content = new Topic({
//     title: '你好',
//     content: 'sadadasad',
//     classify: 'css',
//     ctime: Date(),

// })
// content.save().then(() => {
//     console.log('文章初始化成功。。。')
// })