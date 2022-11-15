import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianrupeeComponent } from './indianrupee.component';

describe('IndianrupeeComponent', () => {
  let component: IndianrupeeComponent;
  let fixture: ComponentFixture<IndianrupeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndianrupeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndianrupeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
