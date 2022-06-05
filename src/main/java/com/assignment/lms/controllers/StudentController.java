package com.assignment.lms.controllers;

import com.assignment.lms.models.Student;
import com.assignment.lms.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/student")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;
    @PostMapping("/add")
    public ResponseEntity<?> addStudent(@RequestBody Student student){
        Student save = this.studentRepository.save(student);
        return ResponseEntity.ok(save);
    }

    @GetMapping("/getAll")
    public ResponseEntity<?> getStudents(){
        return ResponseEntity.ok(this.studentRepository.findAll());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteStudent(@PathVariable("id") int regNum){
        this.studentRepository.deleteById(regNum);
        return ResponseEntity.ok(this.studentRepository.findAll());
    }


}
