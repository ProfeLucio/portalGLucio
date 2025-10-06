import { Component } from '@angular/core';
import { Main } from '../../shared/main/main';
import { Aside } from '../../shared/aside/aside';

@Component({
  selector: 'app-home',
  imports: [Main, Aside],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
