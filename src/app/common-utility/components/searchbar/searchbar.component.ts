import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { SearchInput } from '../../../models/searchInput.model';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
})
export class SearchbarComponent {
  textToSearch:string="";
  isInStock:boolean = false;
  @Output()
  triggerSearchCriteriaChange = new EventEmitter<SearchInput>();

  onTextToSearchChange():void{
    this.triggerSearchCriteriaChange.emit(new SearchInput(this.textToSearch, this.isInStock))
    console.log(`FilteredText : ${this.textToSearch} IncludeInStock : ${this.isInStock}`);
  }

  onChecked(checked:boolean): void{
      this.isInStock = checked;
      this.onTextToSearchChange();
  }
}
