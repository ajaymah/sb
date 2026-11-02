import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
} from '@angular/core';

export type ToastVariant = 'success' | 'warning' | 'error';

@Component({
  selector: 'app-toast',
  template: `
    @if (visible()) {
      <div
        class="flex items-start justify-between gap-4 rounded-xl border p-4 shadow-sm"
        [class]="classes()"
        [attr.role]="variant() === 'error' ? 'alert' : 'status'"
        [attr.aria-live]="variant() === 'error' ? 'assertive' : 'polite'"
      >
        <p class="text-sm font-medium">{{ message() }}</p>
        <button
          type="button"
          class="-m-1 inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-md text-lg leading-none hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          aria-label="Dismiss notification"
          (click)="visible.set(false)"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toast {
  readonly message = input.required<string>();
  readonly variant = input<ToastVariant>('success');
  readonly visible = model(false);

  protected readonly classes = computed(() => {
    switch (this.variant()) {
      case 'error':
        return 'border-red-200 bg-red-50 text-red-800';
      case 'warning':
        return 'border-amber-200 bg-amber-50 text-amber-900';
      default:
        return 'border-emerald-200 bg-emerald-50 text-emerald-800';
    }
  });
}
