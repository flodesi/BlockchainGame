import { Component } from "@angular/core";

@Component({
  selector: "card",
  template: `
    <mat-card>
      <img mat-card-image src="assets/img/base_penguin.png" />
      <mat-card-content>
        <mat-checkbox></mat-checkbox>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    "mat-card {display: inline-block; margin: 0 10px; max-width: 50px; text-align: center}",
    "img {width: 50px; object-fit: contain; padding: 10px 10px 0 10px}"
  ]
})
export class CardComponent {}
