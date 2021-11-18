import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from 'src/contentful.service';
import { Entry } from 'contentful';
import _ from 'lodash';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  games: Entry<any>[] = [];
  characters: Entry<any>[] = [];
  tlouCharacters: any[] = [];
  tlou2Characters: any[] = [];
  ready: boolean = true;
  tlou: String = "tlou1";

  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) { }

  ngOnInit(): void {
    this.contentfulService.getGames()
    .then(games => {
      this.games = games
      console.log(games)
    });
    
    this.contentfulService.getCharacters()
    .then(characters => {
      // this.characters = _.sortBy(this.characters, [function(o) {return o.position;}]);
      this.characters = _.sortBy(characters, [function(o) { return o.game.position;}]);
      
      console.log(characters);
      
      this.tlouCharacters = _.filter(this.characters, function(o) {
        return o.game.game === "ltou1"});//error in contentful the id is 'ltou1' instead of 'tlou1'
       console.log(this.tlouCharacters)

       this.tlou2Characters = _.filter(this.characters, function(o) {
        return o.game.game === "ltou2"});//error in contentful the id is 'ltou1' instead of 'tlou1'
        console.log(this.tlou2Characters)
    })
    


  // console.log(this.characters)
  }


}


