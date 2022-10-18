import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  color: string;
  excute: string;
  result: number;
  constructor() { }

  ngOnInit() {
  }
  excutes(excute: string) {
    this.excute = excute;
  }
  colors(color: string) {
    this.color = color;
  }
  results(): number {
    // tslint:disable-next-line:no-eval
    this.result = eval(this.excute);
    this.colors(this.color);
    return this.result;
  }
}
