import { Component, Input } from "@angular/core";

export interface IWord {
	id: number;
	word: string;
	translation: string;
	example: string;
	img: string;
}

@Component({
	selector: "app-word",
	templateUrl: "./word.component.html",
	styleUrl: "./word.component.less",
})
export class WordComponent {
	@Input()
	words!: IWord[];
}
