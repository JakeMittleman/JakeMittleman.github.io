import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoHuntComponent } from './photo-hunt.component';

describe('PhotoHuntComponent', () => {
  let component: PhotoHuntComponent;
  let fixture: ComponentFixture<PhotoHuntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoHuntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoHuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
