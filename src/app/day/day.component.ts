import {Component} from '@angular/core';

const Day = [];
let cnt = 0;
for (let i = 0; i < 96; i++) {
  if (i % 2 === 0) {
    cnt++;
    if (cnt % 2 === 0) {
      Day.push(Math.round(i / 4) + ' : 00');
    } else {
      Day.push(Math.round(i / 4) + ' : 30');
    }
  } else {
    Day.push('');
  }
}

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss', '../app.component.scss']
})
export class DayComponent {
  days = Day;
  now = new Date();
  Months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  counter = 0;
  d = new Date();

  // Для полученной даты построить календарь
  create_calendar() {
    this.d = this.now;
  }

  // Следующий день
  incr_mnt() {
    const m = new Date(this.d.getFullYear(), this.d.getMonth(), this.d.getDate() + 1);
    this.d = m;
  }

  // Предыдущий день
  decr_mnt() {
    const m = new Date(this.d.getFullYear(), this.d.getMonth(), this.d.getDate() - 1);
    this.d = m;
  }


}


