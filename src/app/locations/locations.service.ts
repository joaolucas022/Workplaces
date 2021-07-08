import { Injectable } from "@angular/core";
import { ILocation } from "./location";

// Service
@Injectable({
    providedIn: 'root',
})
export class LocationService {
    getLocations(): ILocation[] {
        return [{
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
          }
        ]
    }
}