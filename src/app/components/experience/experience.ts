import { Component } from '@angular/core';
import { EXPERIENCES } from '../../cv-data';
import { RevealOnScroll } from '../../directives/reveal-on-scroll';

@Component({
  selector: 'app-experience',
  imports: [RevealOnScroll],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly experiences = EXPERIENCES;

  protected delayFor(index: number): number {
    return Math.min(index, 6) * 60;
  }
}
