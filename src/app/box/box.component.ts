import { Component, Input } from "@angular/core";
import { IPlang } from "../plang";

@Component({
	selector: "app-box",
	templateUrl: "./box.component.html",
	styleUrl: "./box.component.less",
})
export class BoxComponent {
	@Input() lang!: IPlang;
}
