import { Component } from '@angular/core';
import { EDUCATION, LANGUAGES } from '../../cv-data';
import { RevealOnScroll } from '../../directives/reveal-on-scroll';

@Component({
  selector: 'app-education',
  imports: [RevealOnScroll],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  protected readonly education = EDUCATION;
  protected readonly languages = LANGUAGES;

  protected delayFor(index: number): number {
    return index * 80;
  }
}
