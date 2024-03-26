import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WordService } from "../word.service";
import { IWord } from "../iword";

@Component({
	selector: "app-details",
	templateUrl: "./details.component.html",
	styleUrl: "./details.component.less",
})
export class DetailsComponent {
	word?: IWord;

	constructor(private route: ActivatedRoute, private wordService: WordService) {
		const wordId: string = this.route.snapshot.params["id"];
		this.word = this.wordService.getWordById(+wordId);
	}
}
