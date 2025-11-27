import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer
            </h3>

            <p className="text-muted-foreground">
              Allow me to introduce myself, my name is Saleh Muhammad. I am 21
              years old. My hobbies are futsal and badminton. I created a website
              using the programming languages and tools that I have learned,
              namely: HTML, CSS, JavaScript, React.js, Tailwind, Laravel. The database
              I use is MySQL.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="/Saleh" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/cv/Saleh-Muhammad-CV.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Junior Web Developer</h4>
                  <p className="text-muted-foreground">
                    Creating modern, responsive, and user-friendly websites using
                    HTML, CSS, JavaScript, React.js,Tailwind CSS, Laravel and database i use is MySQL.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design & Creativity</h4>
                  <p className="text-muted-foreground">
                    Designing clean and attractive interfaces with attention to
                    detail and usability, combining functionality with creativity.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Soft Skills & Collaboration</h4>
                  <p className="text-muted-foreground">
                    Strong communication, teamwork, problem-solving, and critical
                    thinking skills to deliver impactful digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
