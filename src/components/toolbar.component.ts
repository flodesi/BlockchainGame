import { Component } from "@angular/core";
// import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: "toolbar",
  template: `
    <mat-toolbar color="primary">
<<<<<<< HEAD
      <span><img width="40" src="assets/img/base_penguin.png" /> </span>
      <span> Club Crypto Penguins </span>
=======
      <a routerLink="/enclosure"
        ><img width="40" src="assets/img/base_penguin.png" />
      </a>
>>>>>>> 964b372763c90f6371793a6b7f00112f4d8840c1
      <span class="fill-toolbar-space"></span>
      <a routerLink="/enclosure">Enclosure</a>
      <a routerLink="/create">Create</a>
    </mat-toolbar>
  `,
  styles: [
    ".fill-toolbar-space { flex: 1 1 auto; }",
    "a { margin: 0.5rem 1.5rem 0.55rem 0; text-decoration: none; color: white;}"
  ]
})
export class ToolbarComponent {
  componentName: "Toolbar";
}
