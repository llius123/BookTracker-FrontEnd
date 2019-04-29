import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { GoogleBooksInterface } from "src/app/model/GoogleBook";

@Component({
	selector: "app-googlebooks",
	templateUrl: "./googlebooks.component.html",
	styleUrls: ["./googlebooks.component.scss"]
})
export class GooglebooksComponent implements OnInit {
	constructor() {}
	@Input() googleBooks: GoogleBooksInterface;
	ngOnInit() {}
}
