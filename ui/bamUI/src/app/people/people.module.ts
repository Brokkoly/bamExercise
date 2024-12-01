import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Router, RouterModule } from "@angular/router";
import { PersonDetailComponent } from "../person-detail/person-detail.component";
import { PeopleComponent } from "./people.component";

@NgModule({
    imports: [
      BrowserModule,
      HttpClientModule,
    //   RouterModule.forChild([
  
    //   ]),
      RouterModule
    ],
    declarations: [ 
      PeopleComponent,
      PersonDetailComponent
    ]
  })
  export class PeopleModule{}