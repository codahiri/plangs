import { NgModule } from "@angular/core";
import {
	BrowserModule,
	provideClientHydration,
} from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { BoxComponent } from "./box/box.component";
import { DetailsComponent } from "./details/details.component";
import { BlogComponent } from "./blog/blog.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HomeComponent,
		BoxComponent,
		DetailsComponent,
		BlogComponent,
		AboutComponent,
		ContactComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [provideClientHydration()],
	bootstrap: [AppComponent],
})
export class AppModule {}
