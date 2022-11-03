import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-wedding-party-about',
  templateUrl: './wedding-party-about.component.html',
  styleUrls: ['./wedding-party-about.component.scss']
})
export class WeddingPartyAboutComponent implements OnInit {

  isHidden: boolean = true;

  constructor(public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit(): void {
  }

  toggleView() {
    this.isHidden = !this.isHidden;
  }

}
