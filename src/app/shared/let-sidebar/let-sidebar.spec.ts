import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetSidebar } from './let-sidebar';

describe('LetSidebar', () => {
  let component: LetSidebar;
  let fixture: ComponentFixture<LetSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetSidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(LetSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
