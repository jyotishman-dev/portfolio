import { profile as p } from "@/data/profile";
import ThemeToggle from "@/components/ThemeToggle";
import { Stage, Card } from "@/components/Motion";
import TweetCarousel from "@/components/TweetCarousel";
import {
  FileText,
  Flame,
  ArrowUpRight,
  Mail,
} from "lucide-react";

const GithubIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const XIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);


export default function Home() {
  return (
    <Stage className="mx-auto grid max-w-[1192px] grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-2 sm:py-8 lg:grid-cols-3 lg:gap-5 xl:px-0">
      {/* 1. Hero Card (Spans 2 cols) */}
      <Card className="relative rounded-bento p-5 sm:p-7 bg-[var(--card)] flex items-center gap-5 sm:col-span-2 min-h-[160px]">
        <ThemeToggle />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.avatar}
          alt={p.name}
          className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-full object-cover ring-2 ring-[var(--border)]"
        />
        <div className="min-w-0 pr-10">
          <h1 className="text-xl sm:text-[22px] leading-snug tracking-[-0.04em] text-[var(--text)]">
            I&apos;m <span className="font-semibold">{p.name}</span>,<br />
            {p.role.split(" Real-time Systems")[0]} <span className="font-bold">Real-time Systems</span>
          </h1>
          <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-[var(--muted)]">
            <span>{p.status}</span>
            {p.openToWork && (
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                Open to full-time roles
              </span>
            )}
          </p>
        </div>
      </Card>

      {/* 2. About Card (Spans 1 col, 2 rows on lg) */}
      <Card className="relative rounded-bento p-5 sm:p-6 bg-[var(--card)] sm:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col justify-between">
        <div>
          <h2 className="text-lg leading-snug text-[var(--text)] font-normal">
            I&apos;m a backend engineer who ships real-time systems end to end,{" "}
            <span className="font-bold">now building autonomous AI agents.</span>
          </h2>
          <div className="mt-5 space-y-4 text-xs sm:text-sm leading-relaxed text-[var(--muted)]">
            {p.about.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
        </div>
      </Card>

      {/* 3. GitHub Card */}
      <a
        href={p.github.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <Card className="relative rounded-bento p-5 sm:p-6 bg-[var(--card)] transition-transform duration-200 hover:-translate-y-0.5 h-full">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[var(--text)] text-[var(--bg)]">
              <GithubIcon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h2 className="text-lg leading-snug text-[var(--text)] font-normal">{p.github.label}</h2>
              <p className="text-xs sm:text-sm text-[var(--muted)]">{p.github.sub}</p>
            </div>
          </div>
          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[var(--muted)]">{p.github.blurb}</p>
        </Card>
      </a>

      {/* 4. Resume Card */}
      <a
        href={p.resume.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <Card className="relative rounded-bento p-5 sm:p-6 bg-[var(--card)] transition-transform duration-200 hover:-translate-y-0.5 h-full">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[var(--text)] text-[var(--bg)]">
              <FileText className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h2 className="text-lg leading-snug text-[var(--text)] font-normal">{p.resume.label}</h2>
              <p className="text-xs sm:text-sm text-[var(--muted)]">{p.resume.sub}</p>
            </div>
          </div>
          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[var(--muted)]">{p.resume.blurb}</p>
        </Card>
      </a>

      {/* 5. Where I've worked Card */}
      <Card className="relative rounded-bento p-5 sm:p-6 bg-[var(--card)]">
        <h2 className="text-lg leading-snug text-[var(--text)] font-normal">Where I&apos;ve worked</h2>
        <p className="text-xs sm:text-sm text-[var(--muted)]">Founding engineer and contract builds.</p>
        <ul className="mt-4 space-y-2.5">
          {p.work.map((w) => (
            <li key={w.company} className="flex gap-3 rounded-xl bg-[var(--pill)]/60 p-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[var(--pill)] text-sm font-bold text-[var(--text)]">
                {w.company[0]}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-xs sm:text-sm font-medium text-[var(--text)]">{w.company}</h3>
                <p className="text-[11px] text-[var(--muted)]">{w.title}</p>
                <p className="text-[10px] text-[var(--subtle)]">{w.period}</p>
                <p className="mt-1 text-[11px] leading-relaxed text-[var(--muted)]">{w.blurb}</p>
              </div>
            </li>
          ))}
        </ul>
      </Card>

      {/* 6. Super 30 Card */}
      <Card className="relative rounded-bento p-5 sm:p-6 bg-[var(--card)] flex flex-col justify-between">
        <div>
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[var(--text)] text-[var(--bg)]">
              <Flame className="h-5 w-5 fill-current" />
            </span>
            <div className="min-w-0">
              <h2 className="text-lg leading-snug text-[var(--text)] font-normal">
                Harkirat 100xDevs · BootCamp{" "}
               
              </h2>
              <p className="text-xs sm:text-sm text-[var(--muted)]">{p.cohort.sub}</p>
            </div>
          </div>
          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[var(--muted)]">{p.cohort.blurb}</p>
          <p className="mt-4 text-[10px] font-medium uppercase tracking-wider text-[var(--subtle)]">SHIPPED HERE</p>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {p.cohort.shipped.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg bg-[var(--pill)] px-2.5 py-1 text-xs text-[var(--text)] transition-opacity hover:opacity-80"
                >
                  {s.label}
                  <ArrowUpRight className="h-3 w-3 text-[var(--subtle)]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 pt-2 text-xs text-[var(--subtle)] flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {p.cohort.period}
        </p>
      </Card>

      {/* 7. Things I've built Card (Spans 1 col, 2 rows height on lg) */}
      <Card className="relative rounded-bento p-5 sm:p-6 border border-dashed border-[var(--border)] bg-[var(--card)] flex flex-col sm:col-span-2 lg:col-span-1 lg:row-span-2">
        <h2 className="text-lg leading-snug text-[var(--text)] font-normal">Things I&apos;ve built</h2>
        <p className="text-xs sm:text-sm text-[var(--muted)]">Open source, all of it.</p>
        <ul className="no-scrollbar mt-4 flex max-h-[26rem] flex-col gap-2 overflow-y-auto lg:h-0 lg:max-h-none lg:grow lg:justify-between">
          {p.projects.map((x) => (
            <li key={x.name}>
              <a
                href={x.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 overflow-hidden rounded-[10px] bg-[var(--pill)]/50 p-1.5 transition-colors hover:bg-[var(--pill)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={x.img}
                  alt={x.name}
                  loading="lazy"
                  className="h-14 w-28 shrink-0 rounded-md object-cover object-top bg-[var(--pill)]"
                />
                <span className="min-w-0 pr-2">
                  <span className="block truncate text-xs sm:text-sm font-medium text-[var(--text)]">{x.name}</span>
                  <span className="block truncate text-[11px] text-[var(--muted)]">{x.stack}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Card>

      {/* 8. Featured Project Card */}
      <Card className="relative rounded-bento p-5 sm:p-6 bg-[var(--card)] flex flex-col justify-between">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-wider text-[var(--subtle)]">FEATURED PROJECT</p>
          <h2 className="mt-1 text-lg leading-snug text-[var(--text)] font-normal">{p.featured.name}</h2>
          <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[var(--muted)] line-clamp-2">{p.featured.blurb}</p>
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-[var(--pill)] px-2.5 py-1 text-xs font-medium text-[var(--text)]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {p.featured.badge}
          </p>
          <div className="mt-4 overflow-hidden rounded-xl bg-gradient-to-br from-rose-200 via-orange-100 to-violet-200 dark:from-rose-900/40 dark:via-orange-900/30 dark:to-violet-900/40 p-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.featured.img} alt="Screensy screenshot" className="w-full rounded-lg shadow-md object-cover aspect-[16/10]" />
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <a
            href={p.featured.site}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-[10px] bg-[var(--pill)] py-2 text-center text-xs sm:text-sm font-bold text-[var(--text)] transition-opacity hover:opacity-80"
          >
            Know more
          </a>
          <a
            href={p.featured.repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Screensy on GitHub"
            className="flex w-10 items-center justify-center rounded-[10px] bg-[var(--pill)] text-[var(--text)] transition-opacity hover:opacity-80"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
        </div>
      </Card>

      {/* 9. Read my blogs Card */}
      <Card className="relative rounded-bento p-5 sm:p-6 bg-[var(--card)] flex flex-col justify-between overflow-hidden">
        <div>
          <a href={p.blogs.href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-85">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[var(--text)] text-[var(--bg)] font-bold text-sm">
                M
              </span>
              <div className="min-w-0">
                <h2 className="text-lg leading-snug text-[var(--text)] font-normal">Read my blogs</h2>
                <p className="text-xs sm:text-sm text-[var(--muted)]">Medium</p>
              </div>
            </div>
          </a>
          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[var(--muted)]">{p.blogs.blurb}</p>
          <div className="no-scrollbar -mr-5 mt-4 flex gap-3 overflow-x-auto sm:-mr-6 pb-1">
            {p.blogs.posts.map((b) => (
              <a
                key={b.href}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-[60%] sm:w-[170px] shrink-0 block space-y-1.5"
                title={b.title}
              >
                <div className="aspect-[5/4] overflow-hidden rounded-lg bg-[var(--pill)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                </div>
                <span className="mt-1 line-clamp-2 block text-xs text-[var(--muted)] group-hover:text-[var(--text)] leading-snug">
                  {b.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Card>

      {/* 10. Building in public (Full width - 3 cols) */}
      <Card className="relative rounded-bento p-5 sm:p-6 bg-[var(--card)] sm:col-span-2 lg:col-span-3 space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-lg leading-snug text-[var(--text)] font-normal">Building in public</h2>
            <p className="text-xs sm:text-sm text-[var(--muted)]">Skits, launches and hackathon demos from X.</p>
          </div>
          <a
            href={p.contact.x}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[var(--pill)] px-3 py-1.5 text-xs sm:text-sm font-bold text-[var(--text)] transition-opacity hover:opacity-80"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Follow
          </a>
        </div>
        <TweetCarousel tweets={p.tweets} avatar={p.avatar} name={p.name} handle="@Amitesh48256" />
      </Card>

      {/* 11. Contact Row (Full width - 3 cols) */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:col-span-2 lg:col-span-3">
        {/* Left Card: Let's work together */}
        <Card className="relative rounded-bento p-5 sm:p-6 bg-[var(--card)] sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-base sm:text-lg text-[var(--text)] font-medium">Let&apos;s work together</h2>
            <p className="text-xs sm:text-sm text-[var(--muted)]">To get started, have a 1:1 chat with me!</p>
          </div>
          <a
            href={p.contact.email}
            className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-5 py-2.5 text-xs sm:text-sm font-semibold hover:bg-neutral-200 transition-colors shadow-sm shrink-0"
          >
            <Mail className="h-4 w-4" />
            Email me
          </a>
        </Card>

        {/* LinkedIn Button Card */}
        <a
          href={p.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <Card className="relative rounded-bento p-5 bg-[var(--card)] flex items-center justify-center h-full transition-transform hover:-translate-y-0.5">
            <LinkedinIcon className="h-6 w-6 text-[var(--text)] group-hover:scale-110 transition-transform" />
          </Card>
        </a>

        {/* X Button Card */}
        <a
          href={p.contact.x}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <Card className="relative rounded-bento p-5 bg-[var(--card)] flex items-center justify-center h-full transition-transform hover:-translate-y-0.5">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-[var(--text)] group-hover:scale-110 transition-transform">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Card>
        </a>
      </div>

    
    </Stage>
  );
}