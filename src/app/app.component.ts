import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'udemyAngular';
  name = 'Filin';

  color:string = 'rgb(0,0,0)';
  inverseColor:string = 'rgb(255,255,255)';
  bgExist: boolean = true;

  ngOnInit(): void {
/*    setInterval(()=>{
          let R = Math.floor(Math.random() * 256);
          let G = Math.floor(Math.random() * 256);
          let B = Math.floor(Math.random() * 256);
          let iR;
          let iG;
          let iB;

          this.color = `rgb(${R}, ${G}, ${B})`
          this.inverseColor = `rgb(${255-R}, ${255-G}, ${255-B})`
          console.log(this.color)
          console.log(this.inverseColor)
          console.log("----")
    },50)*/
  }

  toggleBg(){
    this.bgExist = !this.bgExist;
  }


}
