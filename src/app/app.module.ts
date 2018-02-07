import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { MemesGeneratorComponent } from './components/memes-generator/memes-generator.component';
import { HttpClientModule } from "@angular/common/http";
import { MemeDataService } from "./servives/meme-data.service";
import { OneMemeComponent } from './components/one-meme/one-meme.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MemesGeneratorComponent,
    OneMemeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, FormsModule
  ],
  providers: [MemeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
