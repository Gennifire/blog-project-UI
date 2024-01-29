import { Component } from '@angular/core';
import { AddCategoryRequest } from '../Models/add-category-request.model';
import { CategoryService } from '../Services/category.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})


export class AddCategoryComponent {


  model: AddCategoryRequest;

  constructor(private categoryService: CategoryService) {
    this.model = {
      name: '',
      urlHandle: ''
    };
  }

  onFormSubmit() {
    this.categoryService.addCategory(this.model).subscribe({
      next: (response) => {
        console.log("success!!");
      }
    })
  }

}

console.log("Test add-category ts");