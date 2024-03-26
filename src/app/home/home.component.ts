import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { WordService } from "../word.service";
import { IWord } from "../iword";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.less",
})
export class HomeComponent {
	filteredWords!: IWord[];

	constructor(private wordService: WordService, private router: Router) {
		this.filteredWords = this.wordService.getAllWords();
	}
	search(value: string) {
		this.filteredWords = this.wordService
			.getAllWords()
			.filter((word) => word.word.toLowerCase().includes(value.toLowerCase()));
	}
}
