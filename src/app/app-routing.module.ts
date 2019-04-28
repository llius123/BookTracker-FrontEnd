import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { IndexComponent } from "./components/index/index.component";
import { AuthGuard } from "./auth/auth-guard.service";
import { ResultadoComponent } from './components/index/resultado/resultado.component';

const routes: Routes = [
	{
		path: "login",
		component: LoginComponent
	},
	{
		path: "index",
		component: IndexComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: ":libro",
				component: ResultadoComponent,
				canActivate: [AuthGuard]
			}
		]
	},
	{ path: "", redirectTo: "login", pathMatch: "full" },
	{ path: "**", component: LoginComponent }
];

@NgModule({
	providers: [AuthGuard],
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
