import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDirvenComponent } from './template-dirven.component';

describe('TemplateDirvenComponent', () => {
  let component: TemplateDirvenComponent;
  let fixture: ComponentFixture<TemplateDirvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDirvenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDirvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
