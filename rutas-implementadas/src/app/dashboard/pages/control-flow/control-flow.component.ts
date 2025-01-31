import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

type Grade = 'A' | 'B' | 'F'

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styles: []
})
export default class ControlFlowComponent {

  public showContent = signal(false)
  public grade = signal<Grade>('A')
  public frameworks = signal<string[]>(['Angular', 'React', 'Vue', 'Svelte', 'Ember'])
  public frameworks2 = signal<string[]>([])

  public toggleContent() {
    this.showContent.set(!this.showContent())
  }

  public switchGrade() {
    this.grade.set(this.grade() === 'A' ? 'B' : this.grade() === 'B' ? 'F' : 'A')
  }

  public toRight(framework: string) {
    this.frameworks2.set([...this.frameworks2(), framework])
    this.frameworks.set(this.frameworks().filter(f => f !== framework))
  }

  public toLeft(framework: string) {
    this.frameworks.set([...this.frameworks(), framework])
    this.frameworks2.set(this.frameworks2().filter(f => f !== framework))
  }
}
