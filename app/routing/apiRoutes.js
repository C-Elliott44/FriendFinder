var friendData = require('../data/friends.js');
var friendServer = require('../../server.js');

// Routes
module.exports = function(app){

app.get("/api/friends", function(req, res) {

    return res.json(friendData);
});


app.post("/api/friends", function(req, res) {

	console.log("trying to match best friend");

	
    var matchUser = {
        name: "",
        photo: "",
        diff: 1000
    };

    var newFriend 	= req.body;
    var newFName 	= newFriend.name;
    var newFData 	= newFriend.photo;
	var newFScores 	= newFriend.scores;
	console.log("newfriendscores" + newFriend.scores);

    var totalDifference = 0; 

	
		for  (var i=0; i< friendData.length; i++) {
			console.log("frienddata.length" + friendData.length)

			console.log(friendData[i].name);
			totalDifference = 0;


			for (var j=0; j< friendData[i].scores[j]; j++){
				console.log("frienddatascores" + friendData[i].scores[j]);


				totalDifference += Math.abs(parseInt(newFScores[j]) - parseInt(friendData[i].scores[j]));
				console.log("total difference" + totalDifference);

				if (totalDifference <= matchUser.diff){

					// Reset the matchUser
					matchUser.name = friendData[i].name;
					console.log("matchUser.name" + matchUser.name);
					matchUser.photo = friendData[i].photo;
					matchUser.diff = totalDifference;
				}
			}
		}


		friendData.push(newFriend);
		console.log("newfriend" + newFriend);        


		res.json(matchUser);
		console.log("matchuser" + matchUser);

}); 


}