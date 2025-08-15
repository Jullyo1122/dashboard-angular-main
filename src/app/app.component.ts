import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { DashboardComponent } from "./dashboard/dashboard.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatGridListModule, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard-angular';
}

