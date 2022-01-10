import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/contentful.service';
import { Entry } from 'contentful';
import _ from 'lodash';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  
  private _album: Array<any> = []; 
  mediaPhotos: Entry<any>[] = [];
  mediaPhotostlou1: any;
  mediaPhotostlou2: any;


  constructor(private contentfulService:ContentfulService) {

  }
  ngOnInit(): void {
    this.contentfulService.getMedia()
    .then(mediaPhotos => {
      this.mediaPhotos = mediaPhotos
      console.log(this.mediaPhotos)


      this.mediaPhotos = _.sortBy(mediaPhotos, [function(o) { return o.category.position;}]);

      this.mediaPhotostlou2 = _.filter(this.mediaPhotos, function(o) {
        return o.category.game === "tlou2"});//error in contentful the id is 'ltou1' instead of 'tlou1'
        console.log(this.mediaPhotostlou2)
      
        this.mediaPhotostlou1= _.filter(this.mediaPhotos, function(o) {
          return o.category.game === "tlou1"});//error in contentful the id is 'ltou1' instead of 'tlou1'
      });
    }

      

  }

    

      

  

