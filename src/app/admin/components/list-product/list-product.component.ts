import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/admin/interfaces/Page';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  public products: Product[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(): any {
    this.productService.getProducts().subscribe(
      (res: Page) => this.products = res.content,
      (err: any) => console.log(err)
    );
  }

  public deleteProduct(product: Product): any {
    this.productService.deleteProduct(product.id).subscribe(
      (res: any) => {
        this.getProducts();
        console.log(res);
      },
      (err: any) => console.log(err));
    
    
  }

}
