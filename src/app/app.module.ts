import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatButtonModule, MatCardModule,
	MatFormFieldModule, MatInputModule, MatExpansionModule, MatTableModule, MatDialogModule,
	MatDatepickerModule, MatSelectModule, MatNativeDateModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventSlotsComponent } from './event-slots/event-slots.component';
import { ActivitiesComponent } from './activities/activities.component';
import { EventService } from './services/event.service';
import { AddActivityDialogComponent } from './add-activity-dialog/add-activity-dialog.component';
import { ActivityService } from './services/activity.service';

@NgModule({
				declarations: [
								AppComponent, HomeComponent, CreateEventComponent, EventSlotsComponent, ActivitiesComponent, AddActivityDialogComponent
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
								MatInputModule,
								HttpClientModule,
								MatExpansionModule,
								MatTableModule,
								MatDialogModule,
								MatDatepickerModule,
								MatSelectModule,
								MatNativeDateModule
				],
				providers: [ EventService, ActivityService ],
				bootstrap: [AppComponent],
				entryComponents: [AddActivityDialogComponent]
})
export class AppModule {}
