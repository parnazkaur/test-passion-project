export default function Statistics() {
  const stats = [
    {
      number: "10+ Million",
      label: "Children in forced labor in India",
      description: "According to recent estimates, over 10 million children are trapped in various forms of forced labor across India."
    },
    {
      number: "1 in 3",
      label: "Trafficking victims are children",
      description: "Children represent a significant portion of trafficking victims, with many cases going unreported."
    },
    {
      number: "80%",
      label: "Of trafficking involves forced labor",
      description: "The majority of child trafficking cases involve forced labor rather than other forms of exploitation."
    },
    {
      number: "Less than 1%",
      label: "Of cases result in conviction",
      description: "Despite the scale of the problem, very few trafficking cases result in successful prosecution."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Scale of the Crisis
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These statistics represent real children whose stories deserve to be heard
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-200/60 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
            >
              <div className="text-5xl font-bold text-gray-900 mb-3 tracking-tight">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-4 leading-tight">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600 leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

