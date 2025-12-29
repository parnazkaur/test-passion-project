import StoryCard from './StoryCard';
import storiesData from '@/data/stories.json';

export default function StoryGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Their Stories
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Each face represents a story of resilience, survival, and hope. Click on any image to learn more.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {storiesData.map((story) => (
          <StoryCard
            key={story.id}
            id={story.id}
            name={story.name}
            image={story.image}
          />
        ))}
      </div>
    </div>
  );
}

