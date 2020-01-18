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
  MatButtonModule
} from "@angular/material";

import { ToolbarComponent } from "../components/toolbar.component";
import { CanvasComponent } from "../components/canvas.component";
import { EnclosureComponent } from "../components/enclosure.component";
import { CreateComponent } from "../components/create.component";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CanvasComponent,
    EnclosureComponent,
    CreateComponent
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
