var firebaseConfig = {
      apiKey: "AIzaSyAonjd13DYg5msTYnm7xt9trMfKvIpj2G0",
      authDomain: "kwitter-f7cbf.firebaseapp.com",
      databaseURL: "https://kwitter-f7cbf-default-rtdb.firebaseio.com",
      projectId: "kwitter-f7cbf",
      storageBucket: "kwitter-f7cbf.appspot.com",
      messagingSenderId: "872552307321",
      appId: "1:872552307321:web:23b6a5cad9b7dccc7d92a8",
      measurementId: "G-L9NHK91WCT"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);




     var user_name=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="Welcome "+ user_name;

      function addRoom() {
            var room_name=document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                  purpose:"adding room name"
            });
            localStorage.setItem("room_name");
            window.location="";
      }




     

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       
      //Start code
                  console.log("Room Name"- Room_names);
                  row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>"
      //End code
      });});}
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
 }

 function redirectToRoomName(name)
 {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
 }