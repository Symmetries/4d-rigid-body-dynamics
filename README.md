# Simple 4D Rigid Body Dynamics

This project simulates rotational 4D rigid body dynamics without gyroscopic precession.

## Folder Structure
The folder `src` contains the source code in TypeScript and the folder `public` contains the transpiled code to JavaScript.

## How to Run

You will need `node.js` and `tsc` to transpile this project.
The commands to transpile are in the file `run.sh` (you can remove the `-w` flag as that's only for development).
The project is already transpiled, however.
To view the project, you will need a simple web server.
If you have Python 3 installed, you can simply move to the `public` folder and then run:
```
python3 -m http.server 8080
```
and open your browser at http://localhost:8080.
