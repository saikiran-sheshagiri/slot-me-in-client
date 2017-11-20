import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { ActivitiesComponent } from './activities/activities.component';
import { EventSlotsComponent } from './event-slots/event-slots.component';
import { PublishEventComponent } from './publish-event/publish-event.component';


const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'create', component: CreateEventComponent },
	{ path: 'activities/:eventId', component: ActivitiesComponent },
	{ path: 'slots/:eventId', component: EventSlotsComponent },
	{ path: 'publish/:eventId', component: PublishEventComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})



export class AppRoutingModule {
}

