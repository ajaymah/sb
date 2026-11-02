import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

type ButtonVariant = 'primary' | 'secondary' | 'disabled';

@Component({
  selector: 'app-button',
  template: `
    <button
      type="button"
      [disabled]="isDisabled()"
      [class]="classes()"
    >
      <ng-content />
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  readonly variant = input<ButtonVariant>('primary');

  readonly isDisabled = computed(() => this.variant() === 'disabled');

  readonly classes = computed(() => {
    const base =
      'inline-flex min-h-11 items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2';

    if (this.isDisabled()) {
      return `${base} cursor-not-allowed bg-slate-200 text-slate-500`;
    }

    if (this.variant() === 'secondary') {
      return `${base} cursor-pointer border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 focus-visible:outline-slate-600`;
    }

    return `${base} cursor-pointer bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:outline-indigo-600`;
  });
}
