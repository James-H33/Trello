import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BoardComponent } from '../board/board-component';
import { ListComponent } from '../board/list/list-component';
import { CardComponent } from '../board/card/card.component';
import { NavigationComponent } from '../navigation/navigation-component';
import { ToggleInputComponent } from '../toggle-input/toggle-input.component';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../services/modal.service';
import { TodoComponent } from '../todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ListComponent,
    CardComponent,
    TodoComponent,
    ModalComponent,
    ToggleInputComponent,
    NavigationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    DragulaModule,
    AppRoutingModule
  ],
  providers: [
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
