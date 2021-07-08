import { Component } from "@angular/core";

@Component({
    selector: 'locations',
    templateUrl: './locations-list.component.html',
    styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent {
    locations: any[] = [
        {
        name: "Caleidoscópio",
        disp: "sim",
        calls: "nao",
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
        disp: "sim",
        calls: "nao",
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
        disp: "sim",
        calls: "nao",
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
        disp: "nao",
        calls: "nao",
        info: [
          {
            schedule: "-",
            address: "-",
            site: "-",
          },
        ],
      }]
}