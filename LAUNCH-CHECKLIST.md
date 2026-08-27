# ShiftSignal launch checklist

Updated August 27, 2026.

## Ready now

- Homepage, campaign landing page, privacy policy, and terms of use are linked and crawlable.
- Canonical, Open Graph, Twitter card, robots, sitemap, and basic structured data are configured for `https://shiftsignal.co.uk/`.
- Telegram channel and bot links remain the live destinations, with QR codes and visible non-affiliation wording.
- Google Ads tag `AW-18413436878` is installed once in the `<head>` of each page, with consent denied by default.
- Consent-gated Telegram CTA conversions use the `Telegram CTA Click` action and `GBP` value settings.
- Image dimensions, lazy loading, async decoding, skip links, focus states, and descriptive link text are in place.

## Before spending on ads

1. Review the privacy policy and terms with a qualified adviser, and confirm the operator/support contact route is suitable for the business.
2. Open the bot and channel links on desktop and mobile, then verify the setup flow and the latest alert details.
3. Confirm the consent banner, accept analytics once, click each primary Telegram CTA, and confirm the expected event in the Google tag debugger.
4. In Google Ads, use `landing.html` as the initial destination and keep claims limited to alerts and discovery; do not imply guaranteed work or employer affiliation.
5. Keep the Telegram hand-off conversion secondary until it represents a meaningful business outcome and enough data has accumulated.

## Custom domain status

- GitHub Pages custom domain is saved as `shiftsignal.co.uk` and committed in `CNAME`.
- Cloudflare nameservers are active, but DNS records still need to point at GitHub Pages.
- Add `A` records for `@` to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`.
- Add a `CNAME` for `www` to `Bilawal122.github.io`.
- Wait for propagation, then enable Enforce HTTPS in GitHub Pages and verify both apex and `www`.
- Use `https://shiftsignal.co.uk/landing.html` as the Google Ads final URL.
