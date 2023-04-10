let users = {'artem':'qwerty', 'olga':'mir41kk'};
function check() {
    let exist = false;
    let n = prompt("Login:", "");
    let p = prompt("Password:", "")
    for (let key in users) {
            if (key == n && users[key] == p) {
                exist = true;
                break;
              }
     }
     if (exist) {
       alert("Welcome!" + " " + n)
     } else {
       alert("Type correctly please (")
     }
  }
function show(){
    for (var key in users) {
        document.write(key + ': ' + users[key] + '<br />');
       }
}
function add(){
  for(var key in users){
    if(key != "login3" && users[key] != "password3"){
      let newuser = [key ='login3', users[key] = 'password3']
    }
    else{
      alert("user already registred")
    }
  }
}

