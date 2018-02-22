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

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ListComponent,
    CardComponent,
    ToggleInputComponent,
    NavigationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    DragulaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
