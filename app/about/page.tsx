import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-16">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-12 tracking-tight">
            About This Project
          </h1>
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden mb-12 shadow-xl">
            <Image
              src="/images/DSC01053.jpg"
              alt="Founder"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-gray-700 prose-p:leading-relaxed">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            In spring of 2025, I spent 20 days in India. When I first landed in Delhi, I was immediately overwhelmed. The air was thick and humid. Cows caused chaos on the roads. I saw families sleeping on the sidewalks, using tattered blankets as makeshift beds. The poverty was not just visible–it was inescapable. It was one thing to hear about it from news and stories, but witnessing it firsthand left me shaken. I couldn't flee the new reality that I had just been exposed to.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I came to realize how sheltered I was from the world's harshest truths. Of course I had been–after all, my parents crossed oceans just to escape those very realities. Why would they expose them to me? I had been living in a bubble, with no knowledge of the suffering that existed outside of my comfortable life.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            As I walked through the crowded neighborhoods of Delhi, the air pollution stung my eyes. A young girl approached me, pleading for money. A swarm of mosquitos hovered over her, eating at her wounds. In exchange for a couple of rupees, I asked her to share her story. Her name was Santoshi, and she didn't know how old she was. She looked no older than 6 or 7, but her eyes had a palpable weight to them, one that no child should ever have to bear.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            It wasn't just Santoshi. Children had approached my family and me at nearly every red light. And as the days passed, I began to see the pattern. These children were part of something much more terrifying than poverty. They were victims of child-trafficking. They were controlled by criminals who used them just to generate profit and attract sympathy. I discovered that over 10 million children in India have been forced into child labor. Their innocence is not lost, it is taken.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            What shook me the most wasn't just the horror of what I was seeing, it was the realization that awareness and education are essential tools in addressing systemic injustice. By documenting and sharing these stories, we can help others understand the complex realities that enable trafficking to persist. This project is not about individual action, but about collective awareness and the power of bearing witness.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Leaving Delhi, I truly began to feel the weight of what I had come to understand. I began to reflect on the opportunities I have always taken for granted–the chance to study, to dream, to choose my future. And yet, these children are stripped of their will and voice. I had to reconcile with how in a world full of privilege, not everyone gets to grow, to learn, to dream, and to simply exist in peace.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            In those moments I realized the importance of gratitude–especially for the opportunities in my life that I often overlook. These are blessings that in many parts of the world, are reserved for few. Our freedom is something that some will never be able to experience. Even our stress from school is something to cherish; many don't have the luxury of worrying about assignments and exams.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Mosope Eunice reminds us: "While we complain about our food, someone else is sleeping on an empty stomach. While we wish for the weekend to come faster, someone else is praying for one more day. While we wish for a bigger house, others don't have a home. While we complain about our age, someone else would give up anything to be this age again."
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Complaining is human nature. It's easy to get caught up in our own frustrations. But the lives of these children put everything into perspective. When you see the desperation in their eyes, when you see them begging for scraps, you can't help feeling like your own complaints are insignificant in comparison. Their reality doesn't allow for the comfort of complaints, it demands endurance to all conditions.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            What happened to Santoshi, happens to thousands of children everyday. And some of them don't ever get to escape this vicious cycle. It is designed to keep them trapped. They aren't just unlucky; they are targeted by systems that exploit their vulnerability.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This trip made me reflect on my life in ways I never had before. I had always taken my privileges for granted. I felt like I was entitled to them. But seeing these children made me realize how fragile these freedoms really are.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This project exists to document and share the stories of children who have been trafficked in India. It is not about individual heroism or rescue narratives, but about understanding systemic issues, raising awareness, and most importantly, giving voice to those whose stories have been silenced. By learning about these experiences, we can better understand the complex factors that enable trafficking to persist, and work toward solutions that address root causes rather than symptoms.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The power to create change comes not from individual action alone, but from collective awareness, education, and the commitment to address the systemic injustices that create vulnerability. This website is a small step toward that awareness, a platform for stories that deserve to be heard, and a reminder that understanding must precede action.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed font-semibold mt-12">
            — Parnaz Kaur, Founder
          </p>
        </div>
      </div>

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

