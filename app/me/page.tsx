import Link from "next/link";

import Next from "@/components/Icons/next";
import ReactLogo from "@/components/Icons/react";
import TailwindCSSLogo from "@/components/Icons/tailwindcss";
import Back from "@/components/back-button";
import { Badge } from "@/components/ui/badge";

const page = () => {
  return (
    <>
      <Back />
      <section>
        <div className="mx-auto flex pt-20 pb-5 px-5 items-center">
          <div className="lg:flex-grow max-w-3xl flex flex-col text-left mb-5 md:mb-0">
            <h1 className="sm:text-4xl text-center text-3xl mb-4 font-medium text-secondary-foreground dark:text-primary">
              About Me
            </h1>
            <p className="mb-3 leading-relaxed">
              Hello! I&apos;m{" "}
              <span className="dark:text-primary text-xl text-secondary-foreground underline underline-offset-2 dark:decoration-primary decoration-secondary-foreground">
                Sagar Dwivedi
              </span>
              , an aspiring full-stack developer on a mission to make a mark in
              the exciting world of web development. While my professional
              journey is just beginning, my commitment to learning and growing
              is steadfast.
            </p>
            <article className="mb-3 leading-relaxed">
              <p className="font-semibold mb-2 text-xl dark:text-primary text-secondary-foreground">
                Who I Am:
              </p>
              <div>
                I&apos;m a passionate explorer of the digital realm, eager to master
                the art of creating web applications that are not only
                functional but elegant. My journey has led me to acquire skills
                in{" "}
                <Badge className="rounded text-secondary-foreground">
                  <Next />
                </Badge>
                ,{" "}
                <Badge className="rounded text-secondary-foreground">
                  <ReactLogo />
                </Badge>
                ,{" "}
                <Badge className="rounded text-secondary-foreground">
                  <TailwindCSSLogo />
                </Badge>
                , <Badge>Python</Badge>, <Badge>Node.js</Badge>, and FastAPI,
                and I&apos;m dedicated to expanding my knowledge.
              </div>
            </article>
            <article className="mb-3 leading-relaxed">
              <p className="font-semibold mb-2 text-xl dark:text-primary text-secondary-foreground">
                What Drives Me:
              </p>
              <p>
                I&apos;m driven by the endless possibilities of the digital world.
                Every line of code I write is an opportunity to turn innovative
                ideas into tangible solutions. My work is a reflection of my
                commitment to creating efficient and user-friendly web
                applications.
              </p>
            </article>
            <article className="mb-3 leading-relaxed">
              <p className="font-semibold mb-2 text-xl dark:text-primary text-secondary-foreground">
                Why Choose Me:
              </p>
              <ul className="space-y-2">
                <li>
                  <span className="underline font-medium font-serif">
                    Eagerness to Learn:
                  </span>{" "}
                  I approach every challenge with enthusiasm and a strong
                  willingness to learn and improve.
                </li>
                <li>
                  <span className="underline font-medium font-serif">
                    Tech Skills:
                  </span>{" "}
                  I bring proficiency in Next.js, React.js, Tailwind CSS,
                  Python, Node.js, and FastAPI to the table.
                </li>
                <li>
                  <span className="underline font-medium font-serif">
                    Problem-Solving Mindset:
                  </span>{" "}
                  I tackle coding challenges with a creative and analytical
                  approach, always seeking the best solutions.
                </li>
                <li>
                  <span className="underline font-medium font-serif">
                    Passion for Web Development:
                  </span>{" "}
                  My enthusiasm for web development fuels my continuous quest
                  for excellence.
                </li>
              </ul>
            </article>
            <article className="mb-3 leading-relaxed">
              <p className="font-semibold mb-2 text-xl dark:text-primary text-secondary-foreground">
                Let&apos;s Collaborate:
              </p>
              <p>
                I&apos;m eager to connect with industry professionals, mentors, and
                potential collaborators. Whether you have a project idea, a
                question, or just want to explore the vast possibilities of the
                digital world, please don&apos;t hesitate to get in touch through{" "}
                <Link className="underline " href={"/contact"}>
                  Contact Me
                </Link>
                . Let&apos;s embark on this learning journey together.
              </p>
            </article>
            <article className="mb-3 leading-relaxed">
              <p className="font-semibold mb-2 text-xl dark:text-primary text-secondary-foreground">
                Beyond the Keyboard:
              </p>
              <p>
                When I&apos;m not immersed in the world of code, you can find me
                [Your Hobbies/Interests Outside of Development]. A well-rounded
                life keeps me inspired and creative.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
