import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface AccordionItem {
  title: string;
  content: string;
}

@Component({
  selector: 'app-accordion',
  template: `
    <div class="divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white">
      @for (item of items(); track item.title) {
        <details class="group px-5">
          <summary
            class="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 [&::-webkit-details-marker]:hidden"
          >
            {{ item.title }}
            <svg
              aria-hidden="true"
              class="size-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.22 7.22a.75.75 0 0 1 1.06 0L10 10.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </summary>
          <p class="pb-5 pr-8 leading-6 text-slate-600 group-open:animate-accordion-open motion-reduce:group-open:animate-none">
            {{ item.content }}
          </p>
        </details>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Accordion {
  readonly items = input.required<readonly AccordionItem[]>();
}
