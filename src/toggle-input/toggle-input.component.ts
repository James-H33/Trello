import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-toggle-input',
  templateUrl: './toggle-input.component.html',
  styleUrls: ['./toggle-input.component.scss']
})

export class ToggleInputComponent {
  @Input() title: string = '';
  @Output() titleUpdated$: Subject<string> = new Subject();

  public isEditTitle: boolean = false;

  constructor() { }

  toggleEdit() {
    this.isEditTitle = !this.isEditTitle;
  }

  public updateTitle(title: string) {
    this.titleUpdated$.next(title);
    this.toggleEdit();
  } 
}
