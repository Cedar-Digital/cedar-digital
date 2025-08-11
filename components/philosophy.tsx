import Particles from './particles';

export default function Philosophy() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Innovation',
      description: 'We don\'t just follow trends—we create them. Every venture starts with a bold idea that challenges the status quo.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Impact',
      description: 'Success isn\'t just about profit—it\'s about creating meaningful change that benefits businesses, communities, and industries.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Execution',
      description: 'Ideas are worthless without execution. We turn concepts into reality through strategic planning, relentless focus, and expert implementation.'
    }
  ];

  return (
    <section className="relative bg-slate-900 text-white py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <Particles className="absolute inset-0 -z-10" quantity={40} />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black -z-10" />
      
      {/* Decorative shapes */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium rounded-full mb-4">
            Our Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Cedar Digital Way
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Cedar Digital serves as more than just a holding company—we're an incubator for transformative ideas, 
            a launchpad for ambitious ventures, and a catalyst for sustainable growth.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="600">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light italic text-white/90 leading-relaxed mb-8">
              "Every great company starts with a single idea and the courage to pursue it. 
              At Cedar Digital, we don't just build businesses—we build the future."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-16 h-0.5 bg-white/30 mr-4" />
              <span className="text-white/60 font-medium">Joshua Joseph, Founder</span>
              <div className="w-16 h-0.5 bg-white/30 ml-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}