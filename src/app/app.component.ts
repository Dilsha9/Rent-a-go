import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstangularpro';
  isavailable=false;
  name="Dilsha"
  months= ["January","February","March","April","May","June","July","August","September","October","November","December"]
  buttonClicked(){
    alert("Clicked");
  }
  keyUpDemo(){
    console.log("Key up event has occured")
  }
}
