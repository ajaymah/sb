import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the navigation links', () => {
    const links = fixture.nativeElement.querySelectorAll('nav a');

    expect(Array.from(links, (link: Element) => link.textContent?.trim())).toEqual([
      'Home',
      'Form elements',
      'Tables',
      'Grid',
    ]);
  });
});
