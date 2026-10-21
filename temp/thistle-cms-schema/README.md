# Thistle CMS schema (optional shortcut)

These are the exact files Strapi's Content-Type Builder would generate if you
clicked the whole content model together by hand (Part 1 and Part 2 of the tutorial).

Use them ONLY if you get stuck or want to skip the clicking:

1. Stop Strapi (Ctrl+C).
2. Copy the `src/api` and `src/components` folders from this zip into your
   Strapi project's `src/` folder (merge, overwrite if asked).
3. Run `npm run develop`. Strapi picks the new content types up and creates
   the database tables for you.
4. Continue the tutorial from "Make the content public" (Public role permissions).

Content types: Home Page, Gallery Page, News Page (single types); Author,
News Post, Gallery Album (collection types). Components: shared.cta,
shared.text-item, shared.page-header, home.hero, home.registration,
home.audience-card, home.events-section, home.about, home.activities-section,
home.activity, home.committee, home.contact-section.

Tested with Strapi 5.58.0.
