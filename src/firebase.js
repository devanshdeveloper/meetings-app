import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDoL6WIxj3smLdZuzmOHQ3RmiQRS9gPMFQ",
  authDomain: "meetings-app-c7b2b.firebaseapp.com",
  projectId: "meetings-app-c7b2b",
  storageBucket: "meetings-app-c7b2b.appspot.com",
  messagingSenderId: "698140472610",
  appId: "1:698140472610:web:e45c04c7cddbceeeb8217b",
  measurementId: "G-H2B6MYR64R",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const meetingsRef = collection(db, "meetings");

export function getMeetings(then) {
  getDocs(meetingsRef).then((data) => then(data.docs));
}
export function addMeetingInFirebase(data) {
  return addDoc(meetingsRef, data);
}

export function updateMeetingInFirebase(id, data) {
  return updateDoc(doc(db, "meetings", id), data);
}

export function deleteMeetingInFirebase(id) {
  return deleteDoc(doc(db, "meetings", id));
}
