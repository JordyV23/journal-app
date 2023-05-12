import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./";
import { loadNotes } from "../../helpers/";

export const startNewNote = () => {
  return async (dispatch, getSate) => {
    dispatch(savingNewNote());
    const { uid } = getSate().auth;
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);
    newNote.id = newDoc.id;
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};


export const startLoadingNotes = () => {
  return async(dispatch, getSate) => {
    const { uid } = getSate().auth;
    const notes = await loadNotes(uid)
    dispatch(setNotes(notes))
  }
}
