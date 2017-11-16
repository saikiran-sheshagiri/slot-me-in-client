import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { IActivity, Activity } from '../models/Activity';
import { ISlot, Slot } from '../models/Slot';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddActivityDialogComponent } from '../add-activity-dialog/add-activity-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ActivitiesComponent implements OnInit, OnDestroy {
    displayedColumns = ['name', 'activityDate', 'duration', 'numberOfSlots'];

    ACTIVITIES_DATA: Activity[] = [];
    dataSource = new MatTableDataSource(this.ACTIVITIES_DATA);

    eventId;
    paramsSubscription;

    constructor(public dialog: MatDialog, private route: ActivatedRoute) {

    }

    ngOnInit() {
		this.paramsSubscription = this.route.params.subscribe(params => {
			this.eventId = params['eventId'];
		});
	}

	ngOnDestroy(): void {
		this.paramsSubscription.unsubscribe();
	}


    addActivity(): void {
		const dialogRef = this.dialog.open(AddActivityDialogComponent, {
		  width: '450px',
		  data: {
              eventId: this.eventId
          },
		  disableClose: true
		});
		dialogRef.afterClosed().subscribe(newActivity => {
			if (newActivity) {
				this.ACTIVITIES_DATA.push(newActivity);
			} else {
				console.log('Cancel clicked');
			}
		});
    }

}


// const ACTIVITIES_DATA: Activity[] = [
// 	{
// 		name: 'abc',
// 		activityDate: '2017-11-11T21:18:03.092Z',
// 		duration: 3,
// 		numberOfSlots: 3,
// 		slots: []
// 	},
// 	{
// 		name: 'abc',
// 		activityDate: '2017-11-11T21:18:03.092Z',
// 		duration: 3,
// 		numberOfSlots: 3,
// 		slots: []
// 	},
// 	{
// 		name: 'abc',
// 		activityDate: '2017-11-11T21:18:03.092Z',
// 		duration: 3,
// 		numberOfSlots: 3,
// 		slots: []
// 	},
// 	{
// 		name: 'abc',
// 		activityDate: '2017-11-11T21:18:03.092Z',
// 		duration: 3,
// 		numberOfSlots: 3,
// 		slots: []
// 	},
// 	{
// 		name: 'abc',
// 		activityDate: '2017-11-11T21:18:03.092Z',
// 		duration: 3,
// 		numberOfSlots: 3,
// 		slots: []
// 	},
// 	{
// 		name: 'abc',
// 		activityDate: '2017-11-11T21:18:03.092Z',
// 		duration: 3,
// 		numberOfSlots: 3,
// 		slots: []
// 	},
// 	{
// 		name: 'abc',
// 		activityDate: '2017-11-11T21:18:03.092Z',
// 		duration: 3,
// 		numberOfSlots: 3,
// 		slots: []
// 	},
// 	{
// 		name: 'abc',
// 		activityDate: '2017-11-11T21:18:03.092Z',
// 		duration: 3,
// 		numberOfSlots: 3,
// 		slots: []
// 	},
// 	{
// 		name: 'abc',
// 		activityDate: '2017-11-11T21:18:03.092Z',
// 		duration: 3,
// 		numberOfSlots: 3,
// 		slots: []
// 	},
// 	{
// 		name: 'abc',
// 		activityDate: '2017-11-11T21:18:03.092Z',
// 		duration: 3,
// 		numberOfSlots: 3,
// 		slots: []
// 	},
// 	{
// 		name: 'abc',
// 		activityDate: '2017-11-11T21:18:03.092Z',
// 		duration: 3,
// 		numberOfSlots: 3,
// 		slots: []
// 	},
// 	{
// 		name: 'abc',
// 		activityDate: '2017-11-11T21:18:03.092Z',
// 		duration: 3,
// 		numberOfSlots: 3,
// 		slots: []
// 	}
// ];
