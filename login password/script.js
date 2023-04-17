let users = {'artem':'password1', 'olga':'password2'};
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
  for (let key in users) {
    if(key == "login3" && users[key] == "password3"){
      alert("User already registred")
    }
      else{
        users['login3'] = 'password3';
      }
      }
    }