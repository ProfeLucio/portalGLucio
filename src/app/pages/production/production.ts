import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-production',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './production.html',
  styleUrl: './production.css'
})
export class Production {
  public production = DataService.getProduction();
}
