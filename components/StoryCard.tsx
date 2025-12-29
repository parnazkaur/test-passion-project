'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface StoryCardProps {
  id: string;
  name: string;
  image: string;
}

export default function StoryCard({ id, name, image }: StoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/stories/${id}`}>
      <div
        className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/60 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center px-4 tracking-tight">
            {name}
          </h3>
        </div>
      </div>
    </Link>
  );
}

