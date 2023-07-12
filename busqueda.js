document.addEventListener('DOMContentLoaded', function() {
    var myButton = document.getElementById('rutas');
    var content = document.getElementById('contenido');
  
    myButton.addEventListener('click', function() {
        content.innerHTML = '';
        var newDiv = document.createElement('div');
        var opcion = document.getElementsByName('opcion');
        var selecOpcion;
        for(var i = 0; i<opcion.length;i++){
            if(opcion[i].checked){
                selecOpcion=opcion[i].value;
                break;
            }
        }
        if(selecOpcion=='200m'){
            newDiv.innerHTML='<div style="text-align:center; margin: 5%; background:blue; color:white; padding:2%;"><p style="font-weight:bold; font-size:30px">RUTAS DENTRO DE 200 M</p><p>Seleccione uno de los diversos paraderos para ver su información</p><img src="Imagenes/200m.jpg" alt="200m" onclick="Mostrar()" style="cursor:pointer;margin-left:auto;margin-right:auto;"></div>'
            content.appendChild(newDiv);
            
        }
        else if(selecOpcion=='500m'){
            newDiv.innerHTML='<div style="text-align:center; margin: 5%; background:blue; color:white; padding:2%;"><p style="font-weight:bold; font-size:30px">RUTAS DENTRO DE 500 M</p><p>Seleccione uno de los diversos paraderos para ver su información</p><img src="Imagenes/500m.jpg" alt="200m" onclick="Mostrar()" style="cursor:pointer;margin-left:auto;margin-right:auto;"></div>'
            content.appendChild(newDiv);
        }
        else if(selecOpcion=='1000m'){
            newDiv.innerHTML='<div style="text-align:center; margin: 5%; background:blue; color:white; padding:2%;"><p style="font-weight:bold; font-size:30px">RUTAS DENTRO DE 1000 M</p><p>Seleccione uno de los diversos paraderos para ver su información</p><img src="Imagenes/1000m.jpg" alt="200m" onclick="Mostrar()" style="cursor:pointer;margin-left:auto;margin-right:auto;"></div>'
            content.appendChild(newDiv);
        }
        else{
            alert("Selecciona una opcion");
        }

        
    });

  });
function Mostrar(){
    
    var divContenido = document.getElementById('empresax');
    divContenido.innerHTML = '';
    var texto = document.createElement("div");
    texto.innerHTML='<div class="principal"><div class="main" ><h1>EMPRESA ANDES SUR</h1><p>Pararero N° 02</p><p>Ubicación:<br>Av.Huancane</p><p>Referencias:<br>Al frente del hospital</p></div><div class="img"><img src="Imagenes/bus.jpg"></div></div><style>.principal{  display:flex;  align-items:center;  justify-content:center;}.main{ margin:30px; display: inline-block;  text-align:center;}.img{  display:inline-block;}/style>'
    divContenido.appendChild(texto);
}