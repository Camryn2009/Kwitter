
var firebaseConfig = {
      apiKey: "AIzaSyBQs4X9gKBkaYSRXBkLvvdM_lb-De0Rw9Q",
      authDomain: "kwitter-4c596.firebaseapp.com",
      databaseURL: "https://kwitter-4c596-default-rtdb.firebaseio.com",
      projectId: "kwitter-4c596",
      storageBucket: "kwitter-4c596.appspot.com",
      messagingSenderId: "1032344976981",
      appId: "1:1032344976981:web:99c9955750de7592595edc"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
