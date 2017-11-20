import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../models/User';
import { SlotService } from '../services/slot.service';
import { Slot } from '../models/Slot';

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddParticipantComponent implements OnInit {

	participantForm;

  	constructor(private fb: FormBuilder,
				public dialogRef: MatDialogRef<AddParticipantComponent>,
				@Inject(MAT_DIALOG_DATA) public data: any,
				private slotService: SlotService) { }

  	ngOnInit() {
	  	this.createForm();
  	}

  	createForm() {
		this.participantForm = this.fb.group({
			'participantName': ['', Validators.required],
			'participantEmail': ['', Validators.compose([Validators.required, Validators.email])],
			'participantPhone': ['', Validators.compose([Validators.required])],
			'participantNotes': ''
		});
	  }

	  getEmailErrorMessage() {
		return this.participantForm.controls.participantEmail.hasError('required') ? 'Please enter an email' :
				this.participantForm.controls.participantEmail.hasError('email') ? 'Not a valid email' : '';
	  }

  	submitForm(participantFormValues: any) {
		const newParticipant = new User();

		newParticipant.name = participantFormValues.participantName;
		newParticipant.email = participantFormValues.participantEmail;
		newParticipant.phone = participantFormValues.participantPhone;

		const uSlot = new Slot();
		uSlot._id = this.data.slotId;
		uSlot.participant = newParticipant;
		uSlot.notes = participantFormValues.participantNotes;

		this.slotService.updateSlot(this.data.eventId, this.data.activityId, this.data.slotId, uSlot)
			.subscribe((e) => {
				console.log('Slot updated to activity');
				console.log(e);
				this.dialogRef.close(uSlot);
			});
  	}
}
