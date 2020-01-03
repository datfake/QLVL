import { Injectable } from '@angular/core';
import { Category } from '../models/category.class';

@Injectable()
export class CategoryService {

  public cates : Category[] = [
    new Category(1,"Nội Trợ"),
    new Category(2,"Học Hành"),
    new Category(3,"Giải Trí")
  ]
  constructor() { }

  getAllCate()
  {
    return this.cates;
  }
  addCate(cate : Category)
  {
    cate.id = this.getLastID(this.cates);
    this.cates.push(cate);
    console.log(cate); 
  }

  getLastID(cates)
  {
    let id = cates.length;
    return id+1;
  
  }

}
