import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { CommentsComponentComponent } from './comments-component/comments-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    CommentsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MainComponentComponent, CommentsComponentComponent]
})
export class AppModule { }
