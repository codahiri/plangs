import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";
import { BlogComponent } from "./blog/blog.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
		title: "Home",
	},
	{
		path: "details/:id",
		component: DetailsComponent,
		title: "Details page",
	},
	{
		path: "blog",
		component: BlogComponent,
		title: "Blog",
	},
	{
		path: "about",
		component: AboutComponent,
		title: "About",
	},
	{
		path: "contact",
		component: ContactComponent,
		title: "Contact",
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
