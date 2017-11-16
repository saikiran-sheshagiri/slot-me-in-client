import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { EventService } from '../services/event.service';
import { Event } from '../models/Event';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateEventComponent implements OnInit {

	createEventForm: FormGroup;

  constructor(
    private location: Location,
	private fb: FormBuilder,
	private eventService: EventService,
	private router: Router
	) {
    this.createForm();
  }

  createForm() {
    this.createEventForm = this.fb.group({
      'eventName': ['', Validators.required],
      'organizerName': ['', Validators.required],
      'organizerEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'organizerPhone': ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
  }

  getEmailErrorMessage() {
    return this.createEventForm.controls.organizerEmail.hasError('required') ? 'Please enter an email' :
            this.createEventForm.controls.organizerEmail.hasError('email') ? 'Not a valid email' : '';
  }

  submitForm(value: any): void {
	const event = new Event();
	event.name = value.eventName;
	event.organizer = {
		name: value.organizerName,
		email: value.organizerEmail,
		phone: value.organizerPhone
	};

	this.eventService.saveEvent(event).subscribe((e) => {
		console.log('CreateEventComponent: ');
		console.log(e);
		this.router.navigate(['activities', e._id]);
	});
  }

  goBack(): void {
	  this.location.back();
  }

}
