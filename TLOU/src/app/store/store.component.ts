import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/contentful.service';
import { Entry } from 'contentful';
import _ from 'lodash';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  product: Entry<any>[] = [];

  constructor(private contententfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contententfulService.getProduct()
    .then(product => {
      this.product = product
      console.log(this.product)
    });
  }

}
