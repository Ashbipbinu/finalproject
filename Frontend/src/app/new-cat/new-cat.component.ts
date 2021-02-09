import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-new-cat',
  templateUrl: './new-cat.component.html',
  styleUrls: ['./new-cat.component.css']
})
export class NewCatComponent implements OnInit {
 
  

  constructor(private catServe: CatService, private router:Router) { }

  ngOnInit(): void {
  }
    CatPost(title:string){
      this.catServe.createCat(title).subscribe((response:any)=>{
        console.log(response);
        this.router.navigate([`/catlist`,response._id])

      })

     
    
    }
    
}
