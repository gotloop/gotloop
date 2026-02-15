# Data Model

## Sound

A Sound is the basic data shared across the app, stored in the cloud as a file.

Sources:
- Import from filesystem
- Import from Soundcloud / YouTube APIs
- Record directly from microphone

## Loop

A Loop encapsulates a Sound and adds looping info. Editing operations:
- Set start time
- Set end time
- Set BPM
- Record, upload, get, delete

## Song

Assemble and organize Loops into Songs:
- Organize loops by projects
- Time patterns + piano roll
- Drag & drop box UI to graphically link input and output of AudioNodes

Box operations: create, choose type, fill parameters, link, edit cable, move.

Use a library of generator / effects / pattern-like boxes to create a Song.

## User

- Basic login auth

## Pattern

Sequencing patterns for loops.

## SoundBox

Drag and drop interface to connect WebAudio API nodes.

## Visualizer

Visual rendering of loops.
