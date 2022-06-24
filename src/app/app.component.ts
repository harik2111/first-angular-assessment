import { Component } from '@angular/core';
import { SearchInput } from './models/searchInput.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'first-angular-assessment';
  public searchInput:SearchInput = new SearchInput("", false);

  onFilterCriteriaChanged(data:SearchInput): void{
    this.searchInput = data;
  }
}
