import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative w-full h-[75vh] min-h-[600px]">
      <Image
        src="/images/hero-photo.jpg"
        alt="Hero image"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 flex items-center justify-center">
        <div className="text-center px-4 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-2xl tracking-tight">
            Unheard Stories
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-12 drop-shadow-lg max-w-3xl mx-auto leading-relaxed">
            Documenting the untold experiences of children trafficked in India
          </p>
        </div>
      </div>
    </div>
  );
}

