import firebase from 'firebase/app';
import 'firebase/auth';
import './firebase';

const provider = new firebase.auth.GoogleAuthProvider();

export const loginGoogle = async () =>
  await firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      const { uid, displayName } = res.user;

      return { uid, displayName, status: 200 };
    })
    .catch((err) => {
      console.error(err);
      return { status: 500 };
    });
