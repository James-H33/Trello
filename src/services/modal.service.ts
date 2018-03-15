import { ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { Subject } from 'rxjs/Subject';

export class ModalService {
  public modalControl: Subject<any> = new Subject();
  public modalContent: Subject<any> = new Subject();

  constructor() { }

  public activate() {
    this.modalControl.next('activate');
  }

  public deactivate() {
    this.modalControl.next('deactivate');
  }

  public updateContent(data: any) {
    this.modalContent.next(data);
  }
}
