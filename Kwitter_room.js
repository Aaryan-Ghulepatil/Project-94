
var firebaseConfig = {
    apiKey: "AIzaSyDVncIYzZTaxOSKa2MyKc2blBJ6BqQZc_Q",
    authDomain: "kwitter-b4de6.firebaseapp.com",
    databaseURL: "https://kwitter-b4de6-default-rtdb.firebaseio.com",
    projectId: "kwitter-b4de6",
    storageBucket: "kwitter-b4de6.appspot.com",
    messagingSenderId: "659683078255",
    appId: "1:659683078255:web:04001e83104acfb91d1d9a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("welcomename").innerHTML="Welcome "+user_name+" !";

  function addroom(){
    var room_name=document.getElementById("roomName").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"Adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
     console.log("Room name - "+Room_names);
     var row="<u><div class='roomname' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div></u><hr style=color:'grey';>";
     document.getElementById("output").innerHTML +=row;
    //End code
    });});}
getData();

function redirect(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}
