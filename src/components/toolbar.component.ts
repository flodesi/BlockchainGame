import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: "toolbar",
  template: `
    <mat-toolbar color="primary">
      <span><img width="40" src="assets/img/base_penguin.png" /> </span>
      <span class="fill-toolbar-space"></span>
      <span>{{ toolbar.link1 }}</span>
      <span>{{ toolbar.link2 }}</span>
    </mat-toolbar>
  `
})
export class ToolbarComponent {
  componentName: "Toolbar";
}
