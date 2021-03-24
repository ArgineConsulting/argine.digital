import firebase from "gatsby-plugin-firebase"

export const firestoreDB = (typeof window !== 'undefined') ? firebase.firestore() : {};