import { ComponentFixture, TestBed } from '@angular/core/testing';

import { kmiskaiciuokleComponent } from './kmi-skaiciuokle.component';

describe('KMISkaiciuokleComponent', () => {
  let component: kmiskaiciuokleComponent;
  let fixture: ComponentFixture<kmiskaiciuokleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [kmiskaiciuokleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(kmiskaiciuokleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
