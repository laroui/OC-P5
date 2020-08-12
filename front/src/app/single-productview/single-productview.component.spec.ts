import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductviewComponent } from './single-productview.component';

describe('SingleProductviewComponent', () => {
  let component: SingleProductviewComponent;
  let fixture: ComponentFixture<SingleProductviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleProductviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProductviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
