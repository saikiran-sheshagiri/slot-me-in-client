import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { Event } from '../models/Event';

@Component({
  selector: 'app-publish-event',
  templateUrl: './publish-event.component.html',
  styleUrls: ['./publish-event.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PublishEventComponent implements OnInit {

	paramsSubscription;
	eventId;
	event: Event = new Event();
	slotsUrl;
	activitiesUrl;

  constructor(private route: ActivatedRoute,
				private router: Router,
				private eventService: EventService) { }

  ngOnInit() {
	this.paramsSubscription = this.route.params.subscribe(params => {
		this.eventId = params['eventId'];

		// get event
		this.getEvent();

	});
  }

  getEvent(): void {
	this.eventService.getEvent(this.eventId)
			.subscribe(e => this.event = e);
	}

	goToSlots(): void {
		this.router.navigate(['slots', this.eventId]);
	}

	goToActivities(): void {
		this.router.navigate(['activities', this.eventId]);
	}
}
