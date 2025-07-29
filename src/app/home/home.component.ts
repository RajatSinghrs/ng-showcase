import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Github, Mail, ExternalLink, Terminal, Code, Zap } from 'lucide-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
   isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
   packages = [
    {
      name: 'typewriter-text-effect',
      description: 'A customizable typewriter text animation effect for modern web applications with React support.',
      version: '2.0.0',
      downloads: '1,000+',
      npmUrl: 'https://www.npmjs.com/package/typewriter-text-effect',
      demoUrl: 'https://testtypewriternpm.netlify.app/',
      githubUrl: '#',
      tags: ['typescript', 'react', 'animation', 'typewriter', 'text-effect'],
      features: [
        'TypeScript support',
        'Customizable typing speed',
        'Multiple text arrays',
        'Pause and resume functionality',
        'Lightweight and performant'
      ]
    }
  ];

  installCode = `npm install typewriter-text-effect`;
  
  usageCode = `import { Typewriter } from 'typewriter-text-effect';

function MyComponent() {
  return (
    <Typewriter
      texts={["Hello World!", "Welcome to testing!", "TypeScript is awesome!"]}
      speed={100}
      deleteSpeed={50}
    />
  );
}`;

  scrollToPackages() {
    if (this.isBrowser) {
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  }
}

  openExternalLink1(){
    if (this.isBrowser) {
       window.open('https://testtypewriternpm.netlify.app/', '_blank');
  }
  }
  openExternalLink2(){
    if (this.isBrowser) {
       window.open('https://testtypewriternpm.netlify.app/', '_blank');
  }
  }
  openExternalLink3(){
    if (this.isBrowser) {
       window.open('https://ngtest-typewriter.netlify.app/testing', '_blank');
  }
  }
  openExternalLink4(){
    if (this.isBrowser) {
       window.open('https://github.com/rajatsingh_rs', '_blank');
  }
  }
}