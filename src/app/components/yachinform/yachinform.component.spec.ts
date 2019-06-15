import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YachinformComponent } from './yachinform.component';

describe('YachinformComponent', () => {
  let component: YachinformComponent;
  let fixture: ComponentFixture<YachinformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YachinformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YachinformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
