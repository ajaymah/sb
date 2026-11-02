import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { LetSidebar } from './shared/let-sidebar/let-sidebar';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, LetSidebar],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
