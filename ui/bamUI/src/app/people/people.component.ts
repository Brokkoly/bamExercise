import { Component } from '@angular/core';
import { PersonAstronaut } from '../../dtos/personAstronaut';
import { PersonService } from '../../dataAPI/personService';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  isLoading: boolean = false;
  currentPersonId: string = "";

  public data: PersonAstronaut[] = [];
  constructor(private api: PersonService) {}
  ngOnInit() {
    this.isLoading = true;
    this.api.getAllPersons().subscribe({
      next: (response) => {
        console.log({response});
        this.data = response.people;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        console.log('Error: ', error);
      },
      complete: () => console.log('Request all persons complete'),
    });
  }
}
