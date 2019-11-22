

$('td').css({color: '#ffac30'})

$('h1').css({'background-color': '#6fe394'})

$('h1')
    .addClass('text-center');


$('table')
    .addClass('text-center');

$('div').css({'alignContent': 'center'});
    
$('#devlist').css({'alignContent': 'center'});

$('li').css('text-center')

var inp;

$('#btn').click(function() {
inp = $('#textfield').val();
$('ul').append('<li><button id="red" class = "btn btn-xs btn-danger">X</button>    ' + inp + '</li>')
});





















$(document).on('click', 'li', function(){
    $(this).remove();
})