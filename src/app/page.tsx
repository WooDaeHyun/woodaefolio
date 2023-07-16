import Image from 'next/image';

import Intro from '@/ui/Intro';
import About from '@/ui/About';

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
    </main>
  );
}
