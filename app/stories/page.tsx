import Navigation from '@/components/Navigation';
import StoryGrid from '@/components/StoryGrid';

export default function StoriesPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-16">
      <Navigation />
      <StoryGrid />
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Unheard Stories. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

