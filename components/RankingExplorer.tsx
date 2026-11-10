"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { asset } from "@/lib/assets";

type Category = {
  id: "overall" | "education" | "labor" | "digital";
  tab: string;
  cities: string[];
  eyebrow: string;
  leader: string;
  photo: { src: string; alt: string };
  note: string;
};

const MOSCOW = { src: "/media/moscow.webp", alt: "The Kremlin and the Moscow skyline" };

const CATEGORIES: Category[] = [
  {
    id: "overall",
    tab: "Overall",
    cities: ["Moscow", "Singapore", "Hong Kong", "Beijing", "Shanghai", "Seoul", "Istanbul", "Abu Dhabi", "Mexico City", "São Paulo"],
    eyebrow: "Overall leader",
    leader: "Moscow",
    photo: MOSCOW,
    note: "Moscow also leads in education and digital technologies and places third in the labor market.",
  },
  {
    id: "education",
    tab: "Education",
    cities: ["Moscow", "Singapore", "Seoul", "São Paulo", "Istanbul", "Taipei", "Hong Kong", "Kazan", "Busan", "Saint Petersburg"],
    eyebrow: "Education leader",
    leader: "Moscow",
    photo: MOSCOW,
    note: "Singapore and Seoul follow Moscow. São Paulo ranks fourth.",
  },
  {
    id: "labor",
    tab: "Labor Market",
    cities: ["Beijing", "Shenzhen", "Moscow", "Shanghai", "Abu Dhabi", "Hong Kong", "Saint Petersburg", "Taipei", "Guangzhou", "Singapore"],
    eyebrow: "Labor market leader",
    leader: "Beijing",
    photo: { src: "/media/beijing.webp", alt: "Office towers in Beijing" },
    note: "Beijing leads the labor market ranking, followed by Shenzhen and Moscow.",
  },
  {
    id: "digital",
    tab: "Digital Technologies",
    cities: ["Moscow", "Shanghai", "Singapore", "Hong Kong", "Seoul", "Busan", "Beijing", "Istanbul", "Kaohsiung", "Abu Dhabi"],
    eyebrow: "Digital technologies leader",
    leader: "Moscow",
    photo: MOSCOW,
    note: "Shanghai takes second place and Singapore ranks third in the digital technologies ranking.",
  },
];

export default function RankingExplorer() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (i: number, focus = false) => {
    setActive(i);
    if (focus) tabRefs.current[i]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const n = CATEGORIES.length;
    if (e.key === "ArrowRight") { e.preventDefault(); select((active + 1) % n, true); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); select((active - 1 + n) % n, true); }
    else if (e.key === "Home") { e.preventDefault(); select(0, true); }
    else if (e.key === "End") { e.preventDefault(); select(n - 1, true); }
  };

  return (
    <>
      <div className="ranking-tabs" role="tablist" aria-label="2026 ranking category" onKeyDown={onKeyDown}>
        {CATEGORIES.map((c, i) => (
          <button
            key={c.id}
            ref={(el) => { tabRefs.current[i] = el; }}
            id={`tab-${c.id}`}
            type="button"
            role="tab"
            aria-controls={`panel-${c.id}`}
            aria-selected={active === i}
            tabIndex={active === i ? 0 : -1}
            onClick={() => select(i)}
          >
            {c.tab}
          </button>
        ))}
      </div>

      {CATEGORIES.map((c, i) => (
        <div key={c.id} id={`panel-${c.id}`} role="tabpanel" aria-labelledby={`tab-${c.id}`} tabIndex={0} hidden={active !== i}>
          <div className="ranking-board">
            <table className="ranking-table">
              <caption className="sr-only">2026 top 10 · {c.tab}</caption>
              <thead>
                <tr><th scope="col">Rank</th><th scope="col">City</th></tr>
              </thead>
              <tbody>
                {c.cities.map((city, r) => (
                  <tr key={city}>
                    <td>{String(r + 1).padStart(2, "0")}</td>
                    <th scope="row">{city}</th>
                  </tr>
                ))}
              </tbody>
            </table>
            <figure className="ranking-leader">
              <div className="leader-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(c.photo.src)} alt={c.photo.alt} width={440} height={450} loading="lazy" />
                <span className="leader-rank" aria-label="Rank 1">01</span>
              </div>
              <figcaption className="leader-caption">
                <p className="eyebrow">{c.eyebrow}</p>
                <h3>{c.leader}</h3>
                <p>{c.note}</p>
              </figcaption>
            </figure>
          </div>
        </div>
      ))}
    </>
  );
}
