import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'udemyAngular';
  name = 'Filin';
  img:string = "";
  img1 = "https://via.placeholder.com/480x360?text=Vasia%20Filin";
  img2 = "https://via.placeholder.com/400x300?text=Pefia%20Suslik";

  ngOnInit(): void {
    this.img = this.img1
    setTimeout(()=>{
      this.img = this.img2
    },2000)
  }



}
