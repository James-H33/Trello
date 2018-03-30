import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-board',
  templateUrl: './board-component.html',
  styleUrls: ['./board-component.scss']
})

export class BoardComponent {
  public isEditTitle: boolean = false;
  public title: string = 'James Board';
  public lists: any[] = [];
  public updatedList$: Subject<any> = new Subject(); 
 
  constructor(private dragulaService: DragulaService) { 
    this.updatedList$.subscribe((x) => this.listUpdated(x));
    this.lists = [
      {
        id: 2,
        title: 'James List',
        cards: [
          {
            id: 1,
            title: 'Some Checklist 2',
            resources: [
              {
                template: 'date',
                value: '03/20/2018'
              },
              {
                template: 'description',
              },
              {
                template: 'todo',
                todos: [
                  {
                    title: 'take out trash',
                    isComplete: true,
                  },
                  {
                    title: 'Read book',
                    isComplete: false,
                  }
                ]
              },
              {
                template: 'comments',
              },
            ]
          },
          {
            id: 2,
            title: 'Another 2',
            resources: [
              {
                template: 'date',
                value: '03/20/2018'
              },
            ]
          }
        ]
      }
    ];
  }

  public updateBoardTitle(title: string) {
    this.title = title;
  }

  public listUpdated(list: any) {
    const listIndex = this.lists.findIndex((l) => l.id === list.id);
    this.lists.splice(listIndex, 1, list);
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
