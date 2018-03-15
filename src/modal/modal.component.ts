import { Output, Component } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  public isActive: boolean = false;
  public content: any = {
    id: null, 
    title: '',
    resources: []
  };

  constructor(private _modalService: ModalService) {
    this._modalService.modalControl
      .subscribe((cmd: string) => this.dispatch(cmd));
    this._modalService.modalContent
      .subscribe((c: any) => this.content = c);
  }

  public dispatch(c: string) {
    this.isActive = c === 'activate';
  }

  public deactivate() {
    this.isActive = false;
  }
}
