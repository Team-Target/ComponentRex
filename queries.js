var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'cheesedood123',
  database : 'rex_component'
});

connection.connect();

var getAllReviews = function(id, cb) {
  connection.query("select * from reviews where id=?", [id], (err, results) => {
    if (err) {
      console.log("error getting all user data")
      cb(err, null);
    }
    cb(null, results);
  })
};

module.exports.getAllReviews = getAllReviews;