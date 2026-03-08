import Button from "../components/button";

export default function HeroSection() {
  return (
    <section className="bg-brand-secondary min-h-screen flex flex-col justify-center">
      <div className="w-full max-w-4xl mx-auto px-8">
        <div className="text-center mb-20">
          <h1 className="text-brand-primary-light font-bold text-6xl leading-tight">
            Turn Your <span className="text-brand-primary">Curiosity,</span>
          </h1>
          <h1 className="text-brand-primary-light font-bold text-6xl leading-tight">
            Into a <span className="text-brand-primary">Career.</span>
          </h1>
        </div>

        <div className="text-center mb-20">
          <h2 className=" text-brand-primary-light font-medium text-base leading-relaxed">
            EduSmart brings together{" "}
            <span className="text-brand-primary">
              1,200+ expert-led courses
            </span>{" "}
            designed to take you from beginner to job-ready. Learn at your own
            pace, earn verified certificates, and join a community of{" "}
            <span className="text-brand-primary">50.000+ learners</span> who are
            building real skills for real careers.
          </h2>
        </div>

        <div className="flex justify-center mb-20 gap-8">
          <Button label="See Courses" variant="primary"></Button>
          <Button label="Learning Path" variant="secondary"></Button>
        </div>
      </div>
    </section>
  );
}
