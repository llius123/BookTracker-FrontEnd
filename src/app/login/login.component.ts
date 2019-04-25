import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { LoginService } from "../services/login.service";
import { Router } from '@angular/router';

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
	constructor(private loginService: LoginService, private cookieService: CookieService, private router: Router) {}

	ngOnInit() {}

	public login(username: string, password: string): void {
		this.loginService.login(username, password).subscribe(resp => {
			this.loginService.cookie = this.cookieService.get("token");
			this.router.navigate(['index'])
		});
	}
}
