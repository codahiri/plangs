import { NgModule } from "@angular/core";
import {
	BrowserModule,
	provideClientHydration,
} from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WordComponent } from "./word/word.component";
import { HomeComponent } from "./home/home.component";
import { WordService } from "./word.service";
import { DetailsComponent } from './details/details.component';

@NgModule({
	declarations: [AppComponent, WordComponent, HomeComponent, DetailsComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [provideClientHydration(), WordService],
	bootstrap: [AppComponent],
})
export class AppModule {}
