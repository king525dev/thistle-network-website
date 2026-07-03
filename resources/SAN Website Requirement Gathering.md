# SAN Website Requirement Gathering

## Goal of the Organisation

A platform that supports **Current Apprentices** socially and also **Aspiring Apprentices**

(Maybe Apprentice Alumni later? )

See [SAN Overview](./Scottish%20Apprenticeship%20Network%20(SAN)%20Overview.md)

## Goal of the Website

- Publicise the organisation and look like a serious professional committee

- Let Apprentices join social groups

- To publicly show who we are and what we are doing

- A way for corporations to reach out to us
  
  

## Bare Essentials

- Landing page information explaining what we do

- About Page

- Homepage

- Join flow (WhatsApp + Google Form option)

- Contact/Resources

- Lightweight admin to update content and the Google Form/WhatsApp links.  
  

## Further Features

- A different point of contact for different parties to reach us i.e A point of contact to reach out to companies, a point of contact to reach out to aspiring apprentices

- A social media-like feed that shows tailored events to join and relevant announcements 

- user accounts

- complex member directories

- messaging features.  
  

## Target Users & Personas

The main user groups of the website include: 

#### Apprentices in Scotland

- See what the company is about

- Contact the company

- Join groups



#### Employers

#### Partners.



## MVP features (prioritised) with acceptance criteria

### 1) Homepage (Priority 1)

Features

- Logo and branding (blue/white with hint of black)  

- Short headline + 2–3-line value proposition  

- Primary CTAs: “Join via WhatsApp” and “Register interest (Google Form)”  

- Key links: About, Contact/Resources  

Acceptance criteria

- Visitors understand SAN within 10 seconds.  

- Both CTAs visible above-the-fold on mobile and desktop.  

- Page load < 3s on common mobile devices.  

- Analytics event fires when CTAs are clicked.  



### 2) Join flow: Google Form registration (Priority 1)

Features

- “Register interest” opens Google Form (fields: name, age/role, location, employer/training provider, reason for joining, consent to SAN rules, email/phone).  

- Admin receives form responses and can mark applicants as approved/declined and assign a channel (e.g., general WhatsApp, sector channel).  

- After submission, user sees confirmation message and expected next steps.  

Acceptance criteria

- Form opens and submits reliably on mobile and desktop.  

- Admin receives responses via Google Forms and can export CSV.  

- Confirmation page shows next-step timeframe (editable).  

- Approved applicants can be admitted to group chat using stored contact details.  



### 3) Join flow: Direct WhatsApp link (Priority 1)

Features

- Button links to WhatsApp chat or invite link.  

- Optional pre-join reminder to read community guidelines.  

Acceptance criteria

- Link opens WhatsApp app or web on click for mobile and desktop.  

- Link editable by admin without code changes.  

- For safety, guidelines link appears before final join.  



### 4) About SAN page (Priority 2)

Features

- Mission, who runs SAN, optional partner logos, brief FAQs.  

Acceptance criteria

- Clear, concise copy editable by non-technical staff.  

- Page follows site branding and layout.  



### 5) Contact / Resources (Priority 3)

Features

- Contact email or simple contact form (spam protection), resources list (editable links), social links.  

Acceptance criteria

- Contact email/form works; form protected against spam.  

- Resource links open correctly and edit via CMS.  



### 6) Simple content update process (Priority 2)

Features

- Lightweight CMS or headless CMS integration to edit text, CTAs, and links (or simple admin dashboard).  

Acceptance criteria

- Non-technical user can update homepage copy and CTA links in <10 minutes.  

Updates appear live without a code redeploy.  
**
