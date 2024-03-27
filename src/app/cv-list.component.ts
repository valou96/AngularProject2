// cv-list.component.ts

import { Component } from '@angular/core';
import { Cv } from './cv.model';

@Component({
  selector: 'app-cv-list',
  template: `
    <h2>Liste des CVs</h2>
    <ul>
      <li *ngFor="let cv of cvs" (click)="showDetails(cv)">
        {{ cv.name }}
      </li>
    </ul>
    <app-cv-detail *ngIf="selectedCv" [cv]="selectedCv"></app-cv-detail>
  `
})
export class CvListComponent {
  cvs: Cv[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', skills: ['JavaScript', 'Angular'] },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', skills: ['Python', 'Django'] }
  ];
  selectedCv: Cv | null = null;

  showDetails(cv: Cv) {
    this.selectedCv = cv;
  }
}
