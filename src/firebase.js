import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDwPbdCXVWbOFnv7Li_vLvXsvxSpzVIxR8",
  authDomain: "simple-task-e45d9.firebaseapp.com",
  projectId: "simple-task-e45d9",
  storageBucket: "simple-task-e45d9.appspot.com",
  messagingSenderId: "804717653739",
  appId: "1:804717653739:web:2e84ab2dc2858cf603d8ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
