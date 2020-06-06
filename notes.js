const fs = require('fs');

getNotes = () => {
    return "Your notes......"
}


//function for adding notes

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log("New note added")
    } else {
        console.log("Note title Taken!")
    }


};

//function for removing notes 

const removeNotes = (title) => {
    const notes = loadNotes()

    const notesKeep = notes.filter((note) => note.title !== title);
    saveNotes(notesKeep)

    console.log("This note was removed : " + title);
}

//function to read notes 

const readNote = (title) => {
    const notes = loadNotes();

    const note = notes.find((note) => note.title ===title);

      

    if(note){
        console.log(note.title)
        console.log(note.body)
    }else{
        console.log("No note found");
    }
}


//function for saving notes 

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON)
};

//function for listing notes

const listNotes = () => {
    console.log("<==== Your Notes ====>")
    const notes = loadNotes();

    notes.forEach(note => {
        console.log(note.title);
    });
};


//function for loading notes
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    } catch (error) {
        return [];
    }
}

module.exports = {
     addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
};