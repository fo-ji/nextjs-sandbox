import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';
import MultipleSelector, { Option } from '@/components/ui/multiple-selector';

const OPTIONS: Option[] = [
  { label: 'nextjs', value: 'nextjs' },
  { label: 'React', value: 'react' },
  { label: 'Remix', value: 'remix' },
  { label: 'Vite', value: 'vite' },
  { label: 'Nuxt', value: 'nuxt' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Angular', value: 'angular' },
  { label: 'Ember', value: 'ember', disable: true },
  { label: 'Gatsby', value: 'gatsby', disable: true },
  { label: 'Astro', value: 'astro' },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="text-right">
        <ModeToggle />
      </div>
      <ul className="space-y-10">
        <li>
          <Button>Default</Button>
        </li>
        <li>
          <Button variant="destructive">Destructive</Button>
        </li>
        <li>
          <Button variant="outline">Outline</Button>
        </li>
        <li>
          <Button variant="secondary">Secondary</Button>
        </li>
        <li>
          <Button variant="ghost">Ghost</Button>
        </li>
        <li>
          <Button variant="link">Link</Button>
        </li>
      </ul>
      <div className="w-full">
        <MultipleSelector
          defaultOptions={OPTIONS}
          placeholder="Type something that does not exist in dropdowns..."
          creatable
          emptyIndicator={
            <p className="text-center text-lg leading-10">no results found.</p>
          }
        />
      </div>
    </main>
  );
}
