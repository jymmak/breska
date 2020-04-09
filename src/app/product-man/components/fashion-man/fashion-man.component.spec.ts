import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionManComponent } from './fashion-man.component';

describe('FashionManComponent', () => {
  let component: FashionManComponent;
  let fixture: ComponentFixture<FashionManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
