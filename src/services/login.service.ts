import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
	constructor(private cookieService: CookieService, private http: HttpClient) {}

	public login(username: string, password:string): Observable<user> {
		return this.http.get<user>(`/login/${username}/${password}`);
	}
}
