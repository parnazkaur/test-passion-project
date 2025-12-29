import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Statistics />
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            Every Story Deserves to Be Heard
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Behind every statistic is a child with a story. Explore their experiences, 
            understand their journeys, and help amplify voices that have been silenced for too long.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTA href="/stories" variant="primary">
              View Their Stories
            </CTA>
            <CTA href="#" variant="secondary">
              Donate Now
            </CTA>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Unheard Stories. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

