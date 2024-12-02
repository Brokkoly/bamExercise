import { Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

export const routes: Routes = [
  { path: 'people', component: PeopleComponent },
  { path: 'people/:id', component: PersonDetailComponent },
  { path: '', redirectTo: 'people', pathMatch: 'full' },
];
