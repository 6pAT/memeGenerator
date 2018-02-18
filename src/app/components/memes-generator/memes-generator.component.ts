import {Component, OnInit} from '@angular/core';
import { MemeDataService } from "../../servives/meme-data.service";
import {Meme} from "../../Models/Meme";

@Component({
  selector: 'app-memes-generator',
  templateUrl: './memes-generator.component.html',
  styleUrls: ['./memes-generator.component.css']
})
export class MemesGeneratorComponent implements OnInit {
  error: string;

  constructor(private memeServise: MemeDataService) { }

  private memes:Meme[];

  ngOnInit() {
    if (this.memeServise.isMemes()) {
      this.memes = this.memeServise.getMemes();
    }else{
      this.memeServise.downloadMemes().subscribe(memes=>{
        this.memes = memes;
        this.memeServise.saveMemes(this.memes);
      }, error2 => {
        this.error = "Ne v etot den` cowboy";
      });
    }
  }

  onClick(id){
    console.log(id);
  }

}
