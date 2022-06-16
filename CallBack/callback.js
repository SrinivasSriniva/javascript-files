function showData(name, amt) {

    alert(' Hello User ' + name + '\n Your entered Amount is ' + amt);

 }
 function getData(callback) {

     var name = prompt(" Welcome please enter \n What is your name?");

     var amt = prompt(" Enter some amount...");

     callback(name, amt);

 }

 getData(showData);

 