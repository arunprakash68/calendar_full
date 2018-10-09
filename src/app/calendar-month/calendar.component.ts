import {Component, OnInit} from '@angular/core';
import {Task} from './month-task/task';
import {TASK} from '../Tasks/Tasks-task';

const Days = [];
const nw = new Date();
let cnter = 0;
const Dt = new Date(nw.getFullYear(), nw.getMonth(), 0); // Получаем первый день
const Days_in_month = 32 - new Date(nw.getFullYear(), nw.getMonth(), 32).getDate(); // число дней в месяце
for (let i = Dt.getDay(); i < Days_in_month + Dt.getDay(); i++) {
  cnter++;
  Days [i] = cnter;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss', '../app.component.scss']
})
export class CalendarComponent implements OnInit {
  hid = false;
  Day = 0;
  task_calendar: Task[] = TASK;
  now = new Date();
  mnt = new Date();
  aufgabe = [];
  Months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  days = Days;
  counter = 0;
  d = new Date();

  constructor() {
  }

  // Для полученной даты построить календарь
  create_calendar(d: Date) {
    this.mnt = this.now;
    this.days = [];
    this.aufgabe = [];
    let counter = 0;
    const dt = new Date(d.getFullYear(), d.getMonth(), 0); // Получаем первый день
    const days_in_month = 32 - new Date(d.getFullYear(), d.getMonth(), 32).getDate(); // число дней в месяце

    for (let i = dt.getDay(); i < days_in_month + dt.getDay(); i++) {
      counter++;
      this.days [i] = counter;

    }
    for (const tsk of this.task_calendar) {
      for (let i = 0; i < this.days.length; i++) {
        const day = tsk.date.split('-')[0];
        const month = tsk.date.split('-')[1];
        const year = tsk.date.split('-')[2];
        if (Number(day) === this.days[i] && Number(month) === d.getMonth() && Number(year) === d.getFullYear()) {
          this.aufgabe[i] = true;
        }
      }
    }
  }


  /* Следующий месяц*/
  incr_mnt() {
    const m = new Date(this.mnt.getFullYear(), this.mnt.getMonth() + 1);
    this.create_calendar(m);
    this.mnt = m;
  }

  // Предыдущий месяц
  decr_mnt() {
    const m = new Date(this.mnt.getFullYear(), this.mnt.getMonth() - 1);
    this.create_calendar(m);
    this.mnt = m;
  }


  show_info(dy) {
    this.Day = dy;
    if (this.hid) {
      this.hid = false;
    }
    for (const tsk of this.task_calendar) {
      const day = tsk.date.split('-')[0];
      const month = tsk.date.split('-')[1];
      const year = tsk.date.split('-')[2];
      console.log(day);
      if (Number(day) === dy && Number(month) === this.mnt.getMonth() && Number(year) === this.mnt.getFullYear()) {
        this.hid = !this.hid;
      }

    }
  }

  ngOnInit(): void {

    for (const tsk of this.task_calendar) {
      for (let i = 0; i < this.days.length; i++) {
        const day = tsk.date.split('-')[0];
        const month = tsk.date.split('-')[1];
        const year = tsk.date.split('-')[2];
        if (Number(day) === this.days[i] && Number(month) === this.mnt.getMonth() && Number(year) === this.mnt.getFullYear()) {
          this.aufgabe[i] = true;
        }
      }
    }
  }
}
