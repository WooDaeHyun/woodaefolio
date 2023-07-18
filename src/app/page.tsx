import Intro from '@/components/Intro/Intro';
import About from '@/components/About/About';
import LinkBanner from '@/components/LinkBanner/LinkBanner';
import ProjectList from '@/components/ProjectList/ProjectList';
import ProjectDocs from '@/components/ProjectDocs/ProjectDocs';
import ToyProjectList from '@/components/ToyProjectList/ToyProjectList';
import Bottom from '@/components/Bottom/Bottom';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
      <LinkBanner />
      <ProjectList />
      <ProjectDocs />
      <ToyProjectList />
      <Bottom />
      <Footer />
    </main>
  );
}
