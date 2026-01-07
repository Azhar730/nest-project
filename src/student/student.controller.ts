import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService){}
    @Get()
    getAllStudent(){
        return this.studentService.getAllStudent()
    }
    @Get(":id")
    getSingleStudent(@Param("id") id: string){
        return this.studentService.getStudentById(Number(id))
    }
    @Post()
    createStudent(@Body() payload: {name: string, age: number}){
        return this.studentService.createStudent(payload)
    }
    @Put(":id")
    updateStudent(@Param("id") id:number, @Body() payload: {name: string, age: number}){
        return this.studentService.updateStudent(id,payload)
    }
    @Patch(":id")
    patchStudent(@Param("id") id:number, payload: {name: string, age: number}){
        
    }
}
