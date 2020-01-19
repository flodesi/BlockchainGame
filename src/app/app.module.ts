import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatDividerModule,
  MatCardModule,
  MatCheckboxModule
} from "@angular/material";

import { ToolbarComponent } from "../components/toolbar.component";
import { CanvasComponent } from "../components/canvas.component";
import { EnclosureComponent } from "../components/enclosure.component";
import { CreateComponent } from "../components/create.component";
import { CardComponent } from "src/components/card.component";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CanvasComponent,
    EnclosureComponent,
    CreateComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
