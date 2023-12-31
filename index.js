const inquirer = require('inquirer');
const { MainQuestions, AddDepartmentQuestions, AddRoleQuestions, AddEmployeeQuestions, UpdateEmployeeRoleQuestions } = require('./questions.js')
const EmployeeDatabase = require('./db/employeeDatabase')

const db = new EmployeeDatabase ({
    host: '127.0.0.1',
    user: 'root',
    password:'lionking1',
    database: 'employee_db'
});

db.connect();

const employeeQuestions = async () => {

   await inquirer.prompt(MainQuestions)
    .then((response) => {

        switch (response.option) {
            case 'view_departments':
                view_departments();
                break;
            case 'view_roles':
                view_roles();
                break;
            case 'view_employees':
                view_employees();
                break;
            case 'add_department':
                add_department();
                break;
            case 'add_role':
                add_role();
                break;
            case 'add_employee':
                add_employee();
                break;
            case 'update_role':
                update_role();
                break;
        }
    })
}

const view_departments = () => {

    // Fetch departments
    db.getDepartments().then((results) => {

        console.table(results);

        employeeQuestions();
    });
}

const view_roles = () => {

    // Fetch Roles
    db.getRoles().then((results) => {

        console.table(results);

        employeeQuestions();
    });
}

const view_employees = () => {

    // Fetch Emplyees
    db.getEmployees().then((results) => {

        console.table(results);

        employeeQuestions();
    });
}

const add_department = async () => {
   await inquirer
    .prompt(AddDepartmentQuestions)
    .then((response) => {
        db.addDepartment(response).then((results) => {
            console.log('\n', results, '\n');
            employeeQuestions();
        });
    })
}

const add_role = () => {
    db.getDepartments().then((results) =>  {

        const departmentQuestion = AddRoleQuestions[2];
        results.forEach((department) => {
            departmentQuestion.choices.push({
                value: department.id,
                name: department.name
            });
        });

        inquirer.prompt(AddRoleQuestions)
        .then((response) => {
            db.addRole(response).then((results) => {
                console.log('\n', results, '\n');
                employeeQuestions();
            });
        });
    });
}

const add_employee = () => {

    db.getRoles().then((results) => {

        const roleQuestion = AddEmployeeQuestions[2];
        results.forEach((role) => {

            const role_summary = `${role.title} (${role.department_name}: ${role.salary})`;
            roleQuestion.choices.push({
                value: role.id,
                name: role_summary
            })
        })

        db.getEmployees().then((results) => {

            const managerQuestion = AddEmployeeQuestions[3];
            results.forEach((employee) => {
                managerQuestion.choices.push({
                    value: employee.id,
                    name: employee.name
                });
            });

            managerQuestion.choices.push ({
                value: null, 
                name: 'None'
            });

            inquirer.prompt(AddEmployeeQuestions)
            .then((response) => {
                db.addEmployee(response).then((results) => {
                    console.log('\n', results, '\n');
                    employeeQuestions();
                });
            });
        });
    });
}

const update_role = () => {

    db.getEmployees().then((results) => {

        const employeeQuestion = UpdateEmployeeRoleQuestions[0];
        results.forEach((employee) => {
            employeeQuestion.choices.push({
                value: employee.id,
                name: employee.name
            });
        });

        db.getRoles().then((results) => {

            const roleQuestion = UpdateEmployeeRoleQuestions[1];
            results.forEach((role) => {
                roleQuestion.choices.push({
                    value: role.id,
                    name: role.title
                });
            });

            inquirer.prompt(UpdateEmployeeRoleQuestions)
            .then((response) => {
                db.updateEmployeeRole(response).then((results) => {
                    console.log('\n', results, '\n');
                    employeeQuestions();
                });
            });
        });
    });
}

employeeQuestions();