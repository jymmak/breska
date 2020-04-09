import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdAccComponent } from './prod-acc.component';

describe('ProdAccComponent', () => {
  let component: ProdAccComponent;
  let fixture: ComponentFixture<ProdAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
