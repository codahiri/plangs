import { NgModule } from "@angular/core";
import {
	BrowserModule,
	provideClientHydration,
} from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BoxComponent } from './box/box.component';

@NgModule({
	declarations: [AppComponent, NavbarComponent, HomeComponent, BoxComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [provideClientHydration()],
	bootstrap: [AppComponent],
})
export class AppModule {}
