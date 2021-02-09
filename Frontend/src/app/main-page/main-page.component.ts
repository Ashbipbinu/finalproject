import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CatService } from '../cat.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  catlists:any;
  item:any;

  constructor(private catServe: CatService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      console.log(params);
      
     
//  this.catServe.getItem(params.catId).subscribe((item:any)=>{
//         this.item = item
//       })
      
    })

    this.catServe.getCat().subscribe((catlists:any)=>{
      this.catlists =catlists
    })
    
   
  }
    

}
