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

	/**
	 * Busco en la api de GoodReads el libro
	 * @param libro string
	 */
	public searchApiGoodReads(libro: string): Observable<GoodReadsInterface> {
		return this.http.get<GoodReadsInterface>(`/api/searchapigood/${libro}`);
	}

	/**
	 * Busco en la api de GoogleBooks el libro
	 * @param libro string
	 */
	public searchApiGoogleBooks(libro: string): Observable<GoogleBooksInterface> {
		return this.http.get<GoogleBooksInterface>(`/api/searchapigoogle/${libro}`);
	}
}
