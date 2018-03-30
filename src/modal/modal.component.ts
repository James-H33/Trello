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
  public selectedTemplate: string = 'default';
  public content: any = {
    id: null, 
    title: '',
    resources: []
  };

  private _resourceList: object[] = [
    { key: 'date', name: 'Date' },
    { key: 'description', name: 'Description' },
    { key: 'todo', name: 'Todo List' },
    { key: 'comments', name: 'Comments' },
  ];

  constructor(private _modalService: ModalService) {
    this._modalService.modalControl
      .subscribe((cmd: string) => this.dispatch(cmd));
      
    this._modalService.modalContent
      .subscribe((c: any) => this.content = c);
  }

  public get resourceList(): any {
    return this._resourceList
      .filter((r: any) => 
        !this.content.resources.some(x => x.template === r.key));
  }

  public onSelectedTemplate(t: string) {
    this.content.resources.push(this.getResourceModel(t));
    this.selectedTemplate = null;
  }

  public getResourceModel(t: string) {
    const templates = {
      'date': { template: 'date', value: ''},
      'description': { template: 'description', value: ''},
      'todo': { template: 'todo', todos: [] },
      'comments': { template: 'comments', value: ''},
    };

    return templates[t];
  }

  public getResourceByTemplate(t: string) {
    return this.content.resources.find(r => r.template === t);
  }

  public updateTitle(title: string) {
    this.content.title = title;
  }

  public dispatch(c: string) {
    this.isActive = c === 'activate';
  }

  public deactivate() {
    this.isActive = false;
  }
}
