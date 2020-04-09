import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionChildrenComponent } from './fashion-children.component';

describe('FashionChildrenComponent', () => {
  let component: FashionChildrenComponent;
  let fixture: ComponentFixture<FashionChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
