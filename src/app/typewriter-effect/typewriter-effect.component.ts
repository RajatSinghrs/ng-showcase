import { isPlatformBrowser } from '@angular/common';
import { Component, Input, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-typewriter-effect',
  templateUrl: './typewriter-effect.component.html',
  styleUrl: './typewriter-effect.component.scss'
})
export class TypewriterEffectComponent implements OnInit, OnDestroy {
  @Input() texts: string[] = [];
  @Input() speed: number = 100;
  @Input() deleteSpeed: number = 50;
  @Input() delay: number = 1000;

  currentText = '';
  currentIndex = 0;
  isDeleting = false;
  private timer: any;
    private isBrowser: boolean;

constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  
  ngOnInit() {
     if (this.isBrowser) {
      this.type();
    }
  }

 ngOnDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
  
  type() {
    const fullText = this.texts[this.currentIndex % this.texts.length];
    
    if (this.isDeleting) {
      this.currentText = fullText.substring(0, this.currentText.length - 1);
    } else {
      this.currentText = fullText.substring(0, this.currentText.length + 1);
    }

    let typeSpeed = this.isDeleting ? this.deleteSpeed : this.speed;

    if (!this.isDeleting && this.currentText === fullText) {
      typeSpeed = this.delay;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === '') {
      this.isDeleting = false;
      this.currentIndex++;
      typeSpeed = 500;
    }

    this.timer = setTimeout(() => this.type(), typeSpeed);
  }
}