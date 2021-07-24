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

  // Suggestion form
  suggestClicked: boolean = true;
  lunchChecked: boolean = false;
  noteCount: number = 1;

  mondayOpen: boolean = true;
  tuesdayOpen: boolean = true;
  wednesdayOpen: boolean = true;
  thursdayOpen: boolean = true;
  fridayOpen: boolean = true;
  saturdayOpen: boolean = true;
  sundayOpen: boolean = true;

  // opens the suggestion tab
  suggestOpen(): void {
    this.suggestClicked = true;
  }

  // resets suggestion form variables to original values
  resetSuggestionForm(): void {
    const plus = <HTMLInputElement>document.getElementById('plus-button');
    const minus = <HTMLInputElement>document.getElementById('minus-button');

    if (minus) {
      plus.style.margin = '80px 0 0 0';
      minus.style.margin = '84px 0 0 -24px';
      this.noteCount = 1;
    }
    this.mondayOpen = true;
    this.tuesdayOpen = true;
    this.wednesdayOpen = true;
    this.thursdayOpen = true;
    this.fridayOpen = true;
    this.saturdayOpen = true;
    this.sundayOpen = true;
    this.lunchChecked = false;
  }

  // closes the suggestion tab
  suggestClose(): void {
    this.resetSuggestionForm();
    this.suggestClicked = false;
  }

  // closes a single day in schedule
  closeDay(day: string): void {
    if (day === 'monday') {
      this.mondayOpen = false;
    } else if (day === 'tuesday') {
      this.tuesdayOpen = false;
    } else if (day === 'wednesday') {
      this.wednesdayOpen = false;
    } else if (day === 'thursday') {
      this.thursdayOpen = false;
    } else if (day === 'friday') {
      this.fridayOpen = false;
    } else if (day === 'saturday') {
      this.saturdayOpen = false;
    } else if (day === 'sunday') {
      this.sundayOpen = false;
    }
  }

  openDay(day: string): void {
    if (day === 'monday') {
      this.mondayOpen = true;
    } else if (day === 'tuesday') {
      this.tuesdayOpen = true;
    } else if (day === 'wednesday') {
      this.wednesdayOpen = true;
    } else if (day === 'thursday') {
      this.thursdayOpen = true;
    } else if (day === 'friday') {
      this.fridayOpen = true;
    } else if (day === 'saturday') {
      this.saturdayOpen = true;
    } else if (day === 'sunday') {
      this.sundayOpen = true;
    }
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
    newTextarea.classList.add('note-input');
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
    const nameInput = <HTMLInputElement>document.getElementById('name-input');
    const dispInput = <HTMLInputElement>document.getElementById('disp-input');
    const callsInput = <HTMLInputElement>document.getElementById('calls-input');
    const siteInput = <HTMLInputElement>document.getElementById('site-input');
    const addressInput = <HTMLInputElement>(
      document.getElementById('address-input')
    );
    const contactsInput = <HTMLInputElement>(
      document.getElementById('contacts-input')
    );

    const newName = nameInput.value;
    const newAddress = addressInput.value;
    const newSite = siteInput.value;
    const newContacts = Number(contactsInput.value);
    const newDisp = dispInput.checked;
    const newCalls = callsInput.checked;

    const notesInputs = <HTMLCollectionOf<HTMLInputElement>>(
      document.getElementsByClassName('note-input')
    );

    let newNotes = [];
    for (let i = 0; i < notesInputs.length; i++) {
      newNotes.push(notesInputs[i].value);
    }

    const scOpen1 = <HTMLCollectionOf<HTMLInputElement>>(
      document.getElementsByClassName('sc-input-open')
    );
    const scClose1 = <HTMLCollectionOf<HTMLInputElement>>(
      document.getElementsByClassName('sc-input-close')
    );
    let newSchedule;

    if (
      scOpen1[0].value !== '' &&
      scClose1[0].value !== '' &&
      this.lunchChecked == false
    ) {
      newSchedule = {
        mon: [
          scOpen1[0].value === 'Encerrado'
            ? 'Encerrado'
            : scOpen1[0].value + ' --> ' + scClose1[0].value,
        ],
        tue: [
          scOpen1[1].value === 'Encerrado'
            ? 'Encerrado'
            : scOpen1[1].value + ' --> ' + scClose1[1].value,
        ],
        wed: [
          scOpen1[2].value === 'Encerrado'
            ? 'Encerrado'
            : scOpen1[2].value + ' --> ' + scClose1[2].value,
        ],
        thu: [
          scOpen1[3].value === 'Encerrado'
            ? 'Encerrado'
            : scOpen1[3].value + ' --> ' + scClose1[3].value,
        ],
        fri: [
          scOpen1[4].value === 'Encerrado'
            ? 'Encerrado'
            : scOpen1[4].value + ' --> ' + scClose1[4].value,
        ],
        sat: [
          scOpen1[5].value === 'Encerrado'
            ? 'Encerrado'
            : scOpen1[5].value + ' --> ' + scClose1[5].value,
        ],
        sun: [
          scOpen1[6].value === 'Encerrado'
            ? 'Encerrado'
            : scOpen1[6].value + ' --> ' + scClose1[6].value,
        ],
      };
    } else if (
      scOpen1[0].value !== '' &&
      scClose1[0].value !== '' &&
      this.lunchChecked == true
    ) {
      const scOpen2 = <HTMLCollectionOf<HTMLInputElement>>(
        document.getElementsByClassName('sc-input-open2')
      );
      const scClose2 = <HTMLCollectionOf<HTMLInputElement>>(
        document.getElementsByClassName('sc-input-close2')
      );
      newSchedule = {
        mon: [
          scOpen1[0].value === 'Encerrado'
            ? 'Encerrado'
            : (scOpen1[0].value + ' --> ' + scClose1[0].value,
              scOpen2[0].value + ' --> ' + scClose2[0].value),
        ],
        tue: [
          scOpen1[1].value === 'Encerrado'
            ? 'Encerrado'
            : (scOpen1[1].value + ' --> ' + scClose1[1].value,
              scOpen2[1].value + ' --> ' + scClose2[1].value),
        ],
        wed: [
          scOpen1[2].value === 'Encerrado'
            ? 'Encerrado'
            : (scOpen1[2].value + ' --> ' + scClose1[2].value,
              scOpen2[2].value + ' --> ' + scClose2[2].value),
        ],
        thu: [
          scOpen1[3].value === 'Encerrado'
            ? 'Encerrado'
            : (scOpen1[3].value + ' --> ' + scClose1[3].value,
              scOpen2[3].value + ' --> ' + scClose2[3].value),
        ],
        fri: [
          scOpen1[4].value === 'Encerrado'
            ? 'Encerrado'
            : (scOpen1[4].value + ' --> ' + scClose1[4].value,
              scOpen2[4].value + ' --> ' + scClose2[4].value),
        ],
        sat: [
          scOpen1[5].value === 'Encerrado'
            ? 'Encerrado'
            : (scOpen1[5].value + ' --> ' + scClose1[5].value,
              scOpen2[5].value + ' --> ' + scClose2[5].value),
        ],
        sun: [
          scOpen1[6].value === 'Encerrado'
            ? 'Encerrado'
            : (scOpen1[6].value + ' --> ' + scClose1[6].value,
              scOpen2[6].value + ' --> ' + scClose2[6].value),
        ],
      };
    } else {
      newSchedule = null;
    }

    const newLocation: ILocation = {
      name: newName,
      disp: newDisp,
      calls: newCalls,
      schedule: newSchedule,
      address: newAddress,
      site: newSite,
      contacts: newContacts,
      notes: newNotes,
    };

    // this.locationService
    //   .addLocation(newLocation)
    //   .subscribe((location) => this.locations.push(location));

    this.suggestClose();
  }
}
