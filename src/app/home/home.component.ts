import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { PlangService } from "../plang.service";
import { IPlang } from "../plang";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.less",
})
export class HomeComponent {
	langs!: IPlang[];

	constructor(private plangService: PlangService, private router: Router) {
		this.plangService.getAllData().then((langs) => {
			this.langs = langs;
		});
	}

	search(value: string) {
		this.plangService.getAllData().then((langs) => {
			this.langs = langs.filter((word) =>
				word.pLang.toLowerCase().includes(value.toLowerCase())
			);
		});
	}
}
