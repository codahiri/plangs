import { Component } from "@angular/core";
import { IWord } from "./word/word.component";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.less",
})
export class AppComponent {
	readonly baseUrl =
		"https://yoobi.com/cdn/shop/products/3pkSpiralNotebook-Multicolor5copy_1800x1800.jpg";

	words: IWord[] = [
		{
			id: 1,
			word: "book",
			translation: "kitob",
			example: "I'm reading an interesting book",
			img: `${this.baseUrl}`,
		},
		{
			id: 1,
			word: "pen",
			translation: "ruchka",
			example: "I bought new pen",
			img: `${this.baseUrl}`,
		},
		{
			id: 1,
			word: "notebook",
			translation: "daftar",
			example: "I'm writing on the notebook",
			img: `${this.baseUrl}`,
		},
		{
			id: 1,
			word: "laptop",
			translation: "notebook",
			example: "I cell old laptop yesterday",
			img: `${this.baseUrl}`,
		},
		{
			id: 1,
			word: "PC",
			translation: "shaxsiy kompyuter",
			example: "I'm playing GTA VI in my PC",
			img: `${this.baseUrl}`,
		},
	];
}
