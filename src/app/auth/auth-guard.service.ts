import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanLoad } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../services/login.service";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private _router: Router, private loginService: LoginService) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.loginService.auth());
		if (this.loginService.auth()) {
			return true;
		}
		this._router.navigate(["login"]);
		return false;
	}
}
