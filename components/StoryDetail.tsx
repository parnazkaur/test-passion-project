import Image from 'next/image';
import Link from 'next/link';
import storiesData from '@/data/stories.json';

interface StoryDetailProps {
  storyId: string;
}

export default function StoryDetail({ storyId }: StoryDetailProps) {
  const story = storiesData.find((s) => s.id === storyId);

  if (!story) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Story Not Found</h1>
        <Link href="/stories" className="text-blue-600 hover:text-blue-800">
          Return to Stories
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/stories"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Stories
      </Link>

      <div className="mb-12">
        <div className="relative w-full h-[60vh] min-h-[400px] rounded-lg overflow-hidden mb-12 shadow-lg">
          <Image
            src={story.image}
            alt={story.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
          {story.name}
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mb-12">
          {story.fullDescription}
        </p>
      </div>

      {story.additionalPhotos && story.additionalPhotos.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Additional Photos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {story.additionalPhotos.map((photo, index) => (
              <div
                key={index}
                className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src={photo}
                  alt={`${story.name} - Photo ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {story.hasVideo && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Video</h2>
          <div className="relative w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden flex items-center justify-center shadow-lg">
            <div className="text-center">
              <svg
                className="w-20 h-20 mx-auto text-gray-400 mb-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              <p className="text-gray-600 text-lg">Video content coming soon</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

