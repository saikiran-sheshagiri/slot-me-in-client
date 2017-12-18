import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SlotService } from '../services/slot.service';
import { Slot } from '../models/Slot';
import { ActivityService } from '../services/activity.service';
import { Activity } from '../models/Activity';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {MatTableDataSource, MatDialog} from '@angular/material';
import { AddParticipantComponent } from '../add-participant/add-participant.component';
import { Event } from '../models/Event';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-slots',
  templateUrl: './event-slots.component.html',
  styleUrls: ['./event-slots.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class EventSlotsComponent implements OnInit {

	eventId;
	event: Event = new Event();

	displayedColumns = ['activityName', 'slots'];
	slotsSource = new MatTableDataSource();

	constructor(public dialog: MatDialog,
				private route: ActivatedRoute,
				private slotService: SlotService,
				private activityService: ActivityService,
				private eventService: EventService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.eventId = params['eventId'];
            if (this.eventId) {
				this.getActivities();

				// get event
				this.getEvent();
            }
        });
	}

	getEvent(): void {
		this.eventService.getEvent(this.eventId)
				.subscribe(e => this.event = e);
		}

	isAvailable(slot: Slot) {
		if (slot.participant) {
			return true;
		} else {
			return false;
		}
	}

	getActivities(): void {
		this.activityService.getActivities(this.eventId)
			.subscribe(activities => this.slotsSource.data = activities);
	}

	addParticipant(activityId, slotId, slot): void {
		const dialogRef = this.dialog.open(AddParticipantComponent, {
		  width: '450px',
		  data: {
			  eventId: this.eventId,
			  activityId: activityId,
			  slotId: slotId,
			  slot: slot
          },
		  disableClose: true
		});
		dialogRef.afterClosed().subscribe(newActivity => {
			if (newActivity) {
				this.getActivities();
				console.log('new participant added');
			} else {
				console.log('Cancel clicked');
			}
		});
    }
}
