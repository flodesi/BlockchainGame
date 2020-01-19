import { Component } from "@angular/core";

@Component({
  template: `
    <div>
      <h1>Create new penguins!</h1>
      <p>Check off two penguins to create a new one.</p>
      <mat-divider></mat-divider>
      <a mat-raised-button color="primary">Create!</a>
      <div class="penguin-card">
        <card></card>
        <card></card>
        <card></card>
      </div>
    </div>
  `,
  styles: [
    "div {text-align: center}",
    "mat-divider {width: 1000px; margin: 10px auto}",
    "a {width: 100px; margin: 0 0 100px 0}",
    ".penguin-card {margin: auto}"
  ]
})
export class CreateComponent {}
