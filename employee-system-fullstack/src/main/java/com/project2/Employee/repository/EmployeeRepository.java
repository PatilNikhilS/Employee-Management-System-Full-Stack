package com.project2.Employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project2.Employee.entities.EmployeeEntity;

public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
    
}
