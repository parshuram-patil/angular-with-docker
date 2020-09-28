import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    { path: "", redirectTo: "/registration", pathMatch: "full" },
    { path: 'registration', component: RegistrationComponent },
    { path: 'profile', component: ProfileComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
        HttpClientModule,],
    exports: [RouterModule]
})

export class AppRoutingModule { }
