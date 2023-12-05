/*FORMULÁRIOS*/

function validateForm() {
    debugger;
        var radios = document.getElementById('genero').value;
        var generoValid = false;
        if (radios != "") {
          generoValid = true;
        }
    
        var radios = document.getElementById('midia').value;
        var midiaValid = false;
        if (radios != "") {
          midiaValid = true;
      }
    
        var radios = document.getElementById('nome').value;
        var nomeValid = false;
        if (radios != "") {
          nomeValid = true;
        }
    
        var radios = document.getElementById('email').value;
        var emailValid = false;
        if (radios != "") {
          emailValid = true;
        }
    
        if (!nomeValid) {
          alert('Por favor, informe seu nome.');
       } else if (!emailValid) {
            alert('Por favor, informe seu email.');
        } else if (!generoValid) {
          alert('Por favor, selecione seu gênero favorito.');
        } else if (!midiaValid) {
          alert('Por favor, selecione sua mídia preferida.');
        }
    
        if(nomeValid && emailValid && generoValid && midiaValid){
          debugger;
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var genero = document.getElementById('genero').value;
        var midia = document.getElementById('midia').value;
    
        var listaDeUsuarios;
        if(localStorage.getItem('listaDeUsuarios') == null) {
          listaDeUsuarios = [];
        } else {
          listaDeUsuarios = JSON.parse(localStorage.getItem('listaDeUsuarios'))
        }
    
        listaDeUsuarios.push({
          nome: nome,
          email: email,
          genero: genero,
          midia: midia,
        });
    
        localStorage.setItem('listaDeUsuarios', JSON.stringify(listaDeUsuarios));
      }
    }
    
    function mostrarDados(){
      debugger;
      var listaDeUsuarios;
      if(localStorage.getItem('listaDeUsuarios') == null) {
        listaDeUsuarios = [];
      } else {
        listaDeUsuarios = JSON.parse(localStorage.getItem('listaDeUsuarios'))
      }
    
      var html = "";
    
      listaDeUsuarios.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.nome + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.genero + "</td>";
        html += "<td>" + element.midia + "</td>";
        html += "</tr>";
      });
        
      document.querySelector("#crudTable tbody").innerHTML = html;
    }
    
    
    /*MENU*/
    
    function myFunction() {
        var x = document.getElementById("myNavbar");
        if (x.className === "navbar") {
            x.className += " responsive";
        } else {
            x.className = "navbar";
        }
    }
    