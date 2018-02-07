import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
//Models
import {Meme} from "../Models/Meme";


@Injectable()
export class MemeDataService {

  private memes:Meme[];
  constructor(private http:HttpClient) {
    this.memes = JSON.parse(localStorage.getItem('memesCash')) || [];
  }

  isMemes():boolean{
    let res:boolean = true;
    if (this.memes.length === 0) {
      res = false;
    }
    return res;
  }

  downloadMemes():Observable<Meme[]>{
    return this.http.get(`https://api.imgflip.com/get_memes`).map(data=> {
      let dataM = data["data"];
      let memesList = dataM['memes'];
      return memesList;
    });
  }

  getMemes(){
    return this.memes;
  }

  getMeme(id:number){
    return this.memes[id];
  }

  saveMemes(memes: Meme[]) {
    this.memes = memes;
    localStorage.setItem('memesCash', JSON.stringify(this.memes));
  }
}

