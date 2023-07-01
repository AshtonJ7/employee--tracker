INSERT INTO department (id, name) VALUES (1, 'Design');
INSERT INTO department (id, name) VALUES (2, 'Engineering');
INSERT INTO department (id, name) VALUES (3, 'Finance');
INSERT INTO department (id, name) VALUES (4, 'Marketing');

INSERT INTO role (id, title, salary, department_id) VALUES (1, 'Design Lead', 100000, 1);
INSERT INTO role (id, title, salary, department_id) VALUES (2, 'Design developer', 80000, 1);
INSERT INTO role (id, title, salary, department_id) VALUES (3, 'Lead Engineer', 150000, 2);
INSERT INTO role (id, title, salary, department_id) VALUES (4, 'Software Engineer', 120000, 2);
INSERT INTO role (id, title, salary, department_id) VALUES (5, 'Account Manager', 160000, 3);
INSERT INTO role (id, title, salary, department_id) VALUES (6, 'Accountant', 125000, 3);
INSERT INTO role (id, title, salary, department_id) VALUES (7, 'Marketing Team Leader', 250000, 4);
INSERT INTO role (id, title, salary, department_id) VALUES (8, 'Social Media Manager', 190000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (1, 'Matthew', 'Andrews', 1, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (2, 'Jane', 'Dawson', 2, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (3, 'Leah', 'Stevens', 3, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (4, 'Lauren', 'Ackell', 4, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (5, 'Kane', 'Russel', 5, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (6, 'Pete', 'Wentz', 6, 5);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (7, 'Anna', 'Jane', 7, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (8, 'Ken', 'Peterson', 8, 7);