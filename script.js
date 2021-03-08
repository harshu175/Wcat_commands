#!/usr/bin/env node

// console.log("Hello");

//const fs= require('fs');

// let data= fs.readFileSync("abc.txt","utf-8");
// fs.writeFileSync("abc.txt",data+ "How are you");
// console.log(fs.existsSync("abc.txt"));
// console.log(data);


//---------------------------- // READ AND WRITE A FILE
// const fs= require('fs');

// let cmds= process.argv.splice(2);

// function wcat(cmds){
//     let data= fs.readFileSync(cmds[0], "utf-8");
//     // fs.writeFileSync(cmds[0],data+ "  I have written this without opening the file");
//     // data=fs.readFileSync(cmds[0], "utf-8");
//     console.log(data);
// }
// wcat(cmds);

//--------------------------TO PRINT NON EMPTY LINES OF A FILE!!!!!

// const fs= require('fs');
// let cmds= process.argv;
// let rem= cmds.slice(2);

// for(let i=0; i<rem.length;i++){
//     let data= rem[i];
//     if(fs.existsSync(data)){
//         let print= fs.readFileSync(data, "utf-8");
//         console.log(print);
//     }else{
//         console.log(data+ "doesn't exist");
//     }
// }

// let options= rem.filter(function(data){
//     if(data.startsWith("-")){
//         return true;
//     }
// });

// let files= rem.filter(function (data){
//     if(!data.startsWith("-")){
//         return true;
//     }
// });

// for(let index in files){
//     let data= fs.readFileSync(files[index], "utf-8");
//     if(options.includes("-s")){
//         let lines = data.split("\r\n");
//         for(let i in lines){
//             if(lines[i] != ""){
//                 console.log(lines[i]);
//             }
//         }
//     }else{
//         console.log.data;
//     }
// }

//-------------------------------COPY FROM ONE FILE TO ANOTHER

// const fs= require('fs');
// let cmds= process.argv.slice(2);
// console.log(cmds);

// for(let i=0; i<cmds.length; i++){
//     if(i!=1){
//         let data= cmds[i];
//         if(fs.existsSync(data)==false){
//             return;
//         }
//     }
// }

// if(cmds[1] != "-w"){
//     return;
// }
// if(cmds.length != 3){
//     return;
// }


// let options= cmds.filter(function(data){
//     if(data.startsWith("-")){
//         return true;
//     }
// });

// let files= cmds.filter(function(data){
//     if(!data.startsWith("-")){
//         return true;
//     }
// });

// if(options[0] == "-w"){
//     let data= fs.readFileSync(files[0], "utf-8");
//     let data2= fs.readFileSync(files[1], "utf-8");
    
//     if(data2== "\r\n"){
//         fs.writeFileSync(files[1], data);
//     }

//     fs.writeFileSync(files[1], data2+ "\r\n" + data);
//     console.log("Hello");
// }else{
//     console.log("invalid command");
// }



