import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  createEvent(): void {
	this.route.navigateByUrl('/create');
  }

  activities(id: String): void {
	  this.route.navigate(['activities', id]);
  }

  slots(id: String): void {
	this.route.navigate(['slots', id]);
  }
}
