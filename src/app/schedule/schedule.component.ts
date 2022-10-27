import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  TIMES: Array<String> = ["6:30 PM",
                          "7:00 PM",
                          "8:00 PM",
                          "9:30 PM",
                          ];

  EVENTS: Array<String> = [
    "Wedding Ceremony",
    "Cocktail Hour",
    "Dinner",
    "Desert"
  ];

  ICONS: Array<String> = [
    "wedding",
    "wine",
    "dinner2",
    "donut"
  ];

  TIMELINE_LENGTH = 4;

  constructor() { }

  ngOnInit(): void {
  }

}
