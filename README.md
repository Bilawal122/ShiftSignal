# ShiftSignal marketing site

Static, responsive marketing pages for a Telegram bot that helps workers find and manage warehouse shift alerts.

## Files

- `index.html` — brand homepage with the full product story.
- `landing.html` — focused, ad-friendly campaign page with a shorter path to Telegram.
- `styles.css` — responsive design system, layout, and components.
- `script.js` — mobile navigation and analytics-ready CTA events.
- `privacy.html` and `terms.html` — clearly marked launch placeholders.
- `robots.txt` and `sitemap.xml` — SEO starter files; replace `example.com`.
- `assets/` — public Telegram captures and QR codes for the channel and bot showcase.

## Run locally

Because this is a static build, you can open `index.html` directly in a browser. For a local server with clean relative paths, run:

```bash
cd amazon-shift-bot-site
python3 -m http.server 4173
```

Then visit `http://127.0.0.1:4173/`.

## Before launch

1. The Telegram showcase uses the live public channel at `https://t.me/Amazonwarehousejobb` and bot at `https://t.me/Amazon_warehouse_ukbot`.
2. Replace `example.com` in `robots.txt` and `sitemap.xml` with the real domain.
3. Replace `hello@example.com` with a monitored support address.
4. Finalize `privacy.html` and `terms.html` with qualified legal review. The current pages are placeholders, not legal advice.
5. Add a consent-aware Google tag or Google Tag Manager snippet before the closing `</head>` tag. `script.js` already emits `telegram_click` with a `cta_location` value when `gtag` or `dataLayer` is present.
6. Add canonical URLs and Open Graph image assets once the domain is known.

The homepage and campaign page now include a Telegram showcase with channel, bot, and example-alert captures, plus separate QR codes that link directly to the public destinations.

## Suggested Google Ads setup

- Send search traffic to `landing.html`, not the broader homepage.
- Keep ad groups tightly themed around terms such as `warehouse shift alerts`, `warehouse shift finder`, `find extra warehouse shifts`, and `Telegram shift alerts`.
- Use the existing CTA locations to build a primary conversion named `telegram_click`.
- Exclude terms that imply official Amazon ownership, hiring decisions, or guaranteed shifts unless the product truly supports them.
- Keep the disclaimer visible on every page: ShiftSignal is independent and not affiliated with or endorsed by Amazon.

## Quick competitive review

Reviewed August 23, 2026. Comparable worker-shift products generally lead with flexible shift access, search/filtering, or worker scheduling. That makes those features table stakes rather than a strong differentiator.

- **ShiftSmart** — emphasizes discovering and working flexible shifts through a worker marketplace. ShiftSignal borrows the clarity of a shift-first workflow but narrows the promise to fast, preference-based alerts.
- **Instawork** — emphasizes browsing local flexible work with worker profiles, scheduling, and shift details. ShiftSignal avoids trying to be a full marketplace and instead owns the lightweight Telegram notification layer.
- **Shyft** — emphasizes shift swapping, workforce communication, and scheduling for teams. ShiftSignal is positioned for individual workers searching for opportunities, not an employer’s internal scheduling system.

### Differentiators carried into the site

- Telegram-native setup instead of another dashboard to learn.
- Warehouse-focused language instead of a broad gig-work marketplace promise.
- Preference-first alerts with a clear shift snapshot.
- Explicit pause/control messaging for changing schedules.
- Clear non-affiliation and no-guarantee disclaimers, reducing risky ad language.

Use the competitor names above as positioning input, not as claims of partnership or endorsement. Re-check product pages and ad policies before publishing campaigns.


## Telegram destinations

- Channel: `https://t.me/Amazonwarehousejobb`
- Bot: `https://t.me/Amazon_warehouse_ukbot` (`@Amazon_warehouse_ukbot`)
