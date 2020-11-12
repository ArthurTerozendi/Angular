import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaOperadorElvisComponent } from './diretiva-operador-elvis.component';

describe('DiretivaOperadorElvisComponent', () => {
  let component: DiretivaOperadorElvisComponent;
  let fixture: ComponentFixture<DiretivaOperadorElvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaOperadorElvisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaOperadorElvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
