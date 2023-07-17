import Intro from '@/components/Intro';
import About from '@/components/About';
import LinkBanner from '@/components/LinkBanner';
import Footer from '@/components/Footer';
import ProjectList from '@/components/ProjectList/ProjectList';

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
      <LinkBanner />
      <ProjectList />
      <Footer />
    </main>
  );
}
