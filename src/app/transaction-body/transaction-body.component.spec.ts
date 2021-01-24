import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionBodyComponent } from './transaction-body.component';

describe('TransactionBodyComponent', () => {
  let component: TransactionBodyComponent;
  let fixture: ComponentFixture<TransactionBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
