import { Injectable } from "@angular/core";
import { IWord } from "./iword";

@Injectable()
export class WordService {
	private baseUrl =
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
			id: 2,
			word: "pen",
			translation: "ruchka",
			example: "I bought new pen",
			img: `${this.baseUrl}`,
		},
		{
			id: 3,
			word: "notebook",
			translation: "daftar",
			example: "I'm writing on the notebook",
			img: `${this.baseUrl}`,
		},
		{
			id: 4,
			word: "laptop",
			translation: "notebook",
			example: "I cell old laptop yesterday",
			img: `${this.baseUrl}`,
		},
		{
			id: 5,
			word: "PC",
			translation: "shaxsiy kompyuter",
			example: "I'm playing GTA VI in my PC",
			img: `${this.baseUrl}`,
		},
		{
			id: 6,
			word: "PC",
			translation: "shaxsiy kompyuter",
			example: "I'm playing GTA VI in my PC",
			img: `${this.baseUrl}`,
		},
		{
			id: 7,
			word: "PC",
			translation: "shaxsiy kompyuter",
			example: "I'm playing GTA VI in my PC",
			img: `${this.baseUrl}`,
		},
		{
			id: 8,
			word: "PC",
			translation: "shaxsiy kompyuter",
			example: "I'm playing GTA VI in my PC",
			img: `${this.baseUrl}`,
		},
	];

	getAllWords(): IWord[] {
		return this.words;
	}

	getWordById(id: number): IWord | undefined {
		return this.words.find((w) => w.id === id);
	}
}
