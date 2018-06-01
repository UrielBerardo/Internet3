var elementsBuild = {
   
    items: [], /*array en donde se tiene muchos elementos, engloba elementos que tienen relacion
    entre si*/

    listAll: function(){
        for (var i=0; i < elementsBuild.items.length; i++){
            $('#table-body').append(elementsBuild.assamble(elementsBuild.items[i])
            );
        }/*busca todos los elementos*/
    },

    assamble: function(item){
        return '<div class="row">'
        + '<span class="col-2"></span>'
        + '<span class="col-2">'+ item.brand +'</span>'
        + '<span class="col-2">'+ item.location +'</span>'
        + '<span class="col-2">'+ item.lunch +'</span>'
        + '<span class="col-2">'+ item.price +'</span>'
        + '<span class="col-2"></span>'
        + '<span class="description col-12">'+'</span>'
      + '</div>';
    }, /*arma la */

    setItems: function (items){
        elementsBuild.items = items;
    },
 
}