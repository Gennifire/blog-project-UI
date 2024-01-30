import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../Models/add-category-request.model';
import { CategoryService } from '../Services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})


export class AddCategoryComponent implements OnDestroy {

  model: AddCategoryRequest;

  private addCategorySubscription?: Subscription

  constructor(private categoryService: CategoryService) {
    this.model = {
      name: '',
      urlHandle: ''
    };
  }


  //on submit - subscribe to observable
  onFormSubmit() {
    this.addCategorySubscription = this.categoryService.addCategory(this.model)
      .subscribe({
        next: (response) => {
          console.log("success!!");
        }
      })
  }

  //prevent memory leaks, unsub on destroy
  ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }
}

