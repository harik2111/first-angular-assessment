import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from "@angular/core";

@Directive({selector:'[out-Stock]'})
export class OutOfStockDirective implements OnInit, OnChanges{
    @Input()
    isInStock:boolean = false;

    constructor(private element:ElementRef, private renderer:Renderer2) {
    }

    ngOnInit(): void {
        if(!this.isInStock)
        {
            this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(!this.isInStock)
        {
            this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
        }
    }
}