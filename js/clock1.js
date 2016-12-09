function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var d=today.getDate();
    var m=today.getMonth()+1;
    var y=today.getFullYear();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = "Time: "+h+":"+m+":"+s+" Date: "+d+"/"+m+"/"+y;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};
    return i;
}