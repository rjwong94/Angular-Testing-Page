import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ng-bootstrap-practice',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './ng-bootstrap-practice.component.html',
  styleUrl: './ng-bootstrap-practice.component.scss'
})
export class NgBootstrapPracticeComponent {
  active=1;
}
