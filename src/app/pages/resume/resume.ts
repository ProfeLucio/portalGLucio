import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrls: ['./resume.css']
})
export class Resume {
  public resume = DataService.getResume();
  public production = DataService.getProduction();
}
