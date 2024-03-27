// cv-detail.component.ts

import { Component, Input } from '@angular/core';
import { Cv } from './cv.model';

@Component({
  selector: 'app-cv-detail',
  template: `
    <div *ngIf="cv">
      <h2>Détails du CV</h2>
      <p>Nom: {{ cv.name }}</p>
      <p>Email: {{ cv.email }}</p>
      <p>Téléphone: {{ cv.phone }}</p>
      <p>Compétences:</p>
      <ul>
        <li *ngFor="let skill of cv.skills">{{ skill }}</li>
      </ul>
    </div>
  `
})
export class CvDetailComponent {
  @Input() cv: Cv | null = null;
}
