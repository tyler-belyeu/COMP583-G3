import { CommonModule } from "@angular/common";
import { SignupComponent } from "./signup.component";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
      path: '',
      component: SignupComponent
    }
    ]
    
    @NgModule({
      declarations: [
        SignupComponent
      ],
      imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSnackBarModule
      ]
    })
    export class SignupModule { }
    