import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabuleComponent } from './tabule.component';

describe('TabuleComponent', () => {
  let component: TabuleComponent;
  let fixture: ComponentFixture<TabuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
