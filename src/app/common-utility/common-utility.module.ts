import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LabelComponent } from './components/label/label.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { HttpClientModule } from "@angular/common/http";
import { OutOfStockDirective } from '../directives/outOfStock.directive';

@NgModule({
  declarations: [LabelComponent, SearchbarComponent, ProductTableComponent, OutOfStockDirective],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports:[LabelComponent, SearchbarComponent, ProductTableComponent, HttpClientModule, OutOfStockDirective]
})
export class CommonUtilityModule {
 }
