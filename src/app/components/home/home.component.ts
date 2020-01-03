import { Component, OnInit } from '@angular/core';
import { Category } from 'app/models/category.class';
import { ViecLam } from 'app/models/vieclam.class';
import { CategoryService } from 'app/services/category.service';
import { VieclamService } from 'app/services/vieclam.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cates : Category[];
  public lams : ViecLam[];

  constructor(
    private _cateService : CategoryService,
    private _lamService : VieclamService,

  ) { }

  ngOnInit() {
    this.cates = this._cateService.getAllCate();
    this.lams = this._lamService.getAllVL();
    console.log(this.lams);
  }

  addCate(name : String)
  {
    this._cateService.addCate(new Category(null,name));
  }

  addVL(name:String,status:boolean,id : number  )
  {
    //console.log(id);
    this._lamService.addVL(new ViecLam(null,name,status,id));
    console.log(this._lamService);
  }

}
