import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-group-form',
  standalone: true,
  imports: [],
  templateUrl: './group-form.component.html',
  styleUrl: './group-form.component.scss'
})
export class GroupFormComponent {
  profileForm = new FormGroup(
    {
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      address: new FormGroup(
        {
          street: new FormControl(''),
          city: new FormControl(''),
          state: new FormControl(''),
          zip: new FormControl(''),
        }
      )
    }
  )

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
