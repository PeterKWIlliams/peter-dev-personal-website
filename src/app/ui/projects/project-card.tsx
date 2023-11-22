import { cn } from "@/lib/utils";
import { type IconType } from "react-icons/lib";
import {
  SiJavascript,
  SiNextdotjs,
  SiPrisma,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGithub,
  SiTypescript,
} from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

import Link from "next/link";

export function ProjectCard(props: Project) {
  return (
    <article className="flex h-full w-full flex-col space-y-6 rounded-lg border-2 border-slate-900 bg-zinc-200 p-6 ">
      {" "}
      <h4 className="text-lg font-semibold underline">{props.title}</h4>
      <div className="my-2 flex space-x-2">
        {props.stackIcons?.map((Icon, index) => (
          <Icon key={index} className="h-4 w-4" />
        ))}
      </div>
      <div className=" inline-flex justify-between space-x-5">
        <Link
          href={props.githubUrl}
          className="  rounded border-2 border-blue-800 bg-blue-200 text-3xl hover:cursor-pointer hover:bg-purple-400"
        >
          <SiGithub />
        </Link>
        {props.url ? (
          <Link
            href={props.url}
            className=" rounded border-2 border-blue-800 bg-blue-200 text-3xl hover:cursor-pointer hover:bg-purple-400"
          >
            <FaExternalLinkAlt />
          </Link>
        ) : null}
      </div>
    </article>
  );
}

export const projects: Project[] = [
  {
    title: "Inventory Mangement System",
    githubUrl:
      "https://github.com/PeterKWIlliams/inventory_management_nextjs_prisma",
    url: "https://inventory-management-nextjs-prisma.vercel.app/",
    stackIcons: [SiNextdotjs, SiTypescript, SiPrisma, SiTailwindcss],
    status: "in progress",
  },

  {
    title: "Language Learning App",
    githubUrl: "https://github.com/PeterKWIlliams/react_language_app",
    stackIcons: [SiJavascript, SiReact, SiBootstrap],
    status: "complete",
  },
  {
    title: "Learning Tracker",
    githubUrl:
      "https://github.com/PeterKWIlliams/inventory_management_nextjs_prisma",
    stackIcons: [SiNextdotjs, SiTypescript, SiTailwindcss],
    status: "in progress",
  },
  {
    title: "Twitter simple clone",
    githubUrl:
      "https://github.com/PeterKWIlliams/chirp_twitter_clone_create_t3_nextjs_trpc",
    url: "https://chirp-twitter-clone-create-t3-nextjs-trpc.vercel.app/",
    stackIcons: [SiNextdotjs, SiTypescript, SiPrisma, SiTailwindcss],
    status: "in progress",
  },
];
export interface Project {
  status?: "complete" | "in progress";
  title: string;
  stackIcons?: IconType[];
  githubUrl: string;
  url?: string;
}
