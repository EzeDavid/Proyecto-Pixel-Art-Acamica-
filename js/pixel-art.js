
var nombreDeColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.

let colorPersonalizado = document.getElementById('color-personalizado');

// paso1 //

let paletaDeColores = document.getElementById('paleta');
let artGrilla = document.getElementById('grilla-pixeles');
let indicador = document.getElementById('indicador-de-color');


// Paleta de colores //

function paletaOfColors(){
  for (let i = 0; i < nombreDeColores.length; i++) {
     let paletaDeColores = document.createElement('div');
         paletaDeColores.style.background = nombreDeColores[i];
         paletaDeColores.className = 'color-paleta';
         paletaDeColores.setAttribute('id', nombreDeColores[i]);
         paleta.appendChild(paletaDeColores);
  };
};

// Grilla //

function grillaDePixeles(){
  for(let i = 0; i <= 1750; i++){
    let grillaPixelArt = document.createElement('div');
        artGrilla.appendChild(grillaPixelArt);

    };
};

// seleccionar color de paleta //



paletaDeColores.addEventListener('click',
(function(e) {
  indicador.style.backgroundColor = e.target.style.backgroundColor;
})
)

artGrilla.addEventListener('click',
(function(e) {
  e.target.style.backgroundColor = indicador.style.backgroundColor;
})
)

colorPersonalizado.addEventListener('change',
  function() {
    // Se guarda el color de la rueda en colorActual
         colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
        indicador.style.backgroundColor = colorActual;
  });

    //eventos del mousse

  artGrilla.addEventListener('mousedown', pintar);
  artGrilla.addEventListener('mousemove', pintarMoviendo);

 let presionado = false;
  $(document).mousedown(function() {
    presionado = true;
  }).mouseup(function() {
    presionado = false;
  });

function pintar(e){
  e.target.style.backgroundColor = $("#indicador-de-color").css("background-color");
};

function pintarMoviendo(e){
  if(presionado){
    pintar(e);
  };
};

// Delete

$('#borrar').click(function(){
  $("#grilla-pixeles div").animate({"background-color": "#ffff"}, 1100);
 });

 // guardar

$('#guardar').click(function(){
  guardarPixelArt();
});

// personajes

$('#batman').click(function(){
  cargarSuperheroe(batman);
});
$('#wonder').click(function(){
  cargarSuperheroe(wonder);
});

$('#flash').click(function(){
  cargarSuperheroe(flash);
});

$('#invisible').click(function(){
  cargarSuperheroe(invisible);
});

  window.onload = function(){
    paletaOfColors();
    grillaDePixeles();
  };