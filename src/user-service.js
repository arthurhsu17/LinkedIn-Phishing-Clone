import firebase from "@firebase/app";
import "@firebase/firestore";

class UserService {
  add(email, password) {
    const userSet = {
      email: email,
      password_length: password.length,
      created_at: new Date(),
    };
    const db = firebase.firestore();
    return db.collection("users").add(userSet);
  }
}

export default new UserService();