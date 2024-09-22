import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { NavComponent } from './nav/nav.component';
  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavComponent, IntroComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
  export class AppComponent {
    title = 'Recycling';
  };

