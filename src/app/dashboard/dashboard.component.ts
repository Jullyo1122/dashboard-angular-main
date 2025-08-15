import { Component } from '@angular/core';
import { MatSlideToggle } from "@angular/material/slide-toggle";
import { MatGridList, MatGridTile } from "@angular/material/grid-list";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatSlideToggle, MatGridList, MatGridTile],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
