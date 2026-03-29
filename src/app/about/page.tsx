import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      
      {/* Hero */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          About URAV
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl">
          Rooted in Ayurveda, URAV brings natural healing into modern lifestyles.
          We believe wellness should be simple, honest, and effective.
        </p>
      </div>

      {/* Image */}
      <div className="mb-12">
        <Image
          src="/images/about.jpg" // replace with your image
          alt="About URAV"
          width={1000}
          height={500}
          className="rounded-2xl object-cover"
        />
      </div>

      {/* About Content */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="text-2xl font-medium mb-3">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            URAV was created to reconnect people with natural healing.
            Inspired by ancient Ayurvedic practices, we design products
            that support everyday wellness without complexity.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-medium mb-3">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To make Ayurveda accessible and relevant in modern life —
            through thoughtfully crafted products that are pure,
            effective, and trustworthy.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Natural",
            desc: "We use ingredients inspired by nature and Ayurveda.",
          },
          {
            title: "Simple",
            desc: "No overcomplication. Just what your body needs.",
          },
          {
            title: "Trusted",
            desc: "Carefully crafted with quality and consistency.",
          },
        ].map((item, i) => (
          <div key={i} className="border rounded-xl p-6">
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}