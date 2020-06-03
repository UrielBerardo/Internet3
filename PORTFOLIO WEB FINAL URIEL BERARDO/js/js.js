//  PORTFOLIO Y CLICK EN LAS IMAGENES

var listItems = {

    listAll: function(){
        for (var i = 0; i < listItems.items.length; i++ ){
            $('#section').append(listItems.assamble(listItems.items[i]))
        }
},

    assamble: function(a){
        return  '<a href="#"' + 'class="imagenDescription col-lg-3 col-md-4 col-sm-6 col-xs-12" >'
        +'<div class="contenedores" data-id="' + a.id + '">'
        + '<img src="' + a.Imagen + '" alt="Trabajo Realizado">'
        + '</div>'
        + '</a>'
},
    
    listDescription: function(Image){
        for (var i = 0; i < listItems.items.length; i++ ){
            if(Image == listItems.items[i].id){
               $('#descripcion').append(listItems.assambleDescription(listItems.items[i]))
            }
        }
},

    assambleDescription: function (a){
        return '<div class="imagen">'
        +'<img src="'+ a.Imagen +'" alt="">'
        +'</div>'
        +'<div class="titulo col-4">'
        +'<div class="text-title">' + a.nombreImagen + '</div>'              
        +'<div class="">'
        +'</div>'
        +'</div>'
        +'</div>'
        +'</div>'
},
    


    setItems: function(b){
        listItems.items = b;
    },

    items: [],

}

listItems.setItems(elementsList);

// CLICK EN "CONTACTO"

var listFormContact = {

    listForm: function(){
        $('#contacto').append(listFormContact.assamble())
    },

    assamble: function(){
        return '<form class="contactoForm row">'
        +'<h1 class="enviacol-12">Envia tu Mensaje</h1>'
        +'<label for="" class="form-label col-12">Nombre</label>'
        +'<input type="text" class="form-input col-11" required>'
        +'<label for="" class="form-label col-12">Apellido</label>'
        +'<input type="text" class="form-input col-11" required>'
        +'<label for="" class="form-label col-12">Correo</label>'
        +'<input type="text" class="form-input col-11" required>'
        +'<label for="" class="form-label col-12">Mensaje</label>'
        +'<input type="text" class="form-input col-11" required>'
        +'<input type="submit" class="form-submit col-11">'
        +'</form>'
    },
}

// CLICK EN UN LOGO

var listClickImage = {
    
    
    /* SI a.id ES IGUAL A ALGUN a.id ENVIAR LOS DATOS DE (a) A assamble Y EJECUTAR lisAll */
    
    listAll: function(){
        for (var i = 0; i < listItems.items.length; i++ ){

            $('#section').append(listItems.assamble(listItems.items[i]))
        }
    },

    assamble: function (a){
        return '<div class="info row col-4">'
        +'<div class="imagen col-3">'
        +'<div class="imagen-cont">'
        +'<img src="'+ a.Imagen +'" alt="">'
        +'</div>'
        +'</div>'
        +'<div class="col-12 row">'
        +'<div class="text-title col-12">' + a.nombreImagen + '</div>'              
        +'<div class="col-12">'
        +'</div>'
        +'</div>'
        +'</div>'
    }
}

/*
    AL HACER CLICK EN UNA IMAGEN, BUSCAR LOS DATOS DE ESA IMAGEN QUE SE ENCUENTRAN EN EL DATA, ES BUSCADO POR SU ID O SEGÚN SU ID, TRAE LOS DATOS Y LOS MUESTRA
    
*/

// BOTONES

$(document).ready(function(){


    $('.portfolio').on('click',function(){
        
        location.reload();
    })

    $('.contacto').on('click',function(){
        
        $('#section').html("");
        $('#contacto').html("");
        $('#descripcion').html("");
        listFormContact.listForm();
    })
    
    $('.imagenDescription').on('click',function(){
       
        $('#section').html("");
        var logo = $(this).children().data('id');
        listItems.listDescription(logo);
        document.getElementById('section').style.margin = "0";
    })
})

    
$('.form-submit').on('click',function(){
        
        $('#section').html("");
        $('#contacto').html("");
        $('#descripcion').html("");
        listItems.listAll();
})
