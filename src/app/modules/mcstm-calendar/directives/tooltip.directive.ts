import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input('tooltipFrom')
  from = 0;

  @Input('tooltipAnd')
  and = 0;

  ngOnInit(): void {
    this.viewContainer.createEmbeddedView(this.templateRef, {
    //  console.log(this.from, this.and);
      $implicit: this.from + this.and,
    });
  }

}
