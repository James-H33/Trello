import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board-component.html',
  styleUrls: ['./board-component.scss']
})

export class BoardComponent {
  public isEditTitle: boolean = false;
  public title: string = 'James Board';
  public lists: any[] = [];
 
  constructor() { 
    this.lists = [
      {
        id: 1,
        title: 'James Board List',
        cards: [
          {
            id: 1,
            title: 'Some Test Checklist',
            resources: []
          },
          {
            id: 2,
            title: 'Another Checklist',
            resources: []
          }
        ]
      }
    ];
  }

  public updateBoardTitle(title: string) {
    this.title = title;
  }

  public addNewList(title: string) {
    console.log(title);
    this.lists.push(
      {
        id: this.lists.length + 1,
        title,
        cards: []
      }
    );
  }
}
