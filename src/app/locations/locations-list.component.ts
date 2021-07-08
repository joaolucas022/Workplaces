import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { ILocation } from "./location";
import { LocationService } from "./locations.service";

// Component Decorator
@Component({
    selector: 'locations',  // directive
    templateUrl: './locations-list.component.html',
    styleUrls: ['./locations-list.component.css']
})
// Class
export class LocationsListComponent implements OnInit {
    locations: ILocation[] = [];

    // dependency injection
    constructor(private locationService: LocationService) {}

    // OnInit lifecycle hook
    ngOnInit(): void {
        this.locations = this.locationService.getLocations();
    }
}