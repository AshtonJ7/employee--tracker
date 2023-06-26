const inquirer = require('inquirer');
const { MainMenuQuestions, AddDepartmentQuestions, AddRoleQuestions, AddEmployeeQuestions, UpdateEmployeeRoleQuestions } = require('questions.js')
const EmployeeDatabase = require('/db/employeeDatabase')