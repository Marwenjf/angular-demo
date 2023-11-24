import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNameComponent } from './info-name.component';

describe('InfoNameComponent', () => {
  let component: InfoNameComponent;
  let fixture: ComponentFixture<InfoNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
