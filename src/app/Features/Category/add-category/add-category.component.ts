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

  constructor(private http: HttpClient) {
    this.model = {
      name: '',
      urlHandle: ''
    };
  }

  onFormSubmit(model: AddCategoryRequest): Observable<void> {
    return this.http.post<void>('https://localhost:7041/api/categories', model);

  }


}

console.log("Test add-category ts");