import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';


const routes: Routes = [
	{path: '', component: HomeComponent },
	{ path: 'event', component: EventComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})



export class AppRoutingModule {
}

