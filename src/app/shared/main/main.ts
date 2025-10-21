import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Acordeon } from '../../shared/acordeon/acordeon';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-main',
  imports: [CommonModule, Acordeon],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
  public usuario: any = {
    'name': 'Gonzalo Andrés Lucio López',
    'image': 'foto.webp'
  }
  public formation = DataService.getFormation();
  public production = DataService.getProduction();
  public courses = DataService.getCourses();
}
