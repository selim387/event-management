import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../product.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private productService: ProductService) { }
  public editEvent: FormGroup;
  msg: string;

  ngOnInit(): void {
    this.editEvent = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      price: new FormControl(),
      date: new FormControl()

    });
  }
AddProduct(): void{
  this.productService.AddProduct(this.editEvent.value).subscribe(res => {
    res = this.editEvent.value;
    console.log(res);
    this.msg = 'event added successfully';
  });
}
}
