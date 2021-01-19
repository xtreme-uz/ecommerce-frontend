import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  public createProduct(form: NgForm): any {
    this.productService.createProduct(form.value).subscribe(
      (res: any) => {
        form.reset();
        this.router.navigate(['product/list']);
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

}
