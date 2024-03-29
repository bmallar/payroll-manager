// Get a reference to the #add-employees-btn element
// the button is disabled in css
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data// TODO: Get user input to create and return an array of employee objects



function collectEmployees() {
  
  let addEmployee = true;
  const options = [];
  while (addEmployee) {
    let firstName = prompt("Enter first name:");
  let lastName = prompt("Enter last name:");
  let salary = prompt("Enter employees salary:");
  if (!firstName || !lastName || !salary) {
    alert("missing infomation");
    return;
  }
  console.log(firstName,lastName,salary)
  const employeesObject = {
  firstName,
  lastName,
  salary,
  }
  
  

  
  console.log("object", employeesObject)
  console.log("options before",options)
  options.push(employeesObject)
  console.log("options after",options)
// heres another why to do it
// const object = {
//   firstName:"ben",
//   lastName:"mallar",
//   salary:salary,
//   }
  // console.log(object)
  
    addEmployee = window.confirm("Do you want to add another employee?");

    }
  return options;
}
// get user input

  // ask for first name

  // ask for last name

  // ask for salary

  // make employee objects

  // add them to an array

  // My instructor Dan wrote this comment:  MUST RETURN ARRAY OF EMPLOYEE DATA


// Display the average salary
const displayAverageSalary = function(employeesArray) {
let sum =0;
  for (let i = 0; i < employeesArray.length; i++) {
  sum += parseInt(employeesArray[i].salary);
  
}

return sum / employeesArray.length;
}
//   // TODO: Calculate and display the average salary



// My instructor Dan wrote this comment:  use a for loop to go through all the objects

//   // My instructor Dan wrote this comment:  get salaries from objects


// // Select a random employee
const getRandomEmployee = function(employeesArray) {
var randomEmployee = Math.floor(Math.random() * employeesArray.length);
  
//   // TODO: Select and display a random employee
console.log("randomly Selected Employee", employeesArray[randomEmployee]);
//  // My instructor Dan wrote this comment: don't forget : Math.floor(Math.random()* number of employees)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);
// got help from BCS learning assist got the avg by adding these lines
  const avg = displayAverageSalary(employees)
// 
  console.log(avg)

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
