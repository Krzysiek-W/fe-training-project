import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeOfficeComponent } from './exchange-office.component';

describe('ExchangeOfficeComponent', () => {
  let component: ExchangeOfficeComponent;
  let fixture: ComponentFixture<ExchangeOfficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExchangeOfficeComponent]
    });
    fixture = TestBed.createComponent(ExchangeOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
