      // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBBwnB7OzRkJHH7Wo3qEZ9bqbeQCfxFwbA",
    authDomain: "project-adventure-7fb38.firebaseapp.com",
    databaseURL: "https://project-adventure-7fb38.firebaseio.com",
    projectId: "project-adventure-7fb38",
    storageBucket: "project-adventure-7fb38.appspot.com",
    messagingSenderId: "1091190600610"
  };
  firebase.initializeApp(config);
           
        $(function(){
            let database = firebase.database();

            $("form").on("submit", function (e) {
                e.preventDefault();

                let name = $(".name-input").val();
                let message =  $(".message-input").val();

                database.ref("name").set(name)
                database.ref("message").set(message)
            }) 
            
            database.ref("message").on("value", function(snapshot){
              let data = snapshot.val();
            })            
        }) 
