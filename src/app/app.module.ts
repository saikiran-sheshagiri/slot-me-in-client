import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {EventComponent} from './event/event.component';
import { HomeComponent } from './home/home.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventSlotsComponent } from './event-slots/event-slots.component';
import { ActivitiesComponent } from './activities/activities.component';

@NgModule({
				declarations: [
								AppComponent, EventComponent, HomeComponent, CreateEventComponent, EventSlotsComponent, ActivitiesComponent
				],
				imports: [
								BrowserModule,
								FormsModule,
								ReactiveFormsModule,
								BrowserAnimationsModule,
								MatToolbarModule,
								MatButtonModule,
								MatCardModule,
								AppRoutingModule,
								MatFormFieldModule,
								MatInputModule
				],
				providers: [],
				bootstrap: [AppComponent]
})
export class AppModule {}
