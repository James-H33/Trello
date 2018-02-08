import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board-component.html',
  styleUrls: ['./board-component.scss']
})

export class BoardComponent {
  public isEditTitle: boolean = false;
  public title: string = 'James Board';
 
  constructor() { }

  public toggleEditTitle() {
    this.isEditTitle = !this.isEditTitle;
  }
}
