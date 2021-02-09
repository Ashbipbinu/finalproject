import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { WebserviceService } from './webservice.service';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private webServe: WebserviceService) { }
  getCat(){
    return this.webServe.get("catlist");
  }
  
  createCat(title:string){

   return this.webServe.post("catlist",{title})

  }
  deleteCat(catId:string){
    return this.webServe.delete(catId);
  }

  catpatch(title:string){

    return this.webServe.patch("catlist",title);

  }
      
      
      
      getItem(catId:String){
        return this.webServe.get(`catlist/${catId}/item`)
      }

      createItem(title:string,catId:String){
    
      return this.webServe.post(`catlist/${catId}/item`,{title})
    
        }
      
    }
    