import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  public currentProduct!: Product;

  constructor(private productService: ProductService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct(this.route.snapshot.params.id);
  }

  private getProduct(id: number): void {
    this.productService.getProduct(id).subscribe(
      (res: any) => this.currentProduct = res, 
      (err: any) => console.log(err)
    );
  }

  public editProduct(form: NgForm): any {
    this.productService.updateProduct(form.value).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(['product/list']);
      },
      (err: any) => {
        console.log(err);
      }
    )
  }
}
