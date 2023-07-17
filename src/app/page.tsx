import Intro from '@/components/Intro';
import About from '@/components/About';
import LinkBanner from '@/components/LinkBanner';
import Footer from '@/components/Footer';
import ProjectList from '@/components/ProjectList/ProjectList';
import Test from '@/components/test';
import ToyProjectList from '@/components/ToyProjectList/ToyProjectList';

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
      <LinkBanner />
      <ProjectList />
      <ToyProjectList />
      <Footer />
    </main>
  );
}
