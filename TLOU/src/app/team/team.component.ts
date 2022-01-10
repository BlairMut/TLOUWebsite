import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import _ from 'lodash';
import { ContentfulService } from 'src/contentful.service';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  crew: Entry<any>[] = [];
  Publisher: any;
  gameDesigner: any;
  writer: any;
  composer: any;
  filmEditing: any;
  casting: any;
  artDirection: any;
  makeup: any;
  voiceDirector: any;
  artDepartment: any;
  soundDepartment: any;
  director: any;
  developer: any;

  constructor(private contentfulService: ContentfulService) {
  }

  ngOnInit(): void {

    this.contentfulService.getCrewMember()
      .then(crew => {
        this.crew = crew
        console.log(this.crew)

        this.Publisher = _.filter(this.crew, function (o) {
          return o.class.class === "p"
        });//error in contentful the id is 'ltou1' instead of 'tlou1'
        console.log(this.Publisher)

        this.gameDesigner = _.filter(this.crew, function (o) {
          return o.class.class === "gd"
        });//error in contentful the id is 'ltou1' instead of 'tlou1'

        this.director = _.filter(this.crew, function (o) {
          return o.class.class === "dir"
        });//error in contentful the id is 'ltou1' instead of 'tlou1'
        // console.log(this.director)
        
        this.developer = _.filter(this.crew, function (o) {
          return o.class.class === "dev"
        });//error in contentful the id is 'ltou1' instead of 'tlou1'
        // console.log(this.director)

        this.writer = _.filter(this.crew, function (o) {
          return o.class.class === "w"
        });//error in contentful the id is 'ltou1' instead of 'tlou1'

        this.composer = _.filter(this.crew, function (o) {
          return o.class.class === "comp"
        });//error in contentful the id is 'ltou1' instead of 'tlou1'

        this.casting = _.filter(this.crew, function (o) {
          return o.class.class === "cast"
        });//error in contentful the id is 'ltou1' instead of 'tlou1'

        this.filmEditing = _.filter(this.crew, function (o) {
          return o.class.class === "fe"
        });//error in contentful the id is 'ltou1' instead of 'tlou1'

        this.artDirection = _.filter(this.crew, function (o) {
          return o.class.class === "ad"
        });//error in contentful the id is 'ltou1' instead of 'tlou1'

        this.artDepartment = _.filter(this.crew, function (o) {
          return o.class.class === "adep"
        });//error in contentful the id is 'ltou1' instead of 'tlou1'

        this.makeup = _.filter(this.crew, function (o) {
          return o.class.class === "m"
        });//error in contentful the id is 'ltou1' instead of 'tlou1'

        this.voiceDirector = _.filter(this.crew, function (o) {
          return o.class.class === "vd"
        });//error in contentful the id is 'ltou1' instead of 'tlou1'

        this.soundDepartment = _.filter(this.crew, function (o) {
          return o.class.class === "sd"
        });//error in contentful the id is 'ltou1' instead of 'tlou1'


      });
    // console.log(this.Publisher)

  }

}
