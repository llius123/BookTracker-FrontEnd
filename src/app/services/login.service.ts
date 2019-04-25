import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import * as jwt_decode from "jwt-decode";
import { Observable } from "rxjs";

@Injectable()
export class LoginService {
	constructor(private cookieService: CookieService, private http: HttpClient) {}

	public cookie: string;
	/**
	 *
	 * @param username Nombre usuario
	 * @param password Contraseña
	 */
	public login(username: string, password: string): Observable<user> {
		return this.http.get<user>(`/api/login/${username}/${password}`);
	}

	/**
	 * Desencripto la cookie
	 */
	public auth(): user {
		if (!this.cookie) {
			return null;
		} else {
			const cookie: any = jwt_decode(this.cookie);
			return cookie.usuario;
		}
	}
}
