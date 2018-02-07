import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneMemeComponent } from './one-meme.component';

describe('OneMemeComponent', () => {
  let component: OneMemeComponent;
  let fixture: ComponentFixture<OneMemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneMemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneMemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
