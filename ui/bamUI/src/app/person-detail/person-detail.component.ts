import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
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
  // @Input() id: number = -1;
  private _route = inject(ActivatedRoute);
  isLoading = false;
  constructor(private api: PersonService) {}

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    this.getPersonById(Number(id));
  }
  getPersonById(id: number) {
    this.isLoading = true;
    this.api.getPersonById(id).subscribe({
      next: (response) => {
        this.data = response.person
        this.isLoading = false;
      },
      error: (error)=>{
        console.error(error);
      },
      complete: ()=>{
        console.log("Loaded person details");
        this.isLoading = false;
      }
    });
  }
}
