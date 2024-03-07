import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.scss'
})
export class BasicFormComponent {
  name = new FormControl('');

  updateName() {
    this.name.setValue('Nancy');
  }
}
