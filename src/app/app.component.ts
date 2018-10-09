import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  now = new Date();
  mnt = new Date();
  Months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  days = [];
  counter = 0;
  d = new Date();

  // Для полученной даты построить календарь
  create_calendar(d: Date) {
    this.mnt = this.now;
    this.days = [];
    let counter = 0;
    const dt = new Date(d.getFullYear(), d.getMonth(), 0); // Получаем первый день
    const days_in_month = 32 - new Date(d.getFullYear(), d.getMonth(), 32).getDate(); // число дней в месяце
    for (let i = dt.getDay(); i < days_in_month + dt.getDay(); i++) {
      counter++;
      this.days [i] = counter;
    }
  }

  // Следующий месяц
  incr_mnt() {
    const m = new Date(this.mnt.getFullYear(), this.mnt.getMonth() + 1);
    this.create_calendar(m);
    console.log(this.counter);
    this.mnt = m;
  }

  // Предыдущий месяц
  decr_mnt() {
    const m = new Date(this.mnt.getFullYear(), this.mnt.getMonth() - 1);
    this.create_calendar(m);
    console.log(this.counter);
    this.mnt = m;
  }

  // поменять стиль кнопки
  color_change(elem) {
    document.getElementById(elem).style.backgroundColor = '#dddddd';
    document.getElementById(elem).style.color = '#67685f';
  }
}
