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
  suggestClicked: boolean = false;
  lunchChecked: boolean = false;
  noteCount: number = 1;

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

  // opens or closes extra schedule slot
  onLunchCheck(): void {
    this.lunchChecked = !this.lunchChecked;
  }

  // adds a new note
  addNote(): void {
    const plus = document.getElementById('plus-button');
    const minus = document.getElementById('minus-button');
    const newDiv = document.createElement('div');
    const newTextarea = document.createElement('textarea');
    const newLabel = document.createElement('label');

    this.noteCount++;
    newDiv.classList.add('col-3');
    newDiv.setAttribute('id', `note${this.noteCount}-div`);
    newTextarea.classList.add('form-control');
    newTextarea.setAttribute('id', `note${this.noteCount}-input`);
    newTextarea.setAttribute('rows', '3');
    newLabel.classList.add('form-label');
    newLabel.setAttribute('for', `note${this.noteCount}-input`);
    newLabel.innerHTML = `<small>Nota ${this.noteCount}</small>`;
    newDiv.appendChild(newLabel);
    newDiv.appendChild(newTextarea);

    if (plus && plus.parentNode) {
      plus.parentNode.insertBefore(newDiv, plus);

      // regulates the position of plus and minus buttons
      if (this.noteCount % 4 === 0 && minus) {
        plus.style.margin = '5px 0 0 12px';
        minus.style.margin = '5px 0 0 5px';
      } else if (this.noteCount % 4 !== 0 && minus) {
        plus.style.margin = '112px 0 0 0';
        minus.style.margin = '84px 0 0 -24px';
      } else {
        plus.style.margin = '112px 0 0 0';
      }
    }
  }

  // removes the last note
  removeNote(): void {
    const plus = <HTMLInputElement>document.getElementById('plus-button');
    const minus = document.getElementById('minus-button');
    const lastDiv = document.getElementById(`note${this.noteCount}-div`);
    if (lastDiv) {
      lastDiv.remove();
      this.noteCount--;

      // regulates the position of plus and minus buttons
      if (this.noteCount === 1) {
        plus.style.margin = '80px 0 0 0';
      } else if (this.noteCount % 4 === 0 && minus) {
        plus.style.margin = '5px 0 0 12px';
        minus.style.margin = '5px 0 0 5px';
      } else if (this.noteCount % 4 !== 0 && minus) {
        plus.style.margin = '112px 0 0 0';
        minus.style.margin = '84px 0 0 -24px';
      }
    }
  }

  submit(): void {
    const newName = <HTMLInputElement>document.getElementById('name-input');
    const newAddress = <HTMLInputElement>(
      document.getElementById('address-input')
    );
    const newContacts = <HTMLInputElement>(
      document.getElementById('contacts-input')
    );
    const newSite = <HTMLInputElement>document.getElementById('site-input');
    const newDisp = <HTMLInputElement>document.getElementById('disp-input');
    const newCalls = <HTMLInputElement>document.getElementById('calls-input');

    const newSchedule = <HTMLCollectionOf<HTMLInputElement>>(
      document.getElementsByClassName('sc-input')
    );

    console.log(newSchedule);
  }
}
