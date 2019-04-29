import { Component, OnInit, Input } from "@angular/core";
import { GoodReadsInterface } from "src/app/model/GoodReadsInterface";
import { GoogleBooksInterface } from "src/app/model/GoogleBook";

@Component({
	selector: "app-booktraker",
	templateUrl: "./booktraker.component.html",
	styleUrls: ["./booktraker.component.scss"]
})
export class BooktrakerComponent implements OnInit {
	constructor() {}

	@Input() libro: book;
	ngOnInit() {}
}
