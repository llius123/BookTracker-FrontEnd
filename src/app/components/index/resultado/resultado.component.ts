import { GoogleBooksInterface } from "./../../../model/GoogleBook";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap, Params } from "@angular/router";
import { BookService } from "src/app/services/book.service";
import { GoodReadsInterface } from "src/app/model/GoodReadsInterface";

@Component({
	selector: "app-resultado",
	templateUrl: "./resultado.component.html",
	styleUrls: ["./resultado.component.scss"]
})
export class ResultadoComponent implements OnInit {
	constructor(private activatedRoute: ActivatedRoute, private bookService: BookService) {}

	private libroNombre: string;
	public libro: book;
	public googleBooks: GoogleBooksInterface;
	public goodReads: GoodReadsInterface;

	ngOnInit() {
		this.activatedRoute.params.subscribe((libro: JSON) => {
			this.libroNombre = libro["libro"];
			this.buscarDB(this.libroNombre);
		});
	}

	/**
	 *Buscar en mi bd el libro con ese id
	 * @param libro string
	 */
	private buscarDB(libro: string) {
		this.bookService.search(libro).subscribe(resp => {this.libro = resp});
	}

	/**
	 * Buscar en las apis externas el libro
	 */
	public buscarApiExternas() {
		this.bookService.searchApiGoodReads(this.libroNombre).subscribe(resp => {
			this.goodReads = resp;
		});
		this.bookService.searchApiGoogleBooks(this.libroNombre).subscribe(resp => {
			this.googleBooks = resp;
		});
	}
}
