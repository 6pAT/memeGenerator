import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemesGeneratorComponent } from './memes-generator.component';

describe('MemesGeneratorComponent', () => {
  let component: MemesGeneratorComponent;
  let fixture: ComponentFixture<MemesGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemesGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemesGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
