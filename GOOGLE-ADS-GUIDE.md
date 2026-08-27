# ShiftSignal Google Ads playbook

Updated August 27, 2026.

This is a practical starting plan for sending UK warehouse-shift search traffic to ShiftSignal. It is deliberately conservative: the first goal is to learn which searches produce qualified Telegram starts without making claims the service cannot prove.

## 1. Fix the destination first

- Primary site: `https://shiftsignal.co.uk/`
- Initial ads destination: `https://shiftsignal.co.uk/landing.html`
- Primary action: start the Telegram bot.
- Secondary action: follow the public Telegram channel.
- Keep the visible wording that ShiftSignal is independent and not affiliated with, endorsed by, or sponsored by Amazon or any employer named in an alert.
- Do not advertise until the Cloudflare DNS records resolve and GitHub Pages shows Enforce HTTPS as available and enabled.

## 2. Account basics

1. Create or use the Google Ads account owned by the business, not a personal throwaway account.
2. Set the billing country, currency, time zone, business name, and support contact carefully. These are awkward to change later.
3. Link Google Ads to a Google Analytics property if you want reporting across paid and organic traffic. Do not add tracking IDs to the site until the privacy and consent wording has been reviewed.
4. Create one conversion action for a meaningful Telegram start or click. Treat a click as a lead signal, not proof that someone joined, applied, or got a shift.
5. Keep the campaign Search-only at launch. Avoid Performance Max, display placements, and broad automated expansion until the first search terms are understood.

## 3. Recommended first campaign

**Campaign:** Search | UK warehouse shift alerts | Test

**Network:** Google Search only.

**Location:** United Kingdom. Start with presence in the location rather than people showing interest in it, unless the account interface uses different wording.

**Schedule:** Run all day initially if alerts can arrive at any time. Review the first two weeks before restricting hours.

**Budget:** Start at a level you can afford to lose while learning. A practical test is £10-£20 per day for 14 days, with a stop rule if search terms are irrelevant or the cost per qualified Telegram start is clearly too high.

**Bidding:** Start with a controlled click-focused strategy while volume is low. Move toward conversion-focused bidding only after the conversion is reliable and there is enough real conversion data to guide it.

## 4. Ad-group themes

Keep each ad group tightly related to the landing-page promise. Do not put every warehouse or Amazon-related term into one mixed group.

### Warehouse shift alerts

- `warehouse shift alerts`
- `warehouse job alerts`
- `warehouse shifts uk`
- `extra warehouse shifts`

### Telegram alerts

- `telegram warehouse job alerts`
- `telegram shift alerts`
- `warehouse alerts telegram`

### Local intent

Only add location groups when the alert feed genuinely covers that area and the page can make the coverage clear.

- `warehouse shifts near me`
- `warehouse shifts [town]`
- `warehouse jobs [town]`

Do not build location groups around towns that are not actually served. The current site examples mention Portadown; treat that as an example, not a promise of nationwide coverage.

## 5. Match types and negatives

- Start with exact and phrase match for the first test.
- Add broad match only after reviewing the Search terms report and creating a useful negative list.
- Review search terms at least twice in the first week, then weekly while spend is small.
- Add negatives for intent the service cannot satisfy, such as `official`, `careers`, `login`, `application status`, `contact HR`, `recruiter`, `CV`, `interview`, `salary`, `customer service`, `complaints`, and `free trial` when they generate noise.
- Add employer-specific terms only when the ad and landing page clearly explain that employer names may appear as job context and do not imply a relationship.

## 6. Starter ad copy

Use responsive search ads and check the current Google Ads editor for live headline and description limits before publishing. Keep every asset truthful on its own.

**Headline ideas**

- UK Warehouse Shift Alerts
- See New Shifts On Telegram
- Find Warehouse Shifts Faster
- Local Shift Details, Clearly
- Set Your Alert Preferences
- ShiftSignal UK Alerts
- Check The Details First
- Independent Shift Alerts

**Description ideas**

- Get focused UK warehouse shift alerts in Telegram. Check the details and decide what fits.
- Spend less time refreshing pages. See useful shift information in one readable alert.
- Start the bot, set your preferences, and stay in control of the updates you receive.

