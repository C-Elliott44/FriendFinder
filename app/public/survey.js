$(document).ready(function() {
    $("#submitBtn").on("click", function() {
        function submitForum() {
            var forumFinished = true;
            $('.validate').each(function() {
                if ($(this).val() === ''){
                    forumFinished = false;
                }
            });
            $('.browser-default').each(function() {
                if ($(this).val() === ""){
                    forumFinished = false;
                }
            });
            return forumFinished;
        }
        //if everything is filled
        if (submitForum() == true) {
            //creates a new friend
            var newFriend = {
                name: $('#friendName').val().trim(),
                profilePic: $('#userImg').val().trim(),
                scores: [
                    $('#q1').val(),
                    $('#q2').val(),
                    $('#q3').val(),
                    $('#q4').val(),
                    $('#q5').val(),
                    $('#q6').val(),
                    $('#q7').val(),
                    $('#q8').val(),
                    $('#q9').val(),
                    $('#q10').val(),
                ]
            };
            //Grabs current URL of website
            var location = window.location.origin;
            $.post("/api/friends", newFriend, function(data) {
                $("#theMatchName").text(data.name);
                $("#theMatchImg").attr("src", data.photo);
            });
            $('.modal').modal();
            $('#friendName').val("");
            $('#userImg').val("");
            $('#q1').val("");
            $('#q2').val("");
            $('#q3').val("");
            $('#q4').val("");
            $('#q5').val("");
            $('#q6').val("");
            $('#q7').val("");
            $('#q8').val("");
            $('#q9').val("");
            $('#q10').val(""); 
        }
            
        else {
            alert("Please fill out ALL fields before submitting survey!")
        }
    });
});
