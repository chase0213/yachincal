import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YachingraphComponent } from './yachingraph.component';

describe('YachingraphComponent', () => {
  let component: YachingraphComponent;
  let fixture: ComponentFixture<YachingraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YachingraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YachingraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
