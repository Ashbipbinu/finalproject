import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  constructor(private catserve: CatService, private route: ActivatedRoute) { }

  catId:any

  ngOnInit(): void {

    this.route.params.subscribe((params:Params)=>{
      console.log(params);
      this.catId = params["catId"];
      console.log(this.catId);
      
    })
    
  }


      createItem(title:String){
        this.catserve.createItem(this.catId,title).subscribe((newItem:any)=>{
                console.log(newItem);
        })
        
      }
}
