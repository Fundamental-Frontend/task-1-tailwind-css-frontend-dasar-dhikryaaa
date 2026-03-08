import Card from "../components/card";

const CardFeatures = [
  {
    icon: "🤖",
    title: "Machine Learning Course",
    descriptions:
      "Master the fundamentals of ML Algorithms, data preprocessing, and model training. 9.000+ learners have joined this course.",
    variant: "light" as const,
  },
  {
    icon: "🌐",
    title: "Fullstack Web Development Course",
    descriptions:
      "Deep dive learning of React JS and GO languages as Fullstack Web Developers. 15.000+ learners have joined this course.",
    variant: "dark" as const,
  },
  {
    icon: "📱",
    title: "Mobile Development Course",
    descriptions:
      "Learn the basics of Flutters and build your own app. 10.000+ learners have joined this course.",
    variant: "light" as const,
  },
];

export default function CardSection() {
  return (
    <section className="bg-brand-primary-light min-h-screen flex flex-col justify-center">
      <div className="w-full max-w-6xl mx-auto p-8">
        <div className="text-center mb-5">
          <h1 className="text-text-grey-dark font-medium text-2xl">
            Our <span className="text-brand-primary">Classes</span>
          </h1>
        </div>
        <div className="text-center mb-20">
          <h1 className="text-text-grey-dark font-bold text-4xl">
            Check Our <span className="text-brand-primary">Top</span> Classes
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CardFeatures.map(features => (
                <Card key={features.title} {...features}>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
