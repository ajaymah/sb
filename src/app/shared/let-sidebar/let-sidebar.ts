import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-let-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './let-sidebar.html',
  styleUrl: './let-sidebar.css',
})
export class LetSidebar {}
