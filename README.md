# employee-tracker

This is a command-line application that allows a company to manage an employee database.

# User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Tech

- Javascript
- Node JS
- MySQL 
- mysql2
- inquirer: 8.2.4


## Installation
Clone repo to local machine to run it from your command line.

Run NPM install in terminal to download dependencies.

Set MySQL database first by

*  Entering: mysql -u root -p in terminal
*  Input mySQL password

Proceed to Enter:

* source db/schema.sql;
* USE employee_db;
* source db/seeds.sql;
* QUIT

Proceed to Run node index.js into the terminal to launch the application.

## Screenshot

![image](https://github.com/AshtonJ7/employee--tracker/assets/62944042/9509ae87-68a6-4d01-a4fb-fe8936d832c0)


## Walkthrough Video

[screen-recorder-tue-jul-04-2023-00-04-41.webm](https://github.com/AshtonJ7/employee--tracker/assets/62944042/4267e268-41a5-49c7-99ce-33ab29d94ac9)

