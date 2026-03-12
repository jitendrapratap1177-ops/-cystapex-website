# Design System: CYST APEX — Digital Growth Agency (Web)
**Project ID:** 3015461244839945389

## 1. Visual Theme & Atmosphere
The atmosphere is dark, premium, and data-driven. The mood is authoritative and high-performance, utilizing an "apex" deep space aesthetic with neon glowing accents to communicate technological mastery and digital growth. It feels modern, sleek, and highly structured, relying on generous negative space, bold typography, and subtle glassmorphism to create a "no-fluff" professional environment.

## 2. Color Palette & Roles
* **Base Dark** (#05080F): Deepest navy-black. Serves as the primary canvas/background for the entire application.
* **Card Dark** (#0A1628): Slightly elevated dark navy. Used for containers and structural elements that need to sit above the base layer.
* **Footer Background** (#030609): Near-absolute black. Used for extreme contrast at the bottom of the page to ground the design.
* **Primary Purple** (#7C3BED): Vibrant neon purple. Used for primary actions, buttons, and the starting point of brand gradients.
* **Sea Blue** (#1E90D4): Bright electric blue. Used for accents, interactive hover states, text selections, and glowing data visualization paths.
* **Sea Green** (#0D7377): Deep glowing teal. Used for positive data visualization (e.g., metric charts) and specific, high-ticket metric highlights.
* **Golden** (#E8C84A): Bright warning/attention yellow. Used for standout metric highlights and the starting point of the text gradient effect.
* **Slate Range** (Tailwind default slate): Used for body text (`text-slate-300`, `text-slate-400`), muted paragraphs, and subtle borders.

## 3. Typography Rules
* **Font Family:** "Plus Jakarta Sans" for all text (display and sans-serif).
* **Headers:** Extremely bold (`font-extrabold`, `font-black`), tightly tracked (`tracking-tighter`, `tracking-tight`), and utilizing massive sizing (ranging from `text-5xl` up to `text-[120px]` for metrics).
* **Body Text:** Medium to semibold weights (`font-medium`, `font-semibold`), with a highly relaxed line height (`leading-relaxed`). Typically colored in slate variants to ensure readability against the dark background.
* **Accents & Labels:** Small font sizes (`text-xs`, `text-[10px]`), pure uppercase, and very widely tracked (`tracking-[0.2em]`, `tracking-widest`) for structural labels and footer text.

## 4. Component Stylings
* **Buttons:** Subtly rounded corners (`rounded-lg`) or fully pill-shaped (`rounded-full`). Primary buttons use a vibrant linear gradient background (from Primary Purple to Sea Blue) paired with a bold, colored drop shadow (`shadow-primary/25`). Hover states include subtle opacity reductions or aggressive color-fills.
* **Cards/Containers:** Generously rounded corners (`rounded-2xl`). They utilize a very subtle transparent white fill (`bg-white/5`) to create an elevated feel without relying on borders.
* **Navigation:** A floating "glassmorphism" pill. It uses a semi-transparent dark background (`rgba(5, 8, 15, 0.7)`) with a strong blur effect (`backdrop-filter: blur(12px)`), sitting inside a `rounded-2xl` container with a whisper-soft white border (`border-white/10`).
* **Text Enhancements:** Critical brand marks and titles use a distinct text-gradient utility that clips a linear gradient (from Golden to Sea Blue) directly to the text fill.
* **Data Visualizations:** Chart elements and SVG lines employ a specific `drop-shadow` filter (`chart-glow`) to create a neon, emissive effect against the dark containers.

## 5. Layout Principles
* **Whitespace Strategy:** Extremely generous vertical rhythm. The design uses massive padding (`py-32`, `py-64`) and spacing (`space-y-32`) to separate large conceptual blocks, ensuring each section has room to breathe.
* **Grid Alignment:** Content is typically constrained to either a maximum "editorial" width (720px) for readable, single-column text blocks, or expanded to a wider container (1400px) for structural elements like navigation and footers.
* **Borders:** Barely visible separators using `border-white/5` or `rgba(255, 255, 255, 0.05)` to gently divide sections or list items without adding visual noise or harsh lines.
