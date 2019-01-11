var url = "http://localhost:3000/programare";
var programare = [];

var num = "";
var pas = "";


function myLoad(){
        var xhr  = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.onload = function () {
            if (xhr.readyState == 4 && xhr.status == "200") {
                programare = JSON.parse(xhr.responseText);
                console.table(programare);
            } 
        }
        
    xhr.send();

}

myLoad();

function login(){

    num = document.getElementById("nume1").value;
    pas = document.getElementById("pas1").value;
    var ok = 0;
    console.log(num + " " + pas);
    //console.log(programare[0].nume);
    for(var i = 0; i < programare.length; i++){
        if(programare[i].nume == num && programare[i].id == pas){
            console.log("Autentificare cu success!");
            window.location.href="http://localhost/loggedUser.html";


        }
            
         else{
            ok = ok + 1;
            console.log("A aparut o eroare! Incercati din nou!");
         }
            
    }

    if (ok === programare.length)
        alert("Date inavlide!")
}

function del(){
    var progToDelete = document.getElementById("pas2").value;

    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open("DELETE", url+"/"+progToDelete, true);
        xhr.onload = function () {
            alert("Succes!!!");
            var us = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == "200") {
                console.table(us);
                window.location.href="http://localhost/index.html";
            } else {
                console.error(us);
            }
        }

        xhr.onerror = function () {
            alert('Nu s-a sters!');
        }
        xhr.send();

    })
}

function update(){

    let nume = document.getElementById("num3").value;
    let pas = document.getElementById("pas3").value;
    let nrTel = document.getElementById("nrtel3").value;
   
    let data = {};
    data.id = pas;
    data.nume = nume;
    data.numarTelefon = nrTel;
    

    let json = JSON.stringify(data);

    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", url+"/"+pas, true);
        xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
        xhr.onload = function () {
            alert("Succes!!!");
            var us = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == "200") {
                console.table(us);
            } else {
                console.error(us);
            }
        }

        xhr.onerror = function () {
            alert('Nu s-a realizat Update!');
        }
        xhr.send(json);

        //window.location.href = "index.html";
    })
      
}


function adaugaProgramare(){
    let numeNou = document.getElementById("nume4").value;
    let nrTelefonNou = document.getElementById("nrtel4").value;
        
        let data = {};
        data.id = programare[programare.length - 1].id + 1;
        data.nume = numeNou;
        data.numarTelefon = nrTelefonNou;
        
        let json = JSON.stringify(data);
        return new Promise(function(resolve, reject){
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
            xhr.onload = function () {
                alert("Programare realizată cu success!!!");
                var us = JSON.parse(xhr.responseText);
                if (xhr.readyState == 4 && xhr.status == "200") {
                    console.table(us);
                } else {
                    console.error(us);
                }
            }
            xhr.onerror = function () {
                alert('Nu s-a putut realiza programarea!');
            }
            xhr.send(json);            
        })   

}

function getProgram() {
    let program = document.getElementById("program");

  let h1 = document.createElement("h3");
  let t1 = document.createTextNode("Program");
  h1.appendChild(t1);
  let h2 = document.createElement("h4");
  let t2 = document.createTextNode("Luni: 10:00 - 20:30");
  h2.appendChild(t2);
  let h3 = document.createElement("h4");
  let t3 = document.createTextNode("Marți: 10:00 - 20:30");
  h3.appendChild(t3);
  let h4 = document.createElement("h4");
  let t4 = document.createTextNode("Miercuri: 10:00 - 20:30");
  h4.appendChild(t4);
  let h5 = document.createElement("h4");
  let t5 = document.createTextNode("Joi: 10:00 - 20:30");
  h5.appendChild(t5);
  let h6 = document.createElement("h4");
  let t6 = document.createTextNode("Vineri: 10:00 - 20:30");
  h6.appendChild(t6);
  let h7 = document.createElement("h4");
  let t7 = document.createTextNode("Sâmbătă: închis");
  h7.appendChild(t7);
  let h8 = document.createElement("h4");
  let t8 = document.createTextNode("Duminică: închis");
  h8.appendChild(t8);

  //program.appendChild(h1);
  program.appendChild(h2);
  program.appendChild(h3);
  program.appendChild(h4);
  program.appendChild(h5);
  program.appendChild(h6);
  program.appendChild(h7);
  program.appendChild(h8);

}

getProgram();

function putTratamentPeCanal() {
  let program = document.getElementById("pachetServicii");
  var t = document.createElement("P");
  var serv = document.createTextNode("Tratament pe canal");
  t.appendChild(serv);
  program.appendChild(t);
}

function putImplant() {
    let program = document.getElementById("pachetServicii");
    var t = document.createElement("P");
    var serv = document.createTextNode("Implant");
    t.appendChild(serv);
    program.appendChild(t);
  }

  function putProteza() {
    let program = document.getElementById("pachetServicii");
    var t = document.createElement("P");
    var serv = document.createTextNode("Proteza");
    t.appendChild(serv);
    program.appendChild(t);
  }

  function putObturatie() {
    let program = document.getElementById("pachetServicii");
    var t = document.createElement("P");
    var serv = document.createTextNode("Obturatie");
    t.appendChild(serv);
    program.appendChild(t);
  }

  function putIgienizare() {
    let program = document.getElementById("pachetServicii");
    var t = document.createElement("P");
    var serv = document.createTextNode("Igienizare");
    t.appendChild(serv);
    program.appendChild(t);
  }

  function putAlbire() {
    let program = document.getElementById("pachetServicii");
    var t = document.createElement("P");
    var serv = document.createTextNode("Albire");
    t.appendChild(serv);
    program.appendChild(t);
  }

  function putAparatOrtodontict() {
    let program = document.getElementById("pachetServicii");
    var t = document.createElement("P");
    var serv = document.createTextNode("Aparat Ortodontic");
    t.appendChild(serv);
    program.appendChild(t);
  }

  function putExtractie() {
    let program = document.getElementById("pachetServicii");
    var t = document.createElement("P");
    var serv = document.createTextNode("Extractie");
    t.appendChild(serv);
    program.appendChild(t);
  }

  function putFluorizare() {
    let program = document.getElementById("pachetServicii");
    var t = document.createElement("P");
    var serv = document.createTextNode("Fluorizare");
    t.appendChild(serv);
    program.appendChild(t);
  }

  function deleteTort()  {
    var list = document.getElementById("pachetServicii");
    list.removeChild(list.childNodes[0]);
  }

 
  function changeColor() {
        
         document.getElementsByTagName("P")[0].setAttribute("class", "changedColor"); 
        
    
  }