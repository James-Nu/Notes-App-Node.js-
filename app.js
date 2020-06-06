const fs = require('fs');
const yargs = require('yargs')
const notes = require("./notes");

//creating add command 

yargs.command({
    command:"add",
    describe:"Add a new note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
});

yargs.command({
    command:"remove",
    describe:"Remove a saved note",
    builder:{
        title:{
            describe:"Remove note",
            demandOption:true
        }
    },
    handler(argv){
        notes.removeNotes(argv.title);
    }
});

yargs.command({
    command:"list",
    describe:"listing note",
    handler(){
        notes.listNotes();
    }
})

yargs.command({
    command:"read",
    describe:"reading note",
    builder:{
        title:{
            describe:"Read a note",
            demandOption:true
        }
    },
    handler:(argv)=>{
        notes.readNote();
    }
})

yargs.parse();