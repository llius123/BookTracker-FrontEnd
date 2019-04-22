import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/services/login.service";
import { CookieService } from "ngx-cookie-service";
import * as jwt_decode from "jwt-decode";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
	constructor(private loginService: LoginService, private cookieService: CookieService) {}

	ngOnInit() {}

	public login(username: string, password: string): void {
		this.loginService.login(username, password).subscribe(resp => {
      const cookie = this.cookieService.get("token");
      console.log(jwt_decode(cookie))
		});
	}
}
