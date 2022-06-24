import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
})
export class LabelComponent{

  //Input parameter
  @Input()
  content!:string;
}
