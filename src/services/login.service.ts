import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class LoginService {
	constructor(private cookieService: CookieService, private http: HttpClient) {}

	public login() {
		this.http.get("/test", environment.header).subscribe(resp => console.log(resp));
	}
}
