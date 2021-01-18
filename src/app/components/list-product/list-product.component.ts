import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/Product';
import { Page } from 'src/app/interfaces/Page';

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

}
