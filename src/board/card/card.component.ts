import { Component, Input, Output } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() public card: any;
  @Input() public index: any = 0;
  @Input() public cardDeleted: Subject<any>;
  @Input() public isDeleteActivated: boolean = false;

  constructor(
    private _modalService: ModalService
  ) { }

  public openModal() {
    if (!this.isDeleteActivated) {
      this._modalService.activate();
      this._modalService.updateContent(this.card);
    }
  }

  public onDelete() {
    console.log('On Delete!');
    this.cardDeleted.next(this.index);
  }
}
