import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Button } from './button';

describe('Button', () => {
  let fixture: ComponentFixture<Button>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button],
    }).compileComponents();

    fixture = TestBed.createComponent(Button);
  });

  it('should render a primary button by default', () => {
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(button.disabled).toBe(false);
    expect(button.className).toContain('bg-[var(--color-brand)]');
  });

  it('should disable the button when the disabled variant is selected', () => {
    fixture.componentRef.setInput('variant', 'disabled');
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(button.disabled).toBe(true);
    expect(button.className).toContain('cursor-not-allowed');
  });

  it('should apply the selected size', () => {
    fixture.componentRef.setInput('size', 'sm');
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(button.className).toContain('min-h-9');

    fixture.componentRef.setInput('size', 'lg');
    fixture.detectChanges();
    expect(button.className).toContain('min-h-12');
  });
});
