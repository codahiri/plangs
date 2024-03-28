import { Component } from "@angular/core";
import { PlangService } from "../plang.service";
import { ActivatedRoute } from "@angular/router";
import { IPlang } from "../plang";

// type TypeKeyFeat =
// 	| {
// 			featOne: string;
// 			featTwo: string;
// 			featThree: string;
// 			featFour: string;
// 	  }
// 	| undefined;

@Component({
	selector: "app-details",
	templateUrl: "./details.component.html",
	styleUrl: "./details.component.less",
})
export class DetailsComponent {
	lang!: IPlang | undefined;

	constructor(
		private route: ActivatedRoute,
		private plangService: PlangService
	) {
		const langId: string = this.route.snapshot.params["id"];
		this.plangService.getDataById(+langId).then((val) => {
			this.lang = val;
			for (let i of this.lang?.keyFeatures!) {
				console.log(i);
			}
		});
	}
}
