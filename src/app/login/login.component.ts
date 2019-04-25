import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
	constructor(private loginService: LoginService, private cookieService: CookieService, private router: Router) {}

	ngOnInit() {
		this.checkCookie();
	}

	/**
	 * Compruebo si hay una cookie en el navegador y redirijo a index si encuentro
	 */
	public checkCookie() {
		if (this.loginService.auth()) this.router.navigate(["index"]);
	}

	/**
	 * Login normal y corriente
	 * @param username string
	 * @param password string
	 */
	public login(username: string, password: string): void {
		this.loginService.login(username, password).subscribe(resp => {
			this.loginService.cookie = this.cookieService.get("token");
			this.router.navigate(["index"]);
		});
	}
}
