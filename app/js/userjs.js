setInterval(read,1000);
    
var scroll = null;
function toggleAutoScroll(){
    if (!scroll){
    scroll = setInterval(autoScrollOn,500);
    } else {
    clearInterval(scroll);
    scroll = null;
    }
}
function autoScrollOn(){
    $('#test').animate({
    scrollTop: $('#test')[0].scrollHeight});
}

function read(){
    jQuery.get('test.txt',function(data){
    $('#code').html(data);
    });
}