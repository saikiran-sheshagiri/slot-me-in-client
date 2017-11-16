import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Activity } from '../models/Activity';

@Component({
  selector: 'app-add-activity-dialog',
  templateUrl: './add-activity-dialog.component.html',
  styleUrls: ['./add-activity-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddActivityDialogComponent implements OnInit {


	activityForm: FormGroup;
	hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	minutes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
				11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
				21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
				31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
				41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
				51, 52, 53, 54, 55, 56, 57, 58, 59];

	meridiems = ['AM', 'PM'];

	selectedHour = 12;
	selectedMinutes = 59;
	selectedMeridiem = 'AM';

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddActivityDialogComponent>) {
    this.createActivityForm();
  }

  ngOnInit() {
  }

  createActivityForm() {
    this.activityForm = this.fb.group({
      'activityName': '',
      'activityDate': '',
      'activityDuration': '',
      'activitySlots': ''
    });
  }

  submitForm(activityFormValues: any) {
	console.log(activityFormValues);
	const newActivity = new Activity();

	newActivity.name = activityFormValues.activityName;
	newActivity.activityDate = activityFormValues.activityDate;
	newActivity.duration = activityFormValues.activityDuration;
	newActivity.numberOfSlots = activityFormValues.activitySlots;

	this.dialogRef.close(newActivity);
  }
}
