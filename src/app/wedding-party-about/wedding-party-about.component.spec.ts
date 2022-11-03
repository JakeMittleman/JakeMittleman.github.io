import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingPartyAboutComponent } from './wedding-party-about.component';

describe('WeddingPartyAboutComponent', () => {
  let component: WeddingPartyAboutComponent;
  let fixture: ComponentFixture<WeddingPartyAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingPartyAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingPartyAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
