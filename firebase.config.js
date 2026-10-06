// ==========================================================================
// FIREBASE CONFIGURATION
// ==========================================================================

import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut, 
  onAuthStateChanged, 
  setPersistence,
  browserLocalPersistence, 
  browserSessionPersistence
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  getDoc, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ==========================================================================
// ⚠️ GANTI DENGAN CONFIG FIREBASE KAMU ⚠️
// ==========================================================================
const firebaseConfig = {
  apiKey: "AIzaSyBBqLvfbpyPKa67qcSrXaYQn1EzTdIvtqQ",
  authDomain: "jurnal-digital-1c590.firebaseapp.com",
  projectId: "jurnal-digital-1c590",
  storageBucket: "jurnal-digital-1c590.firebasestorage.app",
  messagingSenderId: "411926276896",
  appId: "1:411926276896:web:3be7c9523ba8241931c545",
  measurementId: "G-8DW6M1YFEW"
};

// ==========================================================================
// INITIALIZE FIREBASE
// ==========================================================================
// Cek dulu, kalau belum ada baru init
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

// ==========================================================================
// EXPOSE KE GLOBAL
// ==========================================================================
window.auth = auth;
window.db = db;
window.fb = {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp
};

// ==========================================================================
// TANDAI FIREBASE SIAP
// ==========================================================================
window.firebaseReady = true;
window.dispatchEvent(new Event('firebase-ready'));

console.log("✅ Firebase berhasil diinisialisasi");