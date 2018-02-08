import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list-component.html',
  styleUrls: ['./list-component.scss']
})

export class ListComponent {
  public list: any;

  constructor() {
    this.list = {
      title: 'Message Board',
      items: [
        {
          id: 1,
          title: 'Some Test Checklist',
          resources: []
        },
        {
          id: 2,
          title: 'Another Checklist',
          resources: []
        },
      ]
    };
  }
}
