import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from './task';

@Component({
  selector: 'app-month-task',
  templateUrl: './month-task.component.html',
  styleUrls: ['./month-task.component.scss']
})
export class MonthTaskComponent implements OnInit {
  @Input() day: number;
  @Input() isHid: boolean;
  @Output() Save = new EventEmitter<Task>();
  // task: Task [] = [];
  Months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

  ngOnInit(): void {

  }

}
