import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';

@NgModule({
    providers: [
        LoginService
    ],
})
export class ServicesModule {}