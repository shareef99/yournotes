import { db } from "../firebase/firebase";
import { Note } from "../pages/admin/faculty/[faculty]";

export const deleteNoteFromSubjects = async ({ type, subject, id }: Note) => {
    try {
        await db
            .collection("subjects")
            .doc(subject)
            .collection(type)
            .doc(id)
            .delete();

        console.log("Deleted from subjects");
    } catch (err) {
        console.log(err);
    }
};

export const deleteNoteFromFaculty = async (id: string, email: string) => {
    try {
        await db
            .collection("faculties")
            .doc(email)
            .collection("notes")
            .doc(id)
            .delete();

        console.log("Deleted from faculties");
    } catch (err) {
        console.log(err);
    }
};

export const updateNameAndUrl = (
    note: Note,
    email: string,
    newValues: { name: string; url: string }
) => {
    const { name, url } = newValues;
    db.collection("faculties")
        .doc(email)
        .collection("notes")
        .doc(note.id)
        .update({ name, url })
        .then(() => {
            db.collection("subjects")
                .doc(note.subject)
                .collection(note.type)
                .doc(note.id)
                .update({ name, url })
                .then(() => console.log("Update successfully"))
                .catch((err) => console.log(err.message));
        })
        .catch((err) => console.log(err.message));
};
