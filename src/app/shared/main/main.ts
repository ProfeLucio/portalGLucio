import { Component } from '@angular/core';
import { Acordeon } from '../../shared/acordeon/acordeon';
@Component({
  selector: 'app-main',
  imports: [Acordeon],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
  public usuario: any = {
    'name': 'Gonzalo Andrés Lucio López',
    'image': 'foto.webp'
  }
}
