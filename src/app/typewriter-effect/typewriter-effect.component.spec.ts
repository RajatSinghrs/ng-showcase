import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypewriterEffectComponent } from './typewriter-effect.component';

describe('TypewriterEffectComponent', () => {
  let component: TypewriterEffectComponent;
  let fixture: ComponentFixture<TypewriterEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypewriterEffectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypewriterEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
