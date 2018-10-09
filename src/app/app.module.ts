import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {CalendarComponent} from './calendar-month/calendar.component';
import {WeekComponent} from './week/week.component';
import {DayComponent} from './day/day.component';
import {MonthTaskComponent} from './calendar-month/month-task/month-task.component';
import {YearComponent} from './year/year.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'month', component: CalendarComponent},
  {path: 'week', component: WeekComponent},
  {path: 'day', component: DayComponent},
  {path: 'm-task', component: MonthTaskComponent},
  {path: 'year', component: YearComponent},
  {path: '**', redirectTo: ''}
];
@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayComponent,
    WeekComponent,
    MonthTaskComponent,
    YearComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
