import { Component, OnInit, Input } from "@angular/core";
import { GoodReadsInterface } from "src/app/model/GoodReadsInterface";

@Component({
	selector: "app-goodreads",
	templateUrl: "./goodreads.component.html",
	styleUrls: ["./goodreads.component.scss"]
})
export class GoodreadsComponent implements OnInit {
	constructor() {}
	@Input() goodReads: GoodReadsInterface;

	ngOnInit() {}
}
