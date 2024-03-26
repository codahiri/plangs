import { Component, Input } from "@angular/core";
import { IWord } from "../iword";

@Component({
	selector: "app-word",
	templateUrl: "./word.component.html",
	styleUrl: "./word.component.less",
})
export class WordComponent {
	@Input()
	word!: IWord;
	constructor() {}
}
