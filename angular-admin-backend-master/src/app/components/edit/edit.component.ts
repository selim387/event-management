import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from '../../product.service';
import {map} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';
import * as moment from 'moment';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
msg: string;
d: Date;
  id: number;
  product;
  public editEvent: FormGroup;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
             ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((param: ParamMap) => {
        // @ts-ignore
        return param.params.id;
      })
    ).subscribe(prodId => {
      this.id = prodId;

      this.productService.getSingleProduct(this.id).subscribe(prod => {
        this.product = prod;
        this.editEvent = new FormGroup({
          name: new FormControl(this.product.name),
          description: new FormControl(this.product.description),
          price: new FormControl(this.product.price),
          date: new FormControl(new Date(this.product.date).toString().slice(0, 15))

        });
        // console.log(this.product);

      });
    });

  }

  UpdateEvent(): void {
    this.productService.UpdateProduct(this.id, this.editEvent.value).subscribe(prod => {
       prod = this.editEvent.value;
       console.log(prod);
       this.msg = 'event updated successfully';
    });
  }
}
