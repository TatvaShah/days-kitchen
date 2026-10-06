import Image from "next/image";
import { Header } from "@/components/header";
import { DmButton } from "@/components/dm-button";
import { Reels } from "@/components/reels";
import {
  bakes,
  dishes,
  getSiteUrl,
  links,
  locations,
  menuGroups,
  packageAlso,
  packageMains,
  phones,
  reviews,
  venueIncludes,
} from "@/lib/content";

export default function HomePage() {
  const siteUrl = getSiteUrl();
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": `${siteUrl}/#brimley`,
        name: "Day's Kitchen",
        alternateName: "Day's Kitchen 2",
        image: `${siteUrl}/media/palabok.webp`,
        servesCuisine: "Filipino",
        telephone: "+1-437-261-4291",
        url: siteUrl,
        menu: links.uberEats,
        address: {
          "@type": "PostalAddress",
          streetAddress: "2101 Brimley Rd #108",
          addressLocality: "Scarborough",
          addressRegion: "ON",
          postalCode: "M1S 2B4",
          addressCountry: "CA",
        },
        openingHours: "Mo-Su 09:00-21:00",
        sameAs: [links.instagram, links.facebook, links.linktree, links.uberEats],
      },
      {
        "@type": "Restaurant",
        "@id": `${siteUrl}/#tapscott`,
        name: "Day's Kitchen",
        image: `${siteUrl}/media/halo-bowl.webp`,
        servesCuisine: "Filipino",
        telephone: "+1-437-261-4291",
        url: siteUrl,
        menu: links.uberEats,
        address: {
          "@type": "PostalAddress",
          streetAddress: "31 Tapscott Rd",
          addressLocality: "Scarborough",
          addressRegion: "ON",
          postalCode: "M1B 4Y7",
          addressCountry: "CA",
        },
        openingHours: "Mo-Su 09:00-20:30",
        sameAs: [links.instagram, links.facebook, links.linktree, links.uberEats],
      },
    ],
  };

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="wrap hero" id="top">
          <div>
            <p className="kicker">Scarborough · two kitchens</p>
            <h1>Happiness is homemade.</h1>
            <p className="lede">
              Chef Day&apos;s Kitchen serves Filipino dishes made with love and premium
              ingredients. Lutong ulam, all day silog, palabok, halo halo, and a counter
              full of bread baked fresh. Tara, kain tayo.
            </p>
            <div className="hero-actions">
              <a className="btn btn-chili" href={links.uberEats} target="_blank" rel="noreferrer">
                Order on Uber Eats
              </a>
              <DmButton className="btn btn-ink">Message on Instagram</DmButton>
              <a className="btn btn-ghost" href={links.linktree} target="_blank" rel="noreferrer">
                Linktree
              </a>
            </div>
            <ul className="hours-pills">
              <li>Brimley, daily 9 AM to 9 PM</li>
              <li>FreshLand, daily 9 AM to 8:30 PM</li>
              <li>629 on Instagram</li>
            </ul>
          </div>
          <figure className="hero-photo">
            <Image
              src="/media/palabok.webp"
              alt="Bowl of palabok with shrimp, egg, and crushed chicharon from Day's Kitchen"
              width={1080}
              height={1080}
              priority
              sizes="(min-width: 800px) 46vw, 100vw"
            />
            <figcaption>
              Our famous palabok. Generous toppings, house made sauce, always cooked to order.
            </figcaption>
          </figure>
        </section>

        <section className="wrap section" id="menu">
          <h2>On the table</h2>
          <p className="section-intro">
            From their own posts: congee, champorado, batil patong, overload palabok,
            lumpiang Shanghai, isaw, iskrambol, and halo halo. Prices shown later are
            from the Uber Eats menu for the Tapscott store, in Canadian dollars.
          </p>
          <div className="dish-grid">
            {dishes.map((dish) => (
              <article className="dish-card" key={dish.title}>
                <Image
                  src={dish.src}
                  alt={dish.alt}
                  width={dish.width}
                  height={dish.height}
                  sizes="(min-width: 800px) 30vw, 100vw"
                />
                <div>
                  <h3>{dish.title}</h3>
                  <p>{dish.line}</p>
                  {"price" in dish && dish.price ? <p className="price">{dish.price} on Uber Eats</p> : null}
                </div>
              </article>
            ))}
          </div>

          <div className="menu-board">
            {menuGroups.map((group) => (
              <section className="menu-group" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.note}</p>
                {group.items.map((item) => (
                  <div className="menu-row" key={item.name}>
                    <div>
                      <strong>{item.name}</strong>
                      <span>{item.detail}</span>
                    </div>
                    <b>{item.price}</b>
                  </div>
                ))}
              </section>
            ))}
          </div>
          <ul className="bake-row" aria-label="Baked fresh daily">
            {bakes.map((bake) => (
              <li key={bake}>{bake}</li>
            ))}
          </ul>
          <p className="fine-print">
            Baked fresh daily at both shops: Spanish bread, ensaymada, pan de coco, bonete,
            kababayan, pastries, and cakes. No bakery prices are printed on the public Uber
            Eats list used here. The full menu, including the Brimley branch menu and the
            2025 catering menu, is on their Linktree.
          </p>
          <p>
            <a className="btn btn-ghost" href={links.uberEats} target="_blank" rel="noreferrer">
              See the live Uber Eats menu
            </a>
          </p>
        </section>

        <section className="wrap section" id="kitchen">
          <h2>From the kitchen</h2>
          <p className="section-intro">
            Recent reels from @dayskitchenca, saved here so they play on the page. Their
            highlights are named CATERING, CUSTOMER LOVE, MUST-TRY, CreatorCircle, and
            DELIVERY.
          </p>
          <Reels />
        </section>

        <section className="wrap section" id="catering">
          <div className="feast">
            <Image
              src="/media/buffet.webp"
              alt="Catering buffet trays of Filipino dishes set along a long table"
              width={1080}
              height={1440}
              sizes="(min-width: 800px) 42vw, 100vw"
            />
            <div className="feast-copy">
              <p className="kicker">Private events</p>
              <h2>Your event, our passion.</h2>
              <p>
                They host private events at the Brimley shop and cater celebrations of every
                kind. The 2025 private event package is written for 20 to 30 guests. The PDF
                does not print a package price, so ask Day&apos;s Kitchen for the current rate.
                Please order 2 to 3 days in advance. If a dish is not on the menu, they say
                they are happy to customize.
              </p>
              <h3>Pick your top five</h3>
              <p>Menu items shown on the package are samples. The counted mains are:</p>
              <ul>
                {packageMains.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3>Also on the package</h3>
              <ul>
                {packageAlso.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3>The room</h3>
              <ul>
                {venueIncludes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                {phones.map((phone, index) => (
                  <span key={phone.href}>
                    {index > 0 ? " · " : null}
                    <a href={phone.href}>{phone.label}</a>
                  </span>
                ))}
              </p>
              <div className="hero-actions">
                <a className="btn btn-chili" href={links.eventPackage} target="_blank" rel="noreferrer">
                  Open the event package
                </a>
                <DmButton className="btn btn-ghost">Ask about catering</DmButton>
              </div>
            </div>
          </div>
        </section>

        <section className="wrap section" id="visit">
          <h2>Two spots in Scarborough</h2>
          <p className="section-intro">
            Dine in, takeout, and walk ins are welcome. Uber Eats for the Tapscott store
            shows 9:30 AM to 8:00 PM. Call ahead if you are timing a visit, because older
            posts have listed different hours.
          </p>
          <div className="places">
            {locations.map((place) => (
              <article className="place" key={place.id} id={place.id}>
                <div className="place-copy">
                  <p className="kicker">{place.rating} on {place.ratingSource}</p>
                  <h3>{place.name}</h3>
                  {place.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                  <p>{place.landmark}</p>
                  <p>
                    <strong>{place.hours}</strong>
                  </p>
                  <p className="fine-print">{place.hoursNote}. Google lists this shop as {place.googleName}.</p>
                  <p>
                    <a href={place.phone.href}>{place.phone.label}</a>
                  </p>
                  <p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.mapQuery)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Directions
                    </a>
                  </p>
                </div>
                <iframe
                  className="map-frame"
                  title={`Map of Day's Kitchen at ${place.addressLines[0]}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(place.mapQuery)}&z=16&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </article>
            ))}
          </div>
          <figure className="hero-photo visit-photo" style={{ marginTop: "1rem" }}>
            <Image
              src="/media/counter.webp"
              alt="Day's Kitchen counter inside Freshland Supermarket with the red sign and menu boards"
              width={1080}
              height={1921}
              sizes="(min-width: 800px) 70vw, 100vw"
            />
            <figcaption>The FreshLand counter, from their September 2026 reel.</figcaption>
          </figure>
        </section>

        <section className="wrap section" id="reviews">
          <h2>What guests wrote</h2>
          <p className="section-intro">
            Uber Eats lists the Tapscott store at 4.6 from 250+ ratings. Yelp lists the
            Brimley shop at 4.3 from 4 reviews. Google Maps shows 3.7 for Brimley and 4.1
            for Tapscott. The lines below are short quotes from those public pages.
          </p>
          <div className="quotes">
            {reviews.map((review) => (
              <blockquote key={review.name + review.source}>
                <p>&ldquo;{review.quote}&rdquo;</p>
                <footer>
                  {review.name} · {review.source} · {review.when}
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="hero-actions">
            <a className="btn btn-chili" href={links.uberEats} target="_blank" rel="noreferrer">
              Order on Uber Eats
            </a>
            <a className="btn btn-ghost" href={links.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="btn btn-ghost" href={links.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="wrap">
          <p>
            Day&apos;s Kitchen · Filipino cuisine & café · Scarborough. This is a prospect
            demo. Hours, prices, and menus belong to the restaurant and can change.
          </p>
          <p>
            Website by <a href={links.claudaura}>ClaudAura</a>
          </p>
        </div>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
    </>
  );
}
