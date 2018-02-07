import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MemesGeneratorComponent} from "./components/memes-generator/memes-generator.component";
import {OneMemeComponent} from "./components/one-meme/one-meme.component";

const ROUTES: Routes = [
  {path: '', component: MemesGeneratorComponent},
  {path: 'meme/:id', component: OneMemeComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
