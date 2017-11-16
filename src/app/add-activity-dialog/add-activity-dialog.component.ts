import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Activity } from '../models/Activity';
import { ActivityService } from '../services/activity.service';


@Component({
  selector: 'app-add-activity-dialog',
  templateUrl: './add-activity-dialog.component.html',
  styleUrls: ['./add-activity-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddActivityDialogComponent implements OnInit {


	activityForm: FormGroup;
	hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	minutes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
				11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
				21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
				31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
				41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
				51, 52, 53, 54, 55, 56, 57, 58, 59];

	meridiems = ['AM', 'PM'];
	slots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	possibleDurationHours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	eventId;
	paramsSubscription;

  constructor(private fb: FormBuilder,
				public dialogRef: MatDialogRef<AddActivityDialogComponent>,
				private activityService: ActivityService,
				@Inject(MAT_DIALOG_DATA) public data: any) {
    this.createActivityForm();
  }

  ngOnInit() {
  }

  createActivityForm() {
    this.activityForm = this.fb.group({
      'activityName': ['', Validators.required],
	  'activityDate': ['', Validators.required],
	  'activityHour': [12, Validators.required],
	  'activityMinutes': [0, Validators.required],
	  'activityMeridiem': ['AM', Validators.required],
      'activityDuration': [1, Validators.required],
      'activitySlots': [1, Validators.required]
    });
  }

  submitForm(activityFormValues: any) {
	const newActivity = new Activity();

	newActivity.name = activityFormValues.activityName;

	/** prepare date of activity from the form */
	const sYear = activityFormValues.activityDate.getFullYear(),
		sMonth = activityFormValues.activityDate.getMonth(),
		sDate = activityFormValues.activityDate.getDate(),
		sHour = (activityFormValues.activityMeridiem === 'AM') ? activityFormValues.activityHour : 2 * activityFormValues.activityHour,
		sMinutes = activityFormValues.activityMinutes;


	newActivity.activityDate = new Date(sYear, sMonth, sDate, sHour, sMinutes, 0, 0).toISOString();
	newActivity.duration = activityFormValues.activityDuration;
	newActivity.numberOfSlots = activityFormValues.activitySlots;


	this.activityService.saveActivity(newActivity, this.data.eventId).subscribe((e) => {
		console.log('Activity added to event');
		console.log(e);
		this.dialogRef.close(newActivity);
	});
  }
}
