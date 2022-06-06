package com.assignment.lms.models;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//new MongoDB collection --students
@Document (collection = "students")
public class Student {
    @Id
    private Integer regNum;
    private String name;
    private String batch;
    private String department;

    public Student(Integer regNum, String name, String batch, String department) {
        this.regNum = regNum;
        this.name = name;
        this.batch = batch;
        this.department = department;
    }

    public Integer getRegNum() {
        return regNum;
    }

    public void setRegNum(Integer regNum) {
        this.regNum = regNum;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBatch() {
        return batch;
    }

    public void setBatch(String batch) {
        this.batch = batch;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
}

