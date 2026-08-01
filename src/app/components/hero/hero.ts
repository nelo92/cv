import { Component } from '@angular/core';
import { PROFILE } from '../../cv-data';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly profile = PROFILE;
  protected readonly years = new Date().getFullYear() - 2001;
}
