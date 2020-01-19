import { Component } from "@angular/core";
// import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: "toolbar",
  template: `
    <mat-toolbar color="primary">
      <a routerLink="/enclosure"
        ><img width="40" src="assets/img/base_penguin.png" />
      </a>
      <span class="fill-toolbar-space"></span>
      <a routerLink="/enclosure">Enclosure</a>
      <a routerLink="/create">Create</a>
    </mat-toolbar>
  `,
  styles: [
    ".fill-toolbar-space { flex: 1 1 auto; }",
    "a { margin: 0.5rem 1.5rem 0.55rem 0; text-decoration: none; font-weight: 300; color: white;}"
  ]
})
export class ToolbarComponent {
  componentName: "Toolbar";
}
