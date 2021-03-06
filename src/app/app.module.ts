import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './routes';
import { AppConfigService } from './app-config.service';
import { RouterModule } from '@angular/router';
import { TaskManagerModule } from './task-manager/task-manager.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TaskManagerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
