import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    
    @Get()
    getCategories (){
        return ["Mobile","Laptop","Tablet"]
    }
}
