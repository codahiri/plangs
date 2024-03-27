import { Component } from "@angular/core";
import { PlangService } from "../plang.service";
import { IPlang } from "../plang";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.less",
})
export class HomeComponent {
	langs!: IPlang[];
	constructor(private plangService: PlangService) {
		this.plangService.getAllData().then((langs) => {
			this.langs = langs;
		});
	}
}
