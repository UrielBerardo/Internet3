var users = [
{
    name: 'Camila',
    lastname: 'Bellis',
    age: 24,
    children: ['Pedro' , 'Juan'],
    email: 'belliscamila@gmail.com'
},
{
    name: 'Celina',
    lastname: 'Comugnaro',
    age: 20,
    children: ['Pedro' , 'Juan'],
    email: 'comugnarocelina@gmail.com'
},
{
    name: 'Carlos',
    lastname: 'Britos',
    age: 20,
    children: [],
    email: 'carlosbritos@gmail.com'
},
{
    name: 'Lucas',
    lastname: 'Daniele',
    age: 20,
    children: [],
    email: 'lucasdaniele@gmail.com'
}                
]

/*function filterByAge(age){
    for(var i=0; i < users.length; i++){
        if (age => users[i].age){
            console.log( assamble( users[i] ) );
}
}
}*/

/*function assamble(user){
    return user.lastname 
    + ', ' 
    + user.name 
    + ' tiene ' 
    + user.children.length 
    + ' hijos ';
}*/

var listusers = {
    users: [],
    assamble: function(user){
        return '<tr>'
        + '<td>'+ user.Name +'</td>'
        + '<td>'+ user.age +'</td>'
        + '<td>'+ user.email +'</td>'
        + '<td>'+ user.country +'</td>'
        + '<td>'+ user.salary +'</td>'
        + '<td>'+ user.profile +'</td>'
      +'</tr>';


    /* return user.lastname 
    + ', ' 
    + user.Name 
    + ' tiene ' 
    
    + ' hijos '; */
    },
    listAll: function(){
        for (var i=0; i < listusers.users.length; i++){
            $('#users tbody').append(listusers.assamble(listusers.users[i])
        );
        }
    },

    filterByAge: function (age) {
        var downLimit = age - 5 ;
        var upLimit = age + 5;
        for (var i = 0; i < listusers.users.length; i++){
        if (listusers.users[i].age >= downLimit ||
            listusers.users[i].age <= upLimit){
           $('#users tbody').append( 
           listusers.assamble(listusers.users[i])
           )
         };
        }
    },

    setUsers: function (users){
        listusers.users = users;
    },
    clearTable: function(){
        $('#users tbody').html('');
    }    
}

$('#clickme').on('click',function(){
     listusers.setUsers(usersItems);
     listusers.listAll();
    });

$('#clear').on('click',function(){
listusers.clearTable();    
});    

$('#filter').on('click',function(){
    listusers.clearTable();
    var userAge = $('#userAge').val();
    if(userAge && listusers.users.length){ 
        listusers.filterByAge();
    }
    
}); 
/*$('clickme').on('click',function(){
    if ($('h1').hasClass('active')){
        $('h1')
        .removeClass('active')
        .addClass('disabled');
    }
    else {
        $('h1')
        .removeClass('disabled')
        .addClass('active');
    }
})*/
