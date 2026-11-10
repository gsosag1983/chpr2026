import RankingExplorer from "@/components/RankingExplorer";
import { asset } from "@/lib/assets";

/* eslint-disable @next/next/no-img-element */

const svgProps = {
  "aria-hidden": true,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.65,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const DownloadIcon = ({ size }: { size: number }) => (
  <svg {...svgProps} width={size} height={size}><path d="M12 3v12m-4-4 4 4 4-4M4 16v4h16v-4" /></svg>
);

const domains = [
  {
    n: "01", title: "Education", cats: 4, inds: 15,
    text: "Educational opportunities, lifelong learning, and the diversity of ways residents can develop their skills.",
    icon: "m2 9 10-5 10 5-10 5L2 9Zm4 2v6c3 3 9 3 12 0v-6m4-2v6",
  },
  {
    n: "02", title: "Labor Market", cats: 3, inds: 9,
    text: "Access to decent work, employment opportunities for young people, and support for research and innovation.",
    icon: "M3 7h18v13H3zm5 0V4h8v3M3 13h18m-11 0v2h4v-2",
  },
  {
    n: "03", title: "Digital Technologies", cats: 2, inds: 5,
    text: "Digital infrastructure, use of online city services, and efforts to close gaps in access.",
    icon: "M3 4h18v13H3zm5 17h8m-4-4v4M7 11l3-3 3 4 4-4",
  },
];

const coauthors = [
  { img: "magdalena-gaete-sepulveda", name: "Magdalena Alejandra Gaete-Sepúlveda", role: "Associate Professor and Head of the Laboratory for Reputation Management in Education", org: "HSE University, St. Petersburg, Russia" },
  { img: "juan-cordoba-marentes", name: "Juan F. Córdoba-Marentes", role: "Vice Rector for Faculty and Research", org: "Universidad de La Sabana, Chía, Colombia" },
  { img: "miguel-esquivias-padilla", name: "Miguel Angel Esquivias Padilla", role: "Research Professor", org: "Universitas Airlangga, Surabaya, Indonesia" },
  { img: "haliyana-khalid", name: "Haliyana Khalid", role: "Associate Professor and Deputy Dean", org: "Azman Hashim International Business School, Universiti Teknologi Malaysia, Kuala Lumpur, Malaysia" },
];

export default function Page() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Universidad Panamericana, CHPR 2026 home">
            <img src={asset("/media/universidad-panamericana-logo.png")} alt="Universidad Panamericana" width={433} height={117} />
          </a>
          <nav aria-label="Main navigation">
            <a href="#rankings">Rankings</a>
            <a href="#methodology">Methodology</a>
            <a href="#team">Research team</a>
          </nav>
          <a className="header-download" href={asset("/reports/CHPR-2026-Full-Report.pdf")} download="CHPR-2026-Results.pdf">
            <DownloadIcon size={16} /> <span>Results 2026</span>
          </a>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-content">
            <p className="eyebrow hero-eyebrow">Second edition <span aria-hidden="true">/</span> 2026</p>
            <h1 id="hero-title">City Human <em>Potential</em> Ranking<span className="sr-only"> 2026</span></h1>
            <p className="hero-intro">CHPR examines how people develop their capabilities and how cities help them learn, find decent work, and take part in digital life.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#rankings">
                Explore rankings{" "}
                <svg {...svgProps} width={17} height={17}><path d="M12 4v15m-6-6 6 6 6-6" /></svg>
              </a>
            </div>
          </div>
          <figure className="hero-visual">
            <img src={asset("/media/report-cover-photo.webp")} alt="Four students with books on a curved staircase" width={1700} height={956} fetchPriority="high" />
            <figcaption>Photograph from the CHPR 2026 report cover</figcaption>
          </figure>
        </section>

        <section className="stats-band" aria-labelledby="stats-title">
          <div className="container stats-inner">
            <h2 id="stats-title" className="eyebrow">2026 at<br className="stats-break" /> a glance</h2>
            <dl className="stats">
              <div><dt>Cities</dt><dd>100</dd></div>
              <div><dt>Countries</dt><dd>47</dd></div>
              <div><dt>Continents</dt><dd>4</dd></div>
              <div><dt>Domains</dt><dd>3</dd></div>
            </dl>
          </div>
        </section>

        <section className="section coverage" id="coverage" aria-labelledby="coverage-title">
          <div className="container">
            <div className="section-intro">
              <div>
                <p className="eyebrow section-label"><span>01</span> Coverage</p>
                <h2 id="coverage-title">How the study defined its scope</h2>
              </div>
              <p>The study considered BRICS+ members, official partners, and countries that cooperate with the group. The selection criteria included regional integration and economic development.</p>
            </div>
            <div className="coverage-grid">
              <div className="coverage-copy">
                <dl className="coverage-stages">
                  <div><dt>Countries considered</dt><dd>50</dd></div>
                  <div><dt>Countries in the final ranking</dt><dd>47</dd></div>
                </dl>
                <p>The countries initially considered had a combined population of about 5.89 billion, or 71.6% of the world’s population. The final ranking covers cities in Eurasia, Africa, North America, and South America.</p>
                <p className="source-note">Nicaragua, Senegal, and Tajikistan were outside the final selection.</p>
              </div>
              <figure className="coverage-map">
                <img src={asset("/media/initial-coverage-map.webp")} width={981} height={477} alt="World map highlighting the countries in the initial selection" loading="lazy" />
                <figcaption>Initial country selection · CHPR 2026, pp. 13–35</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section ranking-section" id="rankings" aria-labelledby="ranking-title">
          <div className="container">
            <div className="section-intro">
              <div>
                <p className="eyebrow section-label"><span>02</span> Results</p>
                <h2 id="ranking-title">The leading cities</h2>
              </div>
              <p>Compare the overall top 10 with the rankings for education, the labor market, and digital technologies.</p>
            </div>
            <RankingExplorer />
            <p className="source-note">Source <cite>City Human Potential Ranking 2026</cite>, pp. 29–36.</p>
            <details className="ranking-map">
              <summary>See the leading cities on the world map</summary>
              <figure>
                <img src={asset("/media/leading-cities-map.webp")} width={1441} height={629} alt="The ten overall leaders plotted on a world map" loading="lazy" />
                <figcaption>City locations · CHPR 2026, p. 23</figcaption>
              </figure>
            </details>
          </div>
        </section>

        <section className="section spotlight" aria-labelledby="spotlight-title">
          <div className="container">
            <div className="section-intro">
              <div>
                <p className="eyebrow section-label"><span>03</span> Regional spotlight</p>
                <h2 id="spotlight-title">Latin America in the top 10</h2>
              </div>
              <p>Mexico City and São Paulo were the two Latin American cities in the overall top 10. São Paulo also placed fourth in education.</p>
            </div>
            <div className="spotlight-grid">
              <article className="city-profile">
                <div className="city-photo">
                  <img src={asset("/media/mexico-city.webp")} width={439} height={447} alt="Mexico City avenue lined with flowering jacaranda trees" loading="lazy" />
                  <span className="city-rank"><strong>09</strong><span>Overall</span></span>
                </div>
                <div className="city-copy"><p className="eyebrow">Mexico</p><h3>Mexico City</h3></div>
              </article>
              <article className="city-profile">
                <div className="city-photo sao-paulo">
                  <img src={asset("/media/sao-paulo.webp")} width={439} height={447} alt="Aerial view of São Paulo’s buildings and neighborhoods" loading="lazy" />
                  <span className="city-rank"><strong>10</strong><span>Overall</span></span>
                </div>
                <div className="city-copy"><p className="eyebrow">Brazil</p><h3>São Paulo</h3></div>
              </article>
            </div>
          </div>
        </section>

        <section className="section methodology" id="methodology" aria-labelledby="methodology-title">
          <div className="container">
            <div className="section-intro">
              <div>
                <p className="eyebrow section-label"><span>04</span> Methodology</p>
                <h2 id="methodology-title">What the ranking measures</h2>
              </div>
              <p>The 2026 edition retains the core categories used in 2023 and removes measures that did not yield stable, comparable results.</p>
            </div>
            <div className="perspectives">
              <article className="perspective">
                <p className="eyebrow">Residents’ capabilities</p>
                <h3>People for the City</h3>
                <p>Education, skills, health, and demographic conditions help describe the human potential a city’s residents can develop.</p>
              </article>
              <article className="perspective">
                <p className="eyebrow">Opportunities cities provide</p>
                <h3>City for People</h3>
                <p>Accessible infrastructure, quality public services, and inclusive institutions help residents develop and use their capabilities.</p>
              </article>
            </div>
            <div className="domain-grid">
              {domains.map((d) => (
                <article className="domain" key={d.n}>
                  <div className="domain-top">
                    <span className="domain-icon"><svg {...svgProps} width={25} height={25}><path d={d.icon} /></svg></span>
                    <span className="eyebrow">{d.n}</span>
                  </div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  <span className="domain-detail">{d.cats} categories · {d.inds} composite indicators</span>
                </article>
              ))}
            </div>
            <div className="method-summary">
              <div>
                <p className="eyebrow">Data sources</p>
                <h3>Open, verifiable data</h3>
                <p>The study prioritizes official statistics and publicly accessible, verifiable sources. It scales working indicators to a range of 0 to 1 and averages them within each composite indicator. Demography, urban governance, and science provide context for interpreting the results.</p>
              </div>
              <dl className="method-counts">
                <div><dt>Primary metrics</dt><dd>170</dd></div>
                <div><dt>Working indicators</dt><dd>143</dd></div>
                <div><dt>Composite indicators</dt><dd>29</dd></div>
              </dl>
            </div>
            <p className="source-note">Source <cite>City Human Potential Ranking 2026</cite>, pp. 20-28.</p>
          </div>
        </section>

        <section className="section outlook" id="outlook" aria-labelledby="outlook-title">
          <div className="container">
            <div className="section-intro">
              <div>
                <p className="eyebrow section-label"><span>05</span> Outlook</p>
                <h2 id="outlook-title">What cities can do next</h2>
              </div>
              <p>The report recommends connecting education, employment, and digital infrastructure in long-term plans that help cities retain talent and widen opportunity.</p>
            </div>
            <dl className="outlook-list">
              <div><dt>Education</dt><dd>Expand lifelong learning and build AI skills at every level of education.</dd></div>
              <div><dt>Labor Market</dt><dd>Connect education with industry and use skills-based hiring as new forms of work emerge.</dd></div>
              <div><dt>Digital Technologies</dt><dd>Use AI and city digital twins to improve services and widen access.</dd></div>
            </dl>
            <p className="source-note">Source <cite>City Human Potential Ranking 2026</cite>, pp. 31–36.</p>
          </div>
        </section>

        <section className="section team" id="team" aria-labelledby="team-title">
          <div className="container">
            <div className="section-intro">
              <div>
                <p className="eyebrow section-label"><span>06</span> Research team</p>
                <h2 id="team-title">The international working group</h2>
              </div>
              <p>Universidad Panamericana brought together researchers from five universities for the 2026 edition.</p>
            </div>
            <div className="team-grid">
              <article className="lead-author">
                <img src={asset("/media/guillermo-sosa-gomez.webp")} width={375} height={375} alt="" loading="lazy" />
                <div>
                  <p className="eyebrow">Scientific director</p>
                  <h3>Guillermo Sosa-Gómez</h3>
                  <p>Professor and Researcher, Faculty of Economics and Business Sciences<br />Universidad Panamericana, Guadalajara, Mexico</p>
                </div>
              </article>
              <div className="coauthors">
                <h3 className="eyebrow">Coauthors</h3>
                <ul>
                  {coauthors.map((c) => (
                    <li key={c.img}>
                      <img src={asset(`/media/${c.img}.webp`)} width={56} height={56} alt="" loading="lazy" />
                      <div><strong>{c.name}</strong><span>{c.role}</span><span>{c.org}</span></div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="source-note">Roles and affiliations as listed in the <cite>CHPR 2026 report</cite>, pp. 3 and 115.</p>
          </div>
        </section>

        <section className="report" id="report" aria-labelledby="resources-title">
          <div className="container">
            <h2 id="resources-title" className="eyebrow section-label"><span aria-hidden="true">07</span> Resources</h2>
            <div className="report-inner">
              <div className="report-current">
                <h3 id="report-title" className="report-title">Full <em>Report 2026</em></h3>
                <a className="report-download" href={asset("/reports/CHPR-2026-Public-Report.pdf")} download="CHPR-2026-Full-Report.pdf">
                  <img src={asset("/media/report-cover-photo.webp")} width={1700} height={956} alt="" loading="lazy" />
                  <span><DownloadIcon size={19} /> Full Report 2026</span>
                </a>
              </div>
              <div className="report-archive">
                <p className="eyebrow">Previous edition</p>
                <h3>City Human Potential Ranking 2023</h3>
                <p id="report-2023-note" className="report-archive-note">English report · 104 pages</p>
                <a className="report-download" href={asset("/reports/CHPR-2023.pdf")} download="" aria-describedby="report-2023-note">
                  <img src={asset("/media/chpr-2023-cover-photo.jpg")} width={1816} height={2568} alt="" loading="lazy" />
                  <span><DownloadIcon size={19} /> Download 2023 PDF</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>City Human Potential Ranking <span className="footer-year">/ 2026</span></span>
          <a href="#top">
            Back to top{" "}
            <svg {...svgProps} width={16} height={16}><path d="M12 20V5m-6 6 6-6 6 6" /></svg>
          </a>
        </div>
      </footer>
    </>
  );
}
