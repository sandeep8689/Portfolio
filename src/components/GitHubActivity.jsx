import { useEffect, useState } from "react";
import { Github, Star, GitFork, ArrowUpRight, Loader2 } from "lucide-react";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { Reveal } from "./Section";
import { Button } from "./ui/button";

// Fallback list: built from projects that have a real repo URL.
const featuredRepos = projects
  .filter((p) => p.repo)
  .map((p) => ({ name: p.repo.split("/").pop(), description: p.description, html_url: p.repo, language: null }));

export default function GitHubActivity() {
  const [state, setState] = useState({ status: "loading", repos: [] });

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://api.github.com/users/${profile.githubUsername}/repos?per_page=100&sort=pushed`, {
      signal: controller.signal,
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((r) => {
        if (!r.ok) throw new Error(`GitHub API ${r.status}`);
        return r.json();
      })
      .then((data) => setState({ status: "ok", repos: data.filter((r) => !r.fork) }))
      .catch((e) => {
        if (e.name !== "AbortError") setState({ status: "error", repos: [] });
      });
    return () => controller.abort();
  }, []);

  const live = state.status === "ok" && state.repos.length > 0;
  const repos = live ? state.repos.slice(0, 6) : featuredRepos;

  return (
    <div id="github" className="mt-14 scroll-mt-24">
      <Reveal className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">GitHub</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {live
              ? `Latest public repositories, fetched live from GitHub (${state.repos.length} public, non-fork).`
              : "Featured repositories from my projects. Live GitHub data could not be loaded, so this is a curated list."}
          </p>
        </div>
        <Button href={profile.links.github} variant="outline" size="sm">
          <Github size={15} /> View My GitHub
        </Button>
      </Reveal>

      {state.status === "loading" && (
        <p className="glass flex items-center gap-3 p-5 text-sm text-muted-foreground">
          <Loader2 size={16} className="animate-spin" /> Loading repositories…
        </p>
      )}

      {state.status !== "loading" && (
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((r) => (
            <li key={r.html_url} className="glass glass-hover flex flex-col p-5">
              <a
                href={r.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-2 font-mono text-sm font-medium text-violet-200"
              >
                <span className="break-all">{r.name}</span>
                <ArrowUpRight size={16} className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {r.description || "No description provided."}
              </p>
              <div className="mt-auto flex items-center gap-4 pt-4 text-xs text-slate-300">
                {r.language && (
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-blue-400" /> {r.language}
                  </span>
                )}
                {live && (
                  <>
                    <span className="flex items-center gap-1"><Star size={12} /> {r.stargazers_count}</span>
                    <span className="flex items-center gap-1"><GitFork size={12} /> {r.forks_count}</span>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
