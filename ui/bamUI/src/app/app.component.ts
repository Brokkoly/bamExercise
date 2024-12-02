import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PersonService } from '../dataAPI/personService';
import { Observable, tap } from 'rxjs';
import { PersonAstronaut } from '../dtos/personAstronaut';
import { PeopleComponent } from './people/people.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonDetailComponent, PeopleComponent],
  providers: [PersonService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Stargate';
}
