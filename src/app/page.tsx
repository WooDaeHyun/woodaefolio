import Intro from '@/components/Intro';
import About from '@/components/About';
import LinkBanner from '@/components/LinkBanner';
import ProjectList from '@/components/ProjectList/ProjectList';
import ProjectDocs from '@/components/ProjectDocs/ProjectDocs';
import ToyProjectList from '@/components/ToyProjectList/ToyProjectList';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
      <LinkBanner />
      <ProjectList />
      <ProjectDocs />
      <ToyProjectList />
      <Footer />
    </main>
  );
}
