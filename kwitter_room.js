
var firebaseConfig = { apiKey: "AIzaSyBBSHEtmwbWS5XiJ7J3r-OrgF4QmPnZDQQ",
 authDomain: "kwitter-40a68.firebaseapp.com",
  databaseURL: "https://kwitter-40a68.firebaseio.com", projectId: "kwitter-40a68",
   storageBucket: "kwitter-40a68.appspot.com",
    messagingSenderId: "92526912660",
     appId: "1:92526912660:web:e3b98171eb2e81ad194081",
      measurementId: "G-4N6J9YBKD1" };
       // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function getData()
 { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
}); }); }
getData();


function addRoom()
{
      Room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update(
            {
                  purpose:"adding Roomname"
            }
      );
      localStorage.setItem("room_name", Room_name);
      window.location = "kwitter_page.html";
}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
function redirectToRoomName(Room_name)
{
      console.log("inside function" + Room_name);
      localStorage.setItem("Room_name",Room_name);
      window.location = "kwitter_page.html"
}