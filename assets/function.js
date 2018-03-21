<script>
      var config = {
        apiKey: "AIzaSyBI1ulfE2kWLX6mbogl1xPJMMETWsNF5uY",
        authDomain: "emitdlr-1043a.firebaseapp.com",
        databaseURL: "https://emitdlr-1043a.firebaseio.com",
        projectId: "emitdlr-1043a",
        storageBucket: "",
        messagingSenderId: "807377597259"
        };

        firebase.initializeApp(config);
            
        $(function(){
            let database = firebase.database();

            $("exampleModalLabel").on("submit", function (e) {
                e.preventDefault();

                let title = $(".recipient-name").val();
                let message =  $(".message-text").val();

                database.ref("message").set(message)
                database.ref("title").set(title)
            }) 
            
            database.ref("message").on("value", function(snapshot){
              let data = snapshot.val();

              $("h1").text(data);
            })

            database.ref("title").on("value", function(snapshot){
              let data = snapshot.val();

              $("h2").text(data);
            })            
        })       
    </script>
