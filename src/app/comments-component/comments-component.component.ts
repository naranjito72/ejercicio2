import { Component, OnInit } from '@angular/core';
import {comments} from '../shared/data/comments.data';


@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.scss']
})
export class CommentsComponentComponent implements OnInit {
  titulo = 'Comments:';
  username: String ="Your Name";

  public comments:Array<object>;

  constructor() {
    this.comments = comments;
  }

/*   saveComment(event:any, formulario:any):void{
    event.preventDefault();
    this.comments.push({
      name: formulario[0].value,
      date: new Date(),
      time: new Date(),
      comentario: formulario[1].value
        })

      formulario.reset();
  } */

  saveComment(event:any, formulario:any):void{
    event.preventDefault();

    let comentario = {
      id:4,
      name: formulario[0].value,
      date: new Date(),
      time: new Date(),
      comentario: formulario[1].value
        };

    this.comments = [{
      id: 1,
      name: 'Katy',
      date: '25/04/2019 15:26',
      comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },{
      id: 2,
      name: 'Salomon',
      date: '25/04/2019 17:26',
      comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum lacus ac felis hendrerit, sed molestie mi laoreet.'
    },{
      id: 3,
      name: 'Bondary',
      date: '26/04/2019 16:26',
      comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }, comentario];

    formulario.reset();

  }

  trackByCommentId(comment: any):string{
    return comment.id;
  }

  ngOnInit() {
  }

}


/*@Component({
  selector: 'app-little-tour',
  template: `
    <input #newHero
      (keyup.enter)="addHero(newHero.value)"
      (blur)="addHero(newHero.value); newHero.value='' ">

    <button (click)="addHero(newHero.value)">Add</button>

    <ul><li *ngFor="let hero of heroes">{{hero}}</li></ul>
  `
})
export class LittleTourComponent {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}*/
