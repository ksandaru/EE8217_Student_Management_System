package com.assignment.lms.repository;

import com.assignment.lms.models.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentRepository extends MongoRepository<Student, Integer> {

}
