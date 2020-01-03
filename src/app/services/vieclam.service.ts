import { Injectable } from '@angular/core';
import { ViecLam } from '../models/vieclam.class';

@Injectable()
export class VieclamService {

  public lams : ViecLam[] = [
    new ViecLam(1,"Giặt Đồ",false,1),
    new ViecLam(2,"Rửa Bát",true,1),
    new ViecLam(3,"Làm bt xlths",false,2),
    new ViecLam(4,"Làm bt lt hdt",false,2),
    new ViecLam(5,"Chơi Game",true,3)
  ]                                                                                                            
                  
  constructor() { }

  getAllVL()
  {
    return this.lams;
  }

  addVL(vl : ViecLam)
  {
    vl.id = this.getLastID(this.lams);
    this.lams.push(vl);   
    console.log(vl);      
  }

  getLastID(lams)                                                     
  {
    let id = lams.length;
    return id+1;
                                                 
  }                                              


}
