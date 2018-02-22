import { Component, Input, Output } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-list',
  templateUrl: './list-component.html',
  styleUrls: ['./list-component.scss']
})

export class ListComponent {
  @Input() list: any = {};
  @Input() updatedList$: Subject<any>;

  constructor(private dragulaService: DragulaService) {
    dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      this.onDrop(value);
    });
    dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      this.onOut(value.slice(1));
    });
  }

  public addCard() {
    this.list.cards.push({
      id: Math.floor(Math.random() * 100) ,
      title: 'Another One',
      resources: []
    });
  }

  public updateListTitle(title: string) {
    this.list.title = title;
  }

  private onDrag(args) {
    const [e, el] = args;
  }

  private onDrop(args) {
    if (args[0] === this.list.id) {
      this.updatedList$.next(this.list);
    }
  }

  private onOver(args) {
    const [e, el, container] = args;
  }

  private onOut(args) {
    const [e, el, container] = args;
  }
}
