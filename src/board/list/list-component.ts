import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list-component.html',
  styleUrls: ['./list-component.scss']
})

export class ListComponent {
  @Input() list: any = [];

  constructor() {}

  public addCard() {
    console.log(this.list);
    this.list.cards.push({
      id: Math.floor(Math.random() * 100) ,
      title: 'Another One',
      resources: []
    });
  }

  public updateListTitle(title: string) {
    this.list.title = title;
  }
}
