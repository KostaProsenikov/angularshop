import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent{
  categories$;

  constructor(categoryService: CategoryService, 
    private productService: ProductService) {
      this.categories$ = categoryService.getCategories();
   }

   save(product) {
        this.productService.create(product);
   }
}