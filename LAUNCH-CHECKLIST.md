# ShiftSignal launch checklist

Updated August 27, 2026.

## Ready now

- Homepage, campaign landing page, privacy policy, and terms of use are linked and crawlable.
- Canonical, Open Graph, Twitter card, robots, sitemap, and basic structured data are configured for the current GitHub Pages URL.
- Telegram channel and bot links remain the live destinations, with QR codes and visible non-affiliation wording.
- Analytics and Google Ads conversion hooks are present but disabled until IDs are added.
- Image dimensions, lazy loading, async decoding, skip links, focus states, and descriptive link text are in place.

## Before spending on ads

1. Review the privacy policy and terms with a qualified adviser, and confirm the operator/support contact route is suitable for the business.
2. Open the bot and channel links on desktop and mobile, then verify the setup flow and the latest alert details.
3. If tracking is needed, edit `window.SHIFTSIGNAL_CONFIG` in `index.html` and `landing.html`:
   - `googleTagId`: a `G-...` Google Analytics ID or `AW-...` Google Ads tag ID.
   - `googleAdsConversionId`: optional Google Ads ID.
   - `googleAdsConversionLabel`: optional conversion label paired with that ID.
4. In Google Ads, use `landing.html` as the initial destination and keep claims limited to alerts and discovery; do not imply guaranteed work or employer affiliation.
5. Test the consent banner after adding IDs, accept analytics once, click each primary Telegram CTA, and confirm the expected event in the Google tag debugger.

## Pointing a custom domain later

1. Choose the domain and add it in the repository’s GitHub Pages settings as the custom domain.
2. For an apex domain, add the GitHub Pages A records shown by GitHub and any recommended IPv6 records. For a subdomain, add a CNAME pointing to `bilawal122.github.io`.
3. Wait for DNS to propagate, then enable HTTPS in GitHub Pages once the certificate is available.
4. Replace the current `bilawal122.github.io/ShiftSignal/` base in the canonical tags, Open Graph URLs, structured data, `robots.txt`, and `sitemap.xml`; then redeploy.
5. Update Google Ads final URLs, Search Console, and analytics settings to the custom domain.

No domain purchase or DNS change is included in this project.
