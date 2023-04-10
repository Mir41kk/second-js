var users = ["Максим", "Денис", "Кирилл", "Андрей", "Ольга", "Никита"];
function check() {
      let k = 0;      
      let n = prompt("Напишите имя для проверки:", "");
      for (let i = 0; i < users.length; i++){
        if (users[i] == n){
          k = 1; 
          break;
        }
      }
      if (k == 1){
       alert("Добрый день" + " " + n)
      }
      else {
        alert("Такого пользователя не существует")
      }
    }
function show(){
    alert(users + "\n" + users.length + " " + "столько пользователей зарегистрировано")
}
function add(){
    users.push(prompt("Напишите нового пользователя:", "") );
}