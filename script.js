//1
def sumSliceArray(arr, first, second):
  if not isinstance(first, int) or not isinstance(second, int):
    raise ValueError("Порядкові номери мають бути цілими числами.")
  if first < 1 or second < 1 or first > len(arr) or second > len(arr):
    raise IndexError("Неправильні порядкові номери елементів масиву.")

  return arr[first - 1] + arr[second - 1]


# Приклад використання функції з обробкою винятків
try:
  input_array = [10, 20, 30, 40, 50, 60]
  first_index = int(input("Введіть перший порядковий номер: "))
  second_index = int(input("Введіть другий порядковий номер: "))

  result = sumSliceArray(input_array, first_index, second_index)
  print(f"Сума елементів {first_index} та {second_index} масиву: {result}")
except ValueError as ve:
  print(f"Помилка: {ve}")
except IndexError as ie:
  print(f"Помилка: {ie}")
//2
function checkAge() {
    let name = prompt("Введіть своє ім'я: ");
    let age = +prompt("Введіть свій вік: ");
    let status = prompt("Введіть свій статус: ");
    
    if (age < 18 || age > 70) {
    throw new RangeError("Ваш вік занадто молодий або старий.");
    }
    if (name === "" || age === "" || status === "") {
    throw new Error("Ви не ввели всі дані.");
    }
    if (status !== "адмін" && status !== "модератор" && status !== "користувач") {
    throw new EvalError("Неправильний статус.");
    }
    if (isNaN(age)) {
    throw new TypeError("Вік має бути числом.");
    }
    
    console.log("Ви можете переглянути фільм.");
    }
    
    // Приклад використання функції з обробкою винятків
    try {
    checkAge();
    } catch (e) {
    console.error("Помилка:", e.name, " ", e.message);
    }
    //3
    function calcRectangleArea(width, height) {
        if (typeof width !== "number" || typeof height !== "number") {
          throw new Error("Параметри мають бути числами.");
        }
      
        return width * height;
      }
      
      // Приклад використання функції з обробкою винятків
      try {
        const width = +prompt("Введіть ширину прямокутника: ");
        const height = +prompt("Введіть висоту прямокутника: ");
      
        const area = calcRectangleArea(width, height);
        console.log("Площа прямокутника:", area);
      } catch (e) {
        console.error("Помилка:", e.name, " ", e.message);
      }
      //4
      class MonthException extends Error {
        constructor(message) {
        super(message);
        this.name = "MonthException";
        }
        }
        
        function showMonthName(month) {
        if (month < 1 || month > 12) {
        throw new MonthException("Incorrect month number");
        }
        
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        return months[month - 1];
        }
        
        try {
        const month = +prompt("Enter the month number: ");
        const name = showMonthName(month);
        console.log(Month name: ${name});
        } catch (e) {
        console.log(e);
        }
        //5
        function showUser(id) {
            if (id < 0) {
              throw new Error("Введено від’ємне id");
            }
          
            user = {"id": id}
            return user;
          }
          
          
          function showUsers(ids) {
        
            users = [];
            for (id of ids) {
              try {
                user = showUser(id)
                users.push(user)
              } catch (e) {
                console.log("Введено від’ємне id")
              }
            }
          
            return users;