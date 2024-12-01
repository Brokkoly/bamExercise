import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PersonService } from '../../dataAPI/personService';
import { PersonAstronaut } from '../../dtos/personAstronaut';

@Component({
  selector: 'app-person-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './person-detail.component.html',
  styleUrl: './person-detail.component.css',
})
export class PersonDetailComponent {
  public data: PersonAstronaut | undefined = undefined;
  constructor(private api: PersonService) {}
  ngOnInit(): void {
    // const id = this._route.snapshot.paramMap.get('id');
  }
  getPersonById(id: number) {
    this.api.getAllPersons().subscribe({
      next: (response) => {
        this.data = response.people.find((x) => x.personId === id);
      },
    });
  }
}
