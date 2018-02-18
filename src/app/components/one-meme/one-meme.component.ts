import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MemeDataService} from "../../servives/meme-data.service";
import {Meme} from "../../Models/Meme";

@Component({
  selector: 'app-one-meme',
  templateUrl: './one-meme.component.html',
  styleUrls: ['./one-meme.component.css']
})
export class OneMemeComponent implements OnInit {
  //HTML Elements
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  img: HTMLImageElement;

  //to get the right meme
  id: number;
  meme: Meme;

  hrefMeme: string;
  textTop: string;
  textBottom: string;

  //Scale & rotate
  scale:number;
  rotate:number;

/*todo:  cropper
   --  https://github.com/matheusdavidson/angular-cropperjs
--https://github.com/fengyuanchen/cropperjs
-- https://www.npmjs.com/package/ngx-cropper
  -- https://www.npmjs.com/package/ng2-img-cropper      for angular
  -- https://imgflip.com/memegenerator/57276689/Computer-Code-Meme
  -- https://github.com/hongkhanh/cropbox
 */
  public typeof(whatever: any): string { return typeof whatever; }
  a: number = 100;
  b: number = 0.5;
  constructor(private activeRoute: ActivatedRoute, private memesServise: MemeDataService) {
    this.scale = 1;
    this.rotate = 0;
  }

  ngOnInit() {
    this.id = parseInt(this.activeRoute.snapshot.params['id']);
    this.meme = this.memesServise.getMeme(this.id);

    this.img = <HTMLImageElement>document.getElementById('image');
    this.canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
    this.ctx = this.canvas.getContext('2d');
    let self = this;
    this.img.setAttribute('crossOrigin', 'anonymous');
    this.img.onload = function () {
      drawMeme();
    };

    function drawMeme() {
      self.ctx.drawImage(self.img, 0, 0, self.meme.width, self.meme.height);
      self.hrefMeme = self.canvas.toDataURL();
    }
  }

  onKeyUp() {
    this.ctx.save();

    // Clear canvas
    this.ctx.clearRect(0, 0, this.meme.width, this.meme.height);

    // Translate to center so transformations will apply around this point
    this.ctx.translate(this.meme.width/2, this.meme.height/2);

    // Perform scale
    this.ctx.scale(this.scale, this.scale);

    // Perform rotation
    this.ctx.rotate(this.rotate*Math.PI/180);

    // Reverse the earlier translation
    this.ctx.translate(-this.canvas.width/2, -this.canvas.height/2);

    this.ctx.drawImage(this.img, 0, 0, this.meme.width, this.meme.height);

    this.ctx.restore();

    this.ctx.lineWidth = 4;
    this.ctx.font = '20pt sans-serif';
    this.ctx.strokeStyle = 'black';
    this.ctx.fillStyle = 'white';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'top';

    let x: number = this.meme.width / 2;
    let y: number = 0;
    this.wrapText(this.ctx, this.textTop, x, y, 300, 28, false);

    this.ctx.textBaseline = 'bottom';
    y = this.meme.height;
    this.wrapText(this.ctx, this.textBottom, x, y, 300, 28, true);
  }

  wrapText(context:CanvasRenderingContext2D,
           text:string, x:number, y:number,
           maxWidth:number, lineHeight:number,
           fromBottom:boolean) {

    let pushMethod = (fromBottom) ? 'unshift' : 'push';
    lineHeight = (fromBottom) ? -lineHeight : lineHeight;

    let lines = [];
    let y:number = y;
    let line:string = '';
    if (text !== undefined) {
      let words = text.toUpperCase().split(' ');
      for (let n: number = 0; n < words.length; n++) {
        let testLine = line + ' ' + words[n];
        let metrics = context.measureText(testLine);
        let testWidth = metrics.width;

        if (testWidth > maxWidth) {
          lines[pushMethod](line);
          line = words[n] + ' ';
        } else {
          line = testLine;
        }
      }
      lines[pushMethod](line);

      for (let k in lines) {
        context.strokeText(lines[k], x, y + lineHeight * parseInt(k));
        context.fillText(lines[k], x, y + lineHeight * parseInt(k));
      }
    }
  }

  doTransform() {
    console.log(this.rotate);
    console.log(this.scale);
    this.ctx.save();

    // Clear canvas
    this.ctx.clearRect(0, 0, this.meme.width, this.meme.height);

    // Translate to center so transformations will apply around this point
    this.ctx.translate(this.meme.width/2, this.meme.height/2);

    // Perform scale
    this.ctx.scale(this.scale, this.scale);

    // Perform rotation
    this.ctx.rotate(this.rotate*Math.PI/180);

    // Reverse the earlier translation
    this.ctx.translate(-this.canvas.width/2, -this.canvas.height/2);

    // Finally, draw the image
    this.ctx.drawImage(this.img, 0, 0, this.meme.width, this.meme.height);

    this.ctx.restore();
  }
}
