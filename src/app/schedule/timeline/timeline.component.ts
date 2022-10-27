import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input() timelineLength: number = 0;
  @Input() leftSideData: Array<String> = [];
  @Input() rightSideData: Array<String> = [];
  @Input() icons: Array<String> = [];

  constructor() { }

  ngOnInit(): void {
  }

  range(length: number): Array<number> {
    return Array(length);
  }

}
