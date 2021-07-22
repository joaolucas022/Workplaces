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
  infoClicked: boolean = false;
  clickedIndex!: number;
  suggestClicked: boolean = true;
  lunchChecked: boolean = false;

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

  // opens the info tab and gathers the index of the clicked item,
  // if the tab is already open, switches the information to the clicked item's
  infoOpen(index: number): void {
    if (this.infoClicked) {
      this.clickedIndex = index;
    } else {
      this.clickedIndex = index;
      this.infoClicked = true;
    }
  }

  // closes the additional information tab
  infoClose(): void {
    this.infoClicked = false;
  }

  // opens the suggestion tab
  suggestOpen(): void {
    this.suggestClicked = true;
  }

  // closes the suggestion tab
  suggestClose(): void {
    this.suggestClicked = false;
  }

  onLunchCheck(): void {
    this.lunchChecked = !this.lunchChecked;
  }
}
