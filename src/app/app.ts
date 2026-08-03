import { Component, HostListener, signal } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Experience } from './components/experience/experience';
import { Skills } from './components/skills/skills';
import { Education } from './components/education/education';
import { Footer } from './components/footer/footer';
import { DigitalRain } from './components/digital-rain/digital-rain';

@Component({
  selector: 'app-root',
  imports: [Hero, Experience, Skills, Education, Footer, DigitalRain],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly scrollProgress = signal(0);

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress.set(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
  }
}
