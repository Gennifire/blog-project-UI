import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from '../Models/category.model';
import { CategoryService } from '../Services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})

export class EditCategoryComponent implements OnInit, OnDestroy {


  id: string | null = null;
  paramsSubscription?: Subscription;
  category?: Category;
  notFound: TemplateRef<NgIfContext<Category | undefined>> | null;

  constructor(private route: ActivatedRoute,
    private categoryService: CategoryService) {

  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        if (this.id) {
          //get data from API
          this.categoryService.getCatergoryById(this.id).subscribe({
            next: (response) => {
              this.category = response;
            }
          });
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }

}
