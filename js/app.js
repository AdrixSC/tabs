var pagina = function() {
  var tabElementos = document.getElementsByClassName('tab');
  for(var i = 0; i < tabElementos.length; i++){
    tabElementos[i].addEventListener('click',mostrar);
  }
}
var mostrar = function(e){
  var tabSeleccionado = e.target.dataset.tabSeleccionado;
  var tabuno = document.getElementById('infouno');
  var tabdos = document.getElementById('infodos');
  var tabtres = document.getElementById('infotres');
  if(tabSeleccionado === 'tabuno'){
    tabdos.style.display = 'none';
    tabtres.style.display = 'none';
    tabuno.style.display = 'block';
  } else if (tabSeleccionado === 'tabdos'){
    tabtres.style.display = 'none';
    tabuno.style.display = 'none';
    tabdos.style.display = 'block';
  } else if (tabSeleccionado === 'tabtres'){
    tabuno.style.display = 'none';
    tabdos.style.display = 'none';
    tabtres.style.display = 'block';
  }
}
pagina();
