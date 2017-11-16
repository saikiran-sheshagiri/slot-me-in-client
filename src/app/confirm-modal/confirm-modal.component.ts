import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConfirmModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmModalComponent>) { }

  ngOnInit() {
  }

  confirm() {
	this.dialogRef.close(true);
  }
}
