import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EnclosureComponent } from "../components/enclosure.component";
import { CreateComponent } from "../components/create.component";

const routes: Routes = [
  { path: "enclosure", component: EnclosureComponent },
  { path: "create", component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
