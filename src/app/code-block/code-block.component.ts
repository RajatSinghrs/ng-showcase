import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.component.html',
  styleUrl: './code-block.component.scss'
})
export class CodeBlockComponent {
@Input() title: string = '';
  @Input() code: string = '';
  @Input() language: string = 'typescript';
}
