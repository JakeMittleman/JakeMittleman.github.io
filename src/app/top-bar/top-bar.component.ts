import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Output() currTabEmitter: EventEmitter<string> = new EventEmitter();

  mobileMenuActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  emitCurrTab(newTab: string): void {
    if (this.mobileMenuActive) {
      this.mobileMenuActive = !this.mobileMenuActive;
    }
    this.currTabEmitter.emit(newTab);
  }

  toggleHamburgerMenu() {
    this.mobileMenuActive = !this.mobileMenuActive;
  }

}
