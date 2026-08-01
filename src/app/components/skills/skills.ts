import { Component } from '@angular/core';
import { SKILLS } from '../../cv-data';
import { RevealOnScroll } from '../../directives/reveal-on-scroll';

@Component({
  selector: 'app-skills',
  imports: [RevealOnScroll],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly skillGroups = SKILLS;

  protected delayFor(index: number): number {
    return index * 70;
  }
}
