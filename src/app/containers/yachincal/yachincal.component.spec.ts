import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YachincalComponent } from './yachincal.component';

describe('YachincalComponent', () => {
  let component: YachincalComponent;
  let fixture: ComponentFixture<YachincalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YachincalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YachincalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
