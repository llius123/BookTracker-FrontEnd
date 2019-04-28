import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginService } from "./login.service";
import { BookService } from "./book.service";

@NgModule({
	providers: [
        LoginService, 
        BookService
    ]
})
export class ServicesModule {}
