import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA7xRcusIl6bkR7UsCRyIUZOT2HrcM1SeE',
  authDomain: 'cyberproject-deb69.firebaseapp.com',
  projectId: 'cyberproject-deb69',
  storageBucket: 'cyberproject-deb69.appspot.com',
  messagingSenderId: '977802379713',
  appId: '1:977802379713:web:cb3a8cc9895ed86b9b2f40',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
export const facebookProvider = new firebase.auth.GithubAuthProvider();

export const signInWithGoogle = () => {
  return auth.signInWithPopup(googleProvider);
};

export const signInWithGitHub = () => {
  return auth.signInWithPopup(githubProvider);
};

export const signInWithFacebook = () => {
  return auth.signInWithPopup(facebookProvider);
};
