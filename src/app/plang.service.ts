import { Injectable } from "@angular/core";
import { IPlang } from "./plang";

@Injectable({
	providedIn: "root",
})
export class PlangService {
	url: string = "http://localhost:3000/langs";

	constructor() {}

	async getAllData(): Promise<IPlang[]> {
		const data = await fetch(this.url);
		return (await data.json()) ?? [];
	}
}
