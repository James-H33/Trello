import { Component, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() public card: any;

  constructor(private _modalService: ModalService) { }

  public openModal() {
    this._modalService.activate();
    this._modalService.updateContent(this.card);
  }
}
