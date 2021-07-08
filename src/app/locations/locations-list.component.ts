import { Component } from "@angular/core";
import { ILocation } from "./location";

@Component({
    selector: 'locations',
    templateUrl: './locations-list.component.html',
    styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent {
    locations: ILocation[] = [
        {
        name: "Caleidoscópio",
        disp: true,
        calls: false,
        info: [
          {
            schedule: "-",
            address: "-",
            site: "-",
          },
        ],
      },
      {
        name: "Biblioteca Galveias",
        disp: true,
        calls: false,
        info: [
          {
            schedule: "-",
            address: "-",
            site: "-",
          },
        ],
      },
      {
        name: "Biblioteca Coruchéus",
        disp: true,
        calls: false,
        info: [
          {
            schedule: "-",
            address: "-",
            site: "-",
          },
        ],
      },
      {
        name: "Biblioteca Nacional",
        disp: false,
        calls: false,
        info: [
          {
            schedule: "-",
            address: "-",
            site: "-",
          },
        ],
      }]
}