import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from './environments/environment';
import { createClient,Entry } from 'contentful';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { query } from '@angular/animations';


@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  logContent(arg0: string) {
    throw new Error('Method not implemented.');
  }

 private client: any;
  

  constructor() { 
    this.client = contentful.createClient({
      space: environment.contentful.spaceId,
      accessToken: environment.contentful.token
    })
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
  // getGame(contentId): Promise<Entry<any>>{
  //   return this.client.getEntries(Object.assign({
  //     content_type: 'game'
  // }, {'sys.id': contentId}))
  //   .then(res => res.items[0]);
  // }

}
