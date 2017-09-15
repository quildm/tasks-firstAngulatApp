var tasks = require('../controllers/tasks.js');
module.exports = function(app){
    app.get('/', function(req, res) {
        res.render("index");
      })
      app.post('/tasks', function(req,res){
        tasks.create(req,res);
      })
      app.get('/main', function (req, res) {
        tasks.show(req,res);
      })
}