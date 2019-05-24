import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private local:CommonService) { }

  ngOnInit() {
    
  }

}
