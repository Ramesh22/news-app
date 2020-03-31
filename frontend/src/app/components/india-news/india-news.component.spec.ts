import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IndiaNewsComponent} from './india-news.component';

describe('IndiaNewsComponent', () => {
  let component: IndiaNewsComponent;
  let fixture: ComponentFixture<IndiaNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndiaNewsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
