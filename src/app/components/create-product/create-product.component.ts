import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Page } from 'src/app/interfaces/Page';
import { QuantityUnit } from 'src/app/interfaces/QuantityUnit';
import { ProductService } from 'src/app/services/product.service';
import { QuantityUnitService } from 'src/app/services/quantity-unit.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService: ProductService, private quantityUnitService: QuantityUnitService) { }

  public quantityUnits: QuantityUnit[] = [];

  ngOnInit(): void {
    this.getQuantityUnits();
  }

  public createProduct(form: NgForm): any {
    this.productService.createProduct(form.value).subscribe(
      (res: any) => {
        form.reset();
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  public getQuantityUnits(): any {
    this.quantityUnitService.getQuantityUnits().subscribe(
      (res: Page) => this.quantityUnits = res.content,
      (err: any) => console.log(err)
    );
  }

}
