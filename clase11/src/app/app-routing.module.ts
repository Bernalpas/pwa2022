
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./paginas/about/about.component";
import { MainComponent } from "./paginas/main/main.component";


const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'main', component: MainComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'main'}
]


@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})

export class AppRoutingModule {

}