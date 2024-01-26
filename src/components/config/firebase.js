import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, getDoc, setDoc, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-huNJsnKKT8FxpYMfSQ_x7JIA23qaubM",
  authDomain: "product-web-file.firebaseapp.com",
  databaseURL: "https://product-web-file-default-rtdb.firebaseio.com",
  projectId: "product-web-file",
  storageBucket: "product-web-file.appspot.com",
  messagingSenderId: "553088880410",
  appId: "1:553088880410:web:dd98bb8b83614b9cd266a3",
  measurementId: "G-608TL4HNCZ"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
const storage = getStorage();




//login
export async function login(userInfo) {
  const { email, password } = userInfo
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successfully!");
  } catch (e) {
    alert(e.message)
  }
}



//sign up
export async function register(userInfo) {
  const { Fullname, email, password, age } = userInfo
  const { user: { uid } } = await createUserWithEmailAndPassword(auth, email, password)
  const userRef = doc(db, 'users', uid);
  await setDoc(userRef, { email, age, Fullname })
  alert("Register successfully!")
}




//post add
export async function postAdToDb(ad) {
  try {

    const storageRef = ref(storage, `ads/${ad.image.name}`);
    await uploadBytes(storageRef, ad.image)

    const url = await getDownloadURL(storageRef)
    ad.image = url

    await addDoc(collection(db, "ads"), ad)
    alert('Data added successfully!')

  } catch (e) {
    console.log(e.message)

    throw new Error('Failed to add data to the database')
  }
}


//get allData from fireBase 
export async function getAllProducts() {
  const querySnapshot = await getDocs(collection(db, "ads"))
  const ads = []
  querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      // const ad = { id: doc.id, ...doc.data() }

      const ad = doc.data()
      ad.id = doc.id

      ads.push(ad)
  });

  return ads

 
}




export async function getSingleAd(id) {
  console.log(id)
  const docRef = doc(db, "ads", id);
  const docSnap = await getDoc(docRef);



  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {

    console.log("No such document!");
  }
}







