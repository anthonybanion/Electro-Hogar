import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.useDeviceLanguage();
const provider = new GoogleAuthProvider();

// Registrar nuevo usuario con email y contraseña
export function registerWithEmail(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Usuario registrado:", userCredential.user);
            return userCredential.user;
        })
        .catch((error) => {
            console.error("Error en registro:", error);
            throw error;
        });
}

// Login con Google
export function loginWithGoogle() {
    return signInWithPopup(auth, provider)
        .then((result) => {
            console.log("Login con Google exitoso:", result.user);
            return result.user;
        })
        .catch((error) => {
            console.error("Error en login con Google:", error);
            throw error;
        });
}

// Login con Email y Password
export function loginWithEmail(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Login exitoso:", userCredential.user);
            return userCredential.user;
        })
        .catch((error) => {
            console.error("Error en login:", error);
            throw error;
        });
}

// Cerrar sesión
export function logout() {
    return signOut(auth)
        .then(() => {
            console.log("Sesión cerrada");
        })
        .catch((error) => {
            console.error("Error al cerrar sesión:", error);
        });
}

// Escuchar cambios en el estado de autenticación
export function subscribeToAuthChanges(callback) {
    return onAuthStateChanged(auth, callback);
}

// Exportar instancia de autenticación
export { auth };