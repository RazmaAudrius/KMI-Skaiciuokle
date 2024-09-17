import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kmi-skaiciuokle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './kmi-skaiciuokle.component.html',
  styleUrl: './kmi-skaiciuokle.component.css'
})
export class kmiskaiciuokleComponent {
  svoris: number = 0;
  ugis: number = 0;
  kmi: number | null = null;

  SkaiciuotiKMI() {
    if (this.svoris > 0 && this.ugis > 0) {
      const ugisMetrais = this.ugis / 100;
      this.kmi = this.svoris / (ugisMetrais * ugisMetrais);
    }
  }
}
