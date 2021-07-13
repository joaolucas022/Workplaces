import { OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ILocation } from './location';
import { LocationService } from './locations.service';

// Component Decorator
@Component({
  selector: 'locations', // directive
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css'],
})
// Class
export class LocationsListComponent implements OnInit, OnDestroy {
  locations: ILocation[] = [];
  errorMessage: string = '';
  sub!: Subscription;
  infoClicked: boolean = true;
  clickedIndex: number = 0;

  // dependency injection
  constructor(private locationService: LocationService) {}

  // OnInit lifecycle hook
  ngOnInit(): void {
    // subscribe to the returned observable
    this.sub = this.locationService.getLocations().subscribe({
      next: (locs) => (this.locations = locs),
      error: (err) => (this.errorMessage = err),
    });
  }

  // OnDestroy lifecycle hook
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  // dispIcon(index: number, value: boolean): void {
  //   if (value) {
  //     document
  //       .getElementsByClassName('d-icon')
  //       [index].classList.add('fa fa-check-circle');
  //   } else {
  //     document
  //       .getElementsByClassName('d-icon')
  //       [index].classList.add('fa fa-times-circle');
  //   }
  // }

  infoOpen(index: number): void {
    if (this.infoClicked) {
      this.clickedIndex = index;
    } else {
      this.clickedIndex = index;
      this.infoClicked = true;
    }
  }

  infoClose(): void {
    this.infoClicked = false;
  }
}
//<i class="fa fa-check-circle"></i>
//<i class="fa fa-times-circle"></i>
