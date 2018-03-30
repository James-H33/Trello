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

  public cardDeleted$: Subject<any> = new Subject();
  public isDeleting: boolean = false;

  constructor(private dragulaService: DragulaService) {
    this.cardDeleted$.subscribe((x) => this.cardDeleted(x));
    this.subscribeToDragula();
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

  public toggleCardDeletion() {
    this.isDeleting = !this.isDeleting;
  }

  public cardDeleted(index: number) {
    console.log(index);
    this.list.cards.splice(index, 1);
    this.toggleCardDeletion();
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

  private subscribeToDragula() {
    this.dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });
    this.dragulaService.drop.subscribe((value) => {
      this.onDrop(value);
    });
    this.dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });
    this.dragulaService.out.subscribe((value) => {
      this.onOut(value.slice(1));
    });
  }
}
