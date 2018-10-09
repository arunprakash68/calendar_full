import {Component} from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss', '../app.component.scss']
})
export class YearComponent {
  date = new Date();
  Months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  d = new Date();

  // Для полученной даты построить календарь
  create_calendar(d: Date) {
    this.d = this.date;
  }

  // Следующий день
  incr_mnt() {
    const m = new Date(this.d.getFullYear() + 1, this.d.getMonth(), this.d.getDate());
    this.d = m;
  }

  // Предыдущий день
  decr_mnt() {
    const m = new Date(this.d.getFullYear() - 1, this.d.getMonth(), this.d.getDate());
    this.d = m;
  }

}
