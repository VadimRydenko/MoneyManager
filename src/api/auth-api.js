import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// eslint-disable-next-line
import { getUserData } from './expense-api';

export const signUpUser = async ({ email, password }) => {
  try {
    const res = await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        firestore().collection('users').doc(result.user.uid).set({
          email: email,
        });
        return result.user.uid;
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.error('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.error('That email address is invalid!');
        }

        console.error(error);
      });
    return res;
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const data = await auth()
      .signInWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        return getUserData(user.uid);
      });
    return { data };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export const logoutUser = () => {
  auth().signOut();
};
