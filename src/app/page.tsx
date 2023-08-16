import Intro from '@/components/Intro/Intro';
import About from '@/components/About/About';
import LinkBanner from '@/components/LinkBanner/LinkBanner';
import ProjectList from '@/components/ProjectList/ProjectList';
import ProjectDocs from '@/components/ProjectDocs/ProjectDocs';
import Bottom from '@/components/Bottom/Bottom';
import Footer from '@/components/Footer/Footer';

import dynamic from 'next/dynamic';

const ToyProjectListDy = dynamic(
  () => import('../components/ToyProjectList/ToyProjectList'),
  { ssr: false }
);

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
      <LinkBanner />
      <ProjectList />
      <ProjectDocs />
      <ToyProjectListDy />
      <Bottom />
      <Footer />
    </main>
  );
}
