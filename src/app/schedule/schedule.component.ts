import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  EVENTS = [
    "6:00 PM - Guests begin to arrive",
    "6:30 PM - Wedding ceremony begins",
    "7:00 PM - Cocktail hour begins",
    "7:55 PM - Move downstairs for reception",
    "8:00 PM - Reception begins",
    "11:30 PM - Alcoholic drink service ends",
    "12:00 AM - Turn into pumpkin"
  ];

  WEDDING_CEREMONY_NOTES = "Seating information inside the Theater of Electricity:\
    The lower level has stadium seating and there will be extra chairs set-up on the side.\
    Please leave those extra chairs for older guests.\
    The stadium seating is mostly reserved for family. There are some benches and chairs on the second level\
    In addition to standing room. If you are able, please consider standing so that those who need to sit\
    have access to those options first.";

  BAR_CLOSE_NOTES = "(Only water and non-alcoholic drinks served after)";

  PUMPKIN_NOTES = "Just kidding, but the event does end at midnight. Get home safely!";

  // Note for wedding ceremony:
  // 
  

  // Note for bar closing:
  // (Only water and non-alcoholic drinks served after)

  // Note for pumpkin:
  // 

  constructor() { }

  ngOnInit(): void {
  }

}
