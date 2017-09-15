var mongoose = require('mongoose');
var TaskSchema = new mongoose.Schema({
    title: String,
    description: String
  })

 var Task = mongoose.model('Task', TaskSchema);