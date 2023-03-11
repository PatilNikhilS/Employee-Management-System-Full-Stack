package com.project2.Employee.services;

import java.util.List;

import com.project2.Employee.model.Employee;

public interface EmployeeService {

    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();

    boolean deleteEmployee(Long id);

    Employee getEmployeeByID(Long id);

    Employee updateEmployee(Long id, Employee employee);

}
