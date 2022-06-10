package com.assignment.lms.controllers;

import com.assignment.lms.models.Student;
import com.assignment.lms.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/student")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;
    @PostMapping("/add")
    public ResponseEntity<?> addStudent(@RequestBody Student student){
        try {
            if(!this.studentRepository.existsById(student.getRegNum())){
                Student save = this.studentRepository.save(student);
                return ResponseEntity.ok(save);
            }else {
                return ResponseEntity.ok("Operation Failed.RegNum is already taken!");
            }

        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

    }


    @GetMapping("/getAll")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> getStudents(){
        try {
            return ResponseEntity.ok(this.studentRepository.findAll());
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }

    }


    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> deleteStudent(@PathVariable("id") int regNum) {
        try {
            this.studentRepository.findById(regNum);
            if (studentRepository.existsById(regNum)){
                this.studentRepository.deleteById(regNum);
                return ResponseEntity.status(HttpStatus.OK).body("RegNumber " + regNum + " Bearing Student has been Successfully Deleted!");
            } else{
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No student is available under this RegNumber!");
            }
        } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

    }


}
