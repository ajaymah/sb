import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-page',
  template: `
    <section
      class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
      aria-labelledby="section-title"
    >
      <p class="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
        WBG component library
      </p>
      <h1 id="section-title" class="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {{ title() }}
      </h1>
      <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600">
        {{ description() }}
      </p>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionPage {
  readonly title = input('');
  readonly description = input('');
}
