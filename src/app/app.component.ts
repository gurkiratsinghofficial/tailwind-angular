import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DarkModeService } from './services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tailwind-angular';
  darkModeEnabled$ = this.darkModeService.darkModeEnabled$;

  private unsubscribe$ = new Subject();

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    this.darkModeEnabled$.pipe(takeUntil(this.unsubscribe$));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next('');
    this.unsubscribe$.complete();
  }

  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }
}
