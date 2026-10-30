import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `
    <span class="group relative inline-flex">
      <button
        type="button"
        [attr.aria-describedby]="tooltipId()"
        class="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <ng-content />
      </button>
      <span
        role="tooltip"
        [id]="tooltipId()"
        class="invisible absolute bottom-full left-1/2 z-10 mb-2 w-max max-w-56 -translate-x-1/2 rounded-lg bg-slate-900 px-3 py-2 text-center text-xs leading-5 text-white opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
      >
        {{ text() }}
      </span>
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tooltip {
  readonly tooltipId = input.required<string>();
  readonly text = input.required<string>();
}
