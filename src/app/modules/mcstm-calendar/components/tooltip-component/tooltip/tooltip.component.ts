import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  tooltip: any;
  left: number = 0;
  top: number = 0;

  constructor() {}

  ngOnInit(): void {}



}
