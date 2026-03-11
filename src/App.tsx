import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { WhoAreWe } from './components/WhoAreWe/WhoAreWe';
import { WhyAiNow } from './components/WhyAiNow/WhyAiNow';
import { EmpowerCards } from './components/EmpowerCards/EmpowerCards';
import { HostProfiles } from './components/HostProfiles/HostProfiles';
import { EpisodesList } from './components/EpisodesList/EpisodesList';
import { Footer } from './components/Footer/Footer';
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhoAreWe />
        <EmpowerCards />
        <WhyAiNow />
        <HostProfiles />
        <EpisodesList />
      </main>
      <Footer />
    </>
  );
}

export default App;
