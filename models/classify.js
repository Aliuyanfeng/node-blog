var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

var Schema = mongoose.Schema

var classifySchema = new Schema({
    cname: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
})

var Classify = module.exports = mongoose.model('Classify', classifySchema)

// var plate = new Classify({
//     cname: 'Vue.js',
//     value: 4
// })
// plate.save().then(() => {
//     console.log('分类初始化成功。')
// })