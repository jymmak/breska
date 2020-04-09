import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionWomanComponent } from './fashion-woman.component';

describe('FashionWomanComponent', () => {
  let component: FashionWomanComponent;
  let fixture: ComponentFixture<FashionWomanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionWomanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionWomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
