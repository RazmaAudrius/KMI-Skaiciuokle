import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { kmiskaiciuokleComponent } from './kmi-skaiciuokle/kmi-skaiciuokle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, kmiskaiciuokleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KMI-Skaiciuokle';
}