Avoid claims such as `guaranteed shifts`, `official Amazon alerts`, `instant hiring`, `best pay`, or `apply before everyone else` unless the product and evidence genuinely support them.

## 7. Landing-page alignment

- Use `landing.html` for the first campaign so the page has one clear job: explain the alert service and move a qualified visitor to Telegram.
- Keep the ad language close to the page language: warehouse shift alerts, readable details, preferences, and Telegram delivery.
- Keep the independent-service disclaimer above the fold or close to the primary CTA.
- Keep privacy, terms, and the public Telegram destinations easy to find.
- Do not send paid traffic to a page that shows an example alert for a location the service does not currently cover without making that context clear.
- Test the full path on iPhone and desktop: ad click, landing page, Telegram hand-off, bot start, and return to the site.

## 8. Conversion tracking

The site now has a consent-aware Google Ads tag and event wiring:

- The Google tag is installed once in the `<head>` of every HTML page with consent denied by default.
- `script.js` updates consent only after an explicit opt-in and sends the `conversion` event with the configured ID, label, `£1` value, and `GBP` currency.
- Telegram destinations emit `telegram_click`; internal jump links emit `cta_click`, so section navigation is not counted as a conversion.
- Same-tab Telegram links wait briefly for the Ads callback, with a timeout fallback so navigation still completes.

Before scaling tracking:

1. Confirm the privacy notice, consent behavior, and policy wording are appropriate for the audience and jurisdiction.
2. Test with Google Tag Assistant or the current Google Ads diagnostics.
3. Mark the conversion as a primary goal only if it represents a meaningful business outcome. Otherwise keep it secondary while you learn.

The current click event measures a hand-off to Telegram. It does not verify a bot start, subscription, application, or successful shift placement.

## 9. Compliance guardrails

- Use ShiftSignal as the brand. Use descriptive search terms for discovery, not a brand name that looks officially owned by Amazon.
- Do not use Amazon logos, employer logos, or wording that implies partnership, endorsement, hiring authority, or access to private employer systems.
- Make it clear when an employer name appears only to describe the work in an alert.
- Do not promise availability, pay, selection, or employment outcome unless the current feed and service can substantiate it.
- Ensure the privacy policy, terms, support route, and data collection explanation match the live product.
- Review Google Ads misrepresentation and trademark guidance before launch. Platform enforcement can change, so treat the current Google Ads policy pages as the source of truth.

## 10. Two-week launch checklist

- [ ] Cloudflare apex `A` records point to GitHub Pages.
- [ ] Cloudflare `www` CNAME points to `Bilawal122.github.io`.
- [ ] GitHub Pages custom domain is `shiftsignal.co.uk`.
- [ ] Enforce HTTPS is enabled after the certificate becomes available.
- [ ] `https://shiftsignal.co.uk/` and `https://www.shiftsignal.co.uk/` load correctly.
- [ ] Canonical tags, Open Graph URLs, robots, and sitemap use `shiftsignal.co.uk`.
- [ ] Bot and channel links are tested on mobile and desktop.
- [ ] Privacy and terms are reviewed for the actual operator and support route.
- [ ] One Search campaign and a small set of tightly themed ad groups are live.
- [ ] Exact/phrase match and an initial negative-keyword list are in place.
- [ ] Ads use alert/discovery language, not hiring or affiliation claims.
- [ ] Conversion and consent behavior are tested before spend is increased.
- [ ] Search terms, CTR, CPC, Telegram clicks, and qualified starts are reviewed twice in week one.

## Official references

- Google Ads Search campaigns: https://support.google.com/google-ads/answer/6325025
- Google Ads keyword matching: https://support.google.com/google-ads/answer/7478529
- Google Ads conversion tracking: https://support.google.com/google-ads/answer/1722022
- Google Ads misrepresentation policy: https://support.google.com/adspolicy/answer/6020954
- Google Ads trademark policy: https://support.google.com/adspolicy/answer/6118
- GitHub Pages custom domains: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- Cloudflare DNS records: https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/
