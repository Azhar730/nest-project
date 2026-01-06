import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        { id: 1, name: "Azhar", age: 25 },
        { id: 2, name: "Mahmud", age: 24 },
        { id: 3, name: "Azhar", age: 23 },
    ]

    getAllStudent() {
        return this.students
    }
    getStudentById(id: string) {
        const student = this.students.find(student => student.id === Number(id))
        if (!student) throw new NotFoundException('Student not found!')
        return student
    }
    // POST
    addStudent(data: { name: string, age: number }) {
        const newStudent = {
            id: Date.now(),
            ...data
        }
        const result = this.students.push(newStudent)
        return result
    }
}
