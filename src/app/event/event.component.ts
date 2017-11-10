import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
	selector: 'app-event',
	templateUrl: './event.component.html',
	styleUrls: ['./event.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class EventComponent implements OnInit {

	@Input() emailFormControl = new FormControl('', [
		Validators.required,
		Validators.email,
	]);

	constructor() { }

	ngOnInit() { }

}
