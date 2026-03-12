---
page: contact
---
The Contact Us page for CYST APEX.
This page is focused purely on conversion—getting the user to book a call or submit an inquiry.

**Page Structure:**
1. Floating glassmorphism navigation (Same style as index.html, with 'Contact' highlighted or styled differently).
2. Content section: Split layout (2 columns).
    - Left column: "Let's Engineeer Your Apex." and some contact details (Email, Phone, HQ Location).
    - Right column: A sleek, dark glassmorphism contact form. Fields: Name, Email, Company, Monthly Revenue Dropdown, and "How can we scale your brand?" text area.
3. Call to action button under the form: "Submit Inquiry" with Primary Purple to Sea Blue gradient.
4. Footer with navigation and links (Same as index.html).

**DESIGN SYSTEM (REQUIRED):**
# 1. Visual Theme & Atmosphere
The atmosphere is dark, premium, and data-driven. The mood is authoritative and high-performance, utilizing an "apex" deep space aesthetic with neon glowing accents to communicate technological mastery and digital growth. It feels modern, sleek, and highly structured, relying on generous negative space, bold typography, and subtle glassmorphism to create a "no-fluff" professional environment.

# 2. Color Palette & Roles
* **Base Dark** (#05080F): Deepest navy-black. Serves as the primary canvas/background for the entire application.
* **Card Dark** (#0A1628): Slightly elevated dark navy. Used for containers and structural elements that need to sit above the base layer.
* **Footer Background** (#030609): Near-absolute black. Used for extreme contrast at the bottom of the page to ground the design.
* **Primary Purple** (#7C3BED): Vibrant neon purple. Used for primary actions, buttons, and the starting point of brand gradients.
* **Sea Blue** (#1E90D4): Bright electric blue. Used for accents, interactive hover states, text selections, and glowing data visualization paths.
* **Sea Green** (#0D7377): Deep glowing teal. Used for positive data visualization (e.g., metric charts) and specific, high-ticket metric highlights.
* **Golden** (#E8C84A): Bright warning/attention yellow. Used for standout metric highlights and the starting point of the text gradient effect.
* **Slate Range** (Tailwind default slate): Used for body text (`text-slate-300`, `text-slate-400`), muted paragraphs, and subtle borders.

# 3. Typography Rules
* **Font Family:** "Plus Jakarta Sans" for all text (display and sans-serif).
* **Headers:** Extremely bold (`font-extrabold`, `font-black`), tightly tracked (`tracking-tighter`, `tracking-tight`), and massive sizing up to `text-6xl` or `text-8xl`.
* **Body Text:** Medium to semibold weights (`font-medium`, `font-semibold`), with a highly relaxed line height (`leading-relaxed`). Colored in slate variants.
* **Accents & Labels:** Small font sizes (`text-xs`, `text-[10px]`), pure uppercase, widely tracked (`tracking-[0.2em]`, `tracking-widest`).

# 4. Component Stylings
* **Buttons:** Subtly rounded corners (`rounded-lg`) or fully pill-shaped (`rounded-full`). Primary buttons use a vibrant linear gradient background (from Primary Purple to Sea Blue) paired with a bold, colored drop shadow (`shadow-primary/25`).
* **Cards/Containers:** Generously rounded corners (`rounded-2xl`). Very subtle transparent white fill (`bg-white/5`) for elevation without borders.
* **Navigation:** Floating glassmorphism pill. Semi-transparent dark background (`rgba(5, 8, 15, 0.7)`) with strong blur (`backdrop-filter: blur(12px)`), `rounded-2xl` container, whisper-soft white border (`border-white/10`).
* **Text Enhancements:** Title gradients from Golden to Sea Blue using `-webkit-background-clip: text` and `-webkit-text-fill-color: transparent`.
* **Data Visualizations:** Chart elements use `drop-shadow(0 0 8px rgba(30, 144, 212, 0.4))` for a neon glow.
* **Inputs/Forms:** Stroke styles with single borders (e.g. `border border-white/10`), bg `bg-white/5` or `bg-transparent`, rounded corners. 

# 5. Layout Principles
* **Whitespace Strategy:** Extremely generous vertical rhythm (`py-32`, `py-64`, `space-y-32`).
* **Grid Alignment:** Content constrained to "editorial" width (720px) for text blocks or expanded (1400px) for structural elements.
* **Borders:** Barely visible separators (`border-white/5` or `rgba(255, 255, 255, 0.05)`).
