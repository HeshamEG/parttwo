import * as firebase from 'firebase';

// should go in a secret file
var config = {
  apiKey: "AIzaSyACbmsKLZ8cXL14Z0YFRFM9XYT7NmUEji8",
  authDomain: "partone-4143d.firebaseapp.com",
  databaseURL: "https://partone-4143d.firebaseio.com",
  projectId: "partone-4143d",
  storageBucket: "partone-4143d.appspot.com",
  messagingSenderId: "328720796817"
};
  
  firebase.initializeApp(config);

export default firebase;