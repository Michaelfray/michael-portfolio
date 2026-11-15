import { ArrowUpRight, GithubIcon } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import coreFitnessImg from "../assets/img/core-fitness.png";
import reviewApiImg from "../assets/img/review-api.png";
import movieseatbookingImg from "../assets/img/movie-seat-booking.png";

const projects = [
  {
    title: "CoreFitness",
    description:
      "A gym membership web application built with ASP.NET Core MVC, with a strong focus on authentication flow using ASP.NET Identity, including sign-up, sign-in, logout, member profiles, account management, and SQL Server integration.",
    image: coreFitnessImg,
    tags: ["C#", ".NET", "ASP.NET Core", "SQL Server"],
    github: "https://github.com/Michaelfray/aspnet-michael-fray",
  },

  {
    title: "Shiko-ReviewApi",
    description:
      "A course review API built with ASP.NET Core Minimal API, integrating with an external Course API, using Azure SQL for storing and retrieving reviews, and deployed to Azure App Service.",
    image: reviewApiImg,
    tags: ["C#", ".NET", "Minimal API", "Azure SQL"],
    github: "https://github.com/cms25-aspnet2-grupp-3/review-api",
  },

  {
    title: "MovieSeatBooking",
    description:
      "A React-based movie seat booking application featuring dynamic seat selection, real-time price calculation, form validation, and an Admin panel with full CRUD functionality using JSON Server.",
    image: movieseatbookingImg,
    tags: ["React", "JavaScript", "Vite", "JSON Server"],
    github: "https://github.com/Michaelfray/movie-seat-booking",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="glass rounded-2xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 "
              />

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100"
              ></a>

              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="text-muted-foreground text-sm mt-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
