import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { GoogleBooksInterface } from "../model/GoogleBook";
import { GoodReadsInterface } from "../model/GoodReadsInterface";

@Injectable()
export class BookService {
	constructor(private http: HttpClient) {}

	/**
	 * Busco en mi base de datos el libro
	 * @param libro string
	 */
	public search(libro: string): Observable<book> {
		return this.http.get<book>(`/api/search/${libro}`);
	}

	public searchApi(
		libro: string
	): Observable<{
		GoogleBooks: GoogleBooksInterface;
		GoodReadsBooks: GoodReadsInterface;
	}> {
		return this.http.get<{
			GoogleBooks: GoogleBooksInterface;
			GoodReadsBooks: GoodReadsInterface;
		}>(`/api/searchapi/${libro}`);
	}
}
