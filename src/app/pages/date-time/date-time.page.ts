import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNacimiento = new Date('1981-12-01').toISOString();
  customPickerOptions: any;
  customDate;

  constructor() {
    console.log(this.fechaNacimiento);
  }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (event) => {
          console.log('Clicked Save!');
          console.log(event);
          this.customDate = new Date(event.year.value, event.month.value, event.day.value).toISOString();
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return true;
        }
      }]
    }
  }

  cambioFecha(event){
    console.log('Evento: ' + event);
    console.log('Date', new Date(event.detail.value) );
  }

}
