import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';

const GLYPHS = 'アイウエオカキクケコサシスセソ0123456789ABCDEF';
const FONT_SIZE = 15;
const FRAME_MS = 90;
const TRAIL_ALPHA = 0.1;

@Component({
  selector: 'app-digital-rain',
  imports: [],
  templateUrl: './digital-rain.html',
  styleUrl: './digital-rain.scss',
})
export class DigitalRain implements AfterViewInit, OnDestroy {
  @Input()
  set activate(value: boolean) {
    this._activate = value;
    this.syncState();
  }
  get activate(): boolean {
    return this._activate;
  }

  @ViewChild('canvas') private readonly canvasRef!: ElementRef<HTMLCanvasElement>;

  private _activate = true;
  private ctx: CanvasRenderingContext2D | null = null;
  private drops: number[] = [];
  private columns = 0;
  private intervalId?: ReturnType<typeof setInterval>;
  private bgColor = '#0a0a12';
  private accentColor = '#7c5cff';
  private readonly reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  ngAfterViewInit(): void {
    if (this.reduceMotion) {
      return;
    }

    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    if (!this.ctx) {
      return;
    }

    const rootStyles = getComputedStyle(document.documentElement);
    this.bgColor = rootStyles.getPropertyValue('--bg-0').trim() || this.bgColor;
    this.accentColor = rootStyles.getPropertyValue('--accent-1').trim() || this.accentColor;

    this.resize();
    this.syncState();
  }

  ngOnDestroy(): void {
    this.stop();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (this.ctx) {
      this.resize();
    }
  }

  @HostListener('document:visibilitychange')
  onVisibilityChange(): void {
    this.syncState();
  }

  private syncState(): void {
    if (!this.ctx || this.reduceMotion) {
      return;
    }
    if (this.activate && !document.hidden) {
      this.start();
    } else {
      this.stop();
    }
  }

  private resize(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.columns = Math.floor(canvas.width / FONT_SIZE);
    this.drops = Array.from({ length: this.columns }, () => Math.random() * -50);
  }

  private start(): void {
    if (this.intervalId !== undefined) {
      return;
    }
    this.intervalId = setInterval(() => this.draw(), FRAME_MS);
  }

  private stop(): void {
    if (this.intervalId !== undefined) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  private draw(): void {
    const ctx = this.ctx;
    if (!ctx) {
      return;
    }
    const canvas = this.canvasRef.nativeElement;

    ctx.globalAlpha = TRAIL_ALPHA;
    ctx.fillStyle = this.bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.globalAlpha = 1;
    ctx.fillStyle = this.accentColor;
    ctx.font = `${FONT_SIZE}px monospace`;

    for (let i = 0; i < this.columns; i++) {
      const glyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      const y = this.drops[i] * FONT_SIZE;
      ctx.fillText(glyph, i * FONT_SIZE, y);
      if (y > canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }
  }
}
