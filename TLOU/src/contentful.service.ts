import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from './environments/environment';
import { createClient,Entry } from 'contentful';
import { config, Observable } from 'rxjs';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { query } from '@angular/animations';

const CONFIG = {
  spaceId: 'folxikxh0hat',
  token: 'zygMYXgTwIenUcjNKhK9_noPxAW-PYntvr1PVdEE-QQ'
}


@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
 private client
  constructor() { 
    this.client = createClient({
      space: CONFIG.spaceId,
      accessToken: CONFIG.token
    });
  }

  //console logs a response for debugging
  // logContent(contentId){
  //   this.client.getEntry(contentId)
  //   .then((entry) => console.log(entry))
  // }

  //retrieve content mapped to this data field
  // getContent(contentId){
  //   const promise = this.client.getEntry(contentId)
  //   return from(promise).map(entry => entry.fields)
  // }
  getGames(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'gameDetails'
    }, query))
      .then(res => {
        let gameFields = res.items.map((el) => {
          return el.fields
        })
        return gameFields
      } );
  }

  getCharacters(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'characters'
    }, query))
      .then(res => {
        let characterFields = res.items.map((el) => {
          return el.fields
        })
        return characterFields
      } );
  }

  getMedia(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'mediaGallery'
    }, query))
      .then(res => {
        let mediaFields = res.items.map((el) => {
          return el.fields
        })
        return mediaFields
      } );
  }


  getCrewMember(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'production'
    }, query))
      .then(res => {
        let crewFields = res.items.map((el) => {
          return el.fields
        })
        // console.log(crewFields)
        return crewFields
      } );
  }

  getVideos(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'videoGallery'
    }, query))
      .then(res => {
        let videoFields = res.items.map((el) => {
          return el.fields
          // console.log(el.fields)
        })
        return videoFields
      } );
  }

  getProduct(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'store'
    }, query))
      .then(res => {
        let storeFields = res.items.map((el) => {
          return el.fields
          // console.log(el.fields)
        })
        return storeFields
      } );
  }
  // getGame(contentId): Promise<Entry<any>>{
  //   return this.client.getEntries(Object.assign({
  //     content_type: 'game'
  // }, {'sys.id': contentId}))
  //   .then(res => res.items[0]);
  // }

}
