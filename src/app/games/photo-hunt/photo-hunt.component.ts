import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-hunt',
  templateUrl: './photo-hunt.component.html',
  styleUrls: ['./photo-hunt.component.scss']
})
export class PhotoHuntComponent implements OnInit {

  PHOTO_HUNT_ITEMS = [
    "The Bride",
    "The Groom",
    "Dancing",
    "Donut wall selfie",
    "A good dancer",
    "A kiss",
    "I-Do-Crew Members",
    "Happiness",
    "You and your table",
    "The flowers",
    "Good friends",
    "A happy family",
    "The send off",
    "A baby",
    "The bride's grandparent",
    "A speech",
    "T-Rex selfie",
    "Food Station",
    "The horah",
    "The chair lift",
    "Plate of food",
    ""
  ]

  constructor() { }

  ngOnInit(): void {
  }

  formatListItem(listItem: string) {
    let words = listItem.split(' ');

    words[0] = words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join('');
  }

}
