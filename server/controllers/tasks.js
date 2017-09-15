var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = {
show: function(req,res) {
    Task.find({}, function (err, tasks){
        res.json(tasks);  
      });
},

create: function(req, res){
    var task = new Task({title: req.body.title, description: req.body.description});
    task.save(function(err) {
      if(err){
        console.log("something went wrong");
      } else {
        res.redirect('/main');
      }
    })
}
}


