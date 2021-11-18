import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/contentful.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  game$: Observable<any>;

  constructor(private contentful: ContentfulService) {}

  // ngOnInit(){
  //   this.contentful.getContent('7fWJoc9j8WyM0sDSzCYcRc')
  // }




  title = 'TLOU';
}
