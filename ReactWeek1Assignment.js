class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students=[]) {
        this.name = name;
        this.level = level;
        this.students = students;                                                     
    }
    registerStudent(studentToRegister) {
        let addStudent = false;
        const duplicates = this.students.filter((student) => {
            if (studentToRegister.email === student.email) {
                addStudent = false;
            } else {
                addStudent = true;
            }
        });
        if (addStudent === true) {
            this.students.push(studentToRegister)
        }
    }
}

