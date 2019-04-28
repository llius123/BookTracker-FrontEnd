import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap, Params } from "@angular/router";
import { BookService } from "src/app/services/book.service";

@Component({
	selector: "app-resultado",
	templateUrl: "./resultado.component.html",
	styleUrls: ["./resultado.component.scss"]
})
export class ResultadoComponent implements OnInit {
	constructor(private activatedRoute: ActivatedRoute, private bookService: BookService) {}

	private libro: string;
	ngOnInit() {
		this.activatedRoute.params.subscribe((libro: JSON) => {
			this.libro = libro["libro"];
			this.buscarDB(this.libro);
		});
	}

	/**
	 *Buscar en mi bd el libro con ese id
	 * @param libro string
	 */
	private buscarDB(libro: string) {
		this.bookService.search(libro).subscribe(resp => {});
	}

	/**
	 * Buscar en las apis externas el libro
	 */
	public buscarApiExternas() {
		this.bookService.searchApi(this.libro).subscribe(resp => {});
	}
}
