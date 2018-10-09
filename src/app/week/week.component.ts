import {Component} from '@angular/core';

const time = [];
for (let i = 0; i < 383; i++) {
  if (i % 8 === 0 && i < 384) {
    if (Math.floor(i / 8) % 4 === 0 || Math.floor(i / 8) % 4 === 2) {
      time.push(Math.floor(i / 16) + ' : 00');
    } else {
      time.push(Math.floor(i / 16) + ' : 30');
    }
  } else {
    time.push(' ');
  }
}
let tday = false;
const mt = new Date();
if (mt) {
  tday = true;
}
const Days = [];
Days.push(' ');
let cnter = 0;
// Получаем первый день
const Dt = new Date(mt.getFullYear(), mt.getMonth(), 0);
const Days_in_month = 32 - new Date(mt.getFullYear(), mt.getMonth(), 32).getDate(); // число дней в месяце
if (cnter < mt.getDay()) {
  for (let i = 1; i <= Dt.getDay(); i++) {
    this.days.push(' ');
  }
}
for (let i = 0; i < 8; i++) {
  if (Days.length < 8 && cnter < Days_in_month) {
    cnter++;
    Days.push(cnter);
  }
}

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss', '../app.component.scss']
})
export class WeekComponent {
  Week = [' ', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  tm = time;

  days_in_month = 0;
  now = new Date();
  mnt = new Date();
  Months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  days = Days;


  // Для полученной даты построить календарь
  create_calendar(d: Date, n: number) {
    this.mnt = this.now;
    this.days = [];
    this.days.push(' ');
    let counter = n;
    // Получаем первый день
    const dt = new Date(d.getFullYear(), d.getMonth(), n);
    this.days_in_month = 32 - new Date(d.getFullYear(), d.getMonth(), 32).getDate(); // число дней в месяце
    if (counter < this.mnt.getDay()) {
      for (let i = 1; i <= dt.getDay(); i++) {
        this.days.push(' ');
      }
    }
    for (let i = 0; i < 8; i++) {
      if (this.days.length < 8 && counter < this.days_in_month) {
        counter++;
        this.days.push(counter);
      }
    }
  }

  // Следующий месяц
  incr_mnt() {
    let m: Date = new Date();
    let n = this.days[this.days.length - 1];
    if (n === this.days_in_month) {
      m = new Date(this.mnt.getFullYear(), this.mnt.getMonth() + 1);
      n = 0;
    } else {
      m = new Date(this.mnt.getFullYear(), this.mnt.getMonth(), n);
    }
    this.create_calendar(m, n);
    this.mnt = m;

  }

  // Предыдущий месяц
  decr_mnt() {

    let m: Date = new Date();
    let n = this.days[1] - 7;
    console.log(this.days[1]);
    if (n < 0) {
      this.days_in_month = 32 - new Date(this.mnt.getFullYear(), this.mnt.getMonth() - 1, 32).getDate();
      m = new Date(this.mnt.getFullYear(), this.mnt.getMonth() - 1, this.days_in_month);
      n = this.days_in_month - 7;
      this.create_calendar(m, n);
    } else {
      m = new Date(this.mnt.getFullYear(), this.mnt.getMonth(), n);
      this.create_calendar(m, n - 1);
    }

    this.mnt = m;
  }


}
