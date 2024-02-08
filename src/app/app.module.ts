import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Core/Components/nav-bar/nav-bar.component';
import { CategoryListComponent } from './Features/Category/category-list/category-list.component';
import { AddCategoryComponent } from './Features/Category/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditCategoryComponent } from './Features/Category/edit-category/edit-category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CategoryListComponent,
    AddCategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

console.log("app root test");
