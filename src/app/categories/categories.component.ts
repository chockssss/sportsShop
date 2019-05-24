import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private local:CommonService) { }

  ProductDetails: any;

  ngOnInit() {
    this.ProductDetails=this.local.GetProductDetails();
    console.log(this.ProductDetails)
  }

}
