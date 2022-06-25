import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DataProviderService } from 'backend-server/simple.service';
import { ItemModel } from 'src/app/models/items.model';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
})
export class ProductTableComponent implements OnChanges  {
 items!:Array<any>;

 constructor(public dataProviderService:DataProviderService) {
  this.items= dataProviderService.getData();  
 }

filteredItems = new Map<string, Array<ItemModel>>();
@Input()
public inStock!:boolean;
@Input()
public filterString!:string;

ngOnChanges():void{
  this.applyFilter();
}

 applyFilter(): void{
  this.filteredItems = new Map<string, Array<ItemModel>>();
  this.items.forEach((item)=>{
  
      if (item.name.indexOf(this.filterString) === -1) {
        return;
      }

      if (this.inStock && !item.stocked) {
        return;
      }

      if(this.filteredItems.has(item.category))
      {
        this.filteredItems.get(item.category)?.push(new ItemModel(item.name, item.price, item.stocked));
      }
      else
      {
        this.filteredItems.set(item.category, [new ItemModel(item.name, item.price, item.stocked)]);
      }
  });
}
}