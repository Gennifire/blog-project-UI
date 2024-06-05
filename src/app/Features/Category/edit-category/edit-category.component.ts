import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from '../Models/category.model';
import { CategoryService } from '../Services/category.service';
import { UpdateCategoryRequest } from '../Models/update-category-request.model';
import { Router } from '@angular/router'


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})

export class EditCategoryComponent implements OnInit, OnDestroy {


  id: string | null = null;
  paramsSubscription?: Subscription;
  editCategorySubscription?: Subscription;
  Category?: Category;


  constructor(private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        if (this.id) {
          //get data from API
          this.categoryService.getCatergoryById(this.id).subscribe({
            next: (response) => {
              this.Category = response;
            }
          });
        }
      }
    });
  }

  onFormSubmit(): void {
    console.log(this.Category);
    const updateCategoryRequest: UpdateCategoryRequest = {
      name: this.Category?.name ?? '',
      urlHandle: this.Category?.name ?? ''
    };

    //pass object to service
    if (this.id) {
      this.editCategorySubscription = this.categoryService.updateCategory(this.id, updateCategoryRequest)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('admin/categories');
          }
        });
    }
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.editCategorySubscription?.unsubscribe();
  }

}
