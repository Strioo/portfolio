import { Layout } from './components/layout';
import { HeroSection } from './components/sections/hero';
import { AboutSection } from './components/sections/about';
import { ProjectsSection } from './components/sections/projects';
import { ContactSection } from './components/sections/contact';

function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
