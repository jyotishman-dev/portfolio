"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart, Play } from "lucide-react";

type Tweet = {
  text: string;
  date: string;
  likes: number;
  href: string;
  hasVideo?: boolean;
};

export default function TweetCarousel({
  tweets,
  avatar,
  name,
  handle,
}: {
  tweets: Tweet[];
  avatar: string;
  name: string;
  handle: string;
}) {
  return (
    <Carousel opts={{ align: "start", dragFree: true }} className="w-full relative">
      <CarouselContent className="-ml-3 no-scrollbar">
        {tweets.map((t, idx) => (
          <CarouselItem key={t.href} className="basis-[85%] pl-3 sm:basis-[320px] lg:basis-[340px]">
            <a
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 sm:p-5 transition hover:border-[var(--muted)]/40"
            >
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={avatar} alt={name} className="size-10 rounded-full object-cover" />
                    <div className="text-xs">
                      <div className="font-semibold text-[var(--text)]">{name}</div>
                      <div className="text-[var(--muted)] flex items-center gap-1">
                        <span>{handle}</span>
                        <span>·</span>
                        <span className="text-blue-400 font-medium hover:underline">Follow</span>
                      </div>
                    </div>
                  </div>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[var(--muted)] shrink-0">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>

                {/* Tweet Body */}
                <p className="text-xs leading-relaxed text-[var(--text)] whitespace-pre-line line-clamp-6">
                  {t.text}
                </p>

                {/* Video / Media Preview (for tweets with video) */}
                {(t.hasVideo || idx === 1 || idx === 2) && (
                  <div className="relative overflow-hidden rounded-xl bg-neutral-900/80 aspect-video flex items-center justify-center border border-[var(--border)]">
                    <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/75 text-[10px] font-semibold text-white z-10">
                      Watch on X
                    </span>
                    <div className="size-10 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="h-5 w-5 ml-0.5 fill-white" />
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-[11px] text-[var(--muted)]">
                <span>{t.date}</span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-rose-400 font-medium">
                    <Heart className="h-3.5 w-3.5 fill-rose-400" /> {t.likes}
                  </span>
                  <span className="hover:text-[var(--text)] transition-colors">Reply</span>
                  <span className="hover:text-[var(--text)] transition-colors">Copy link</span>
                </div>
              </div>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-3 top-1/2 -translate-y-1/2 h-8 w-8 border border-[var(--border)] bg-black/80 text-white hover:bg-black p-0 z-10 hidden sm:flex" />
      <CarouselNext className="-right-3 top-1/2 -translate-y-1/2 h-8 w-8 border border-[var(--border)] bg-black/80 text-white hover:bg-black p-0 z-10 hidden sm:flex" />
    </Carousel>
  );
}