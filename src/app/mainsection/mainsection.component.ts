import { Component,OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-mainsection',
  templateUrl: './mainsection.component.html',
  styleUrls: ['./mainsection.component.css']
})
export class MainsectionComponent implements OnInit {

  ngOnInit(): void {
    this.details()
  }
  
  userdet:any ={}
  colors:any =["#90EE90","#faff61","#3684ad","#b0383c","#465adb","#911677","#42b360","#e37d34"]
  colorNum:any
  constructor(private api:ApiService) {}
  details(){
    this.colorNum = this.colors[(Math.floor(Math.random() * 8))]
    this.api.DataDetails(Math.floor(Math.random() * 100)).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.userdet = res;
        
      },
      error:(err:any)=>{
        console.log("Please try After sometime");
      }
    })
  }
}
