# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Development Server:**
```bash
pnpm dev  # Runs Next.js with Turbopack for faster development
```

**Build & Production:**
```bash
pnpm build    # Production build
pnpm start    # Start production server
```

**Code Quality:**
```bash
pnpm lint                # ESLint with Next.js config
pnpm format:write        # Format code with Prettier
pnpm format:check        # Check formatting without changes
```

**Content Generation:**
```bash
pnpm generate    # Run custom TypeScript generation scripts
```

## Architecture Overview

### Internationalization (i18n)
- **Multi-locale support:** English (en) and Japanese (ja), with Japanese as default
- **Route-based locales:** `/[locale]/...` structure using next-intl
- **Locale switching:** Available via dock component and standalone switcher
- **Translation files:** Messages organized by locale in standard next-intl structure

### Layout & Theming
- **Theme System:** Uses next-themes with class-based dark mode via Tailwind
- **Layout Stability:** Custom CSS properties prevent layout shifts during locale/theme changes
- **Responsive Design:** Tailwind-first approach with custom extensions for shadcn/ui components

### Navigation & UX
- **Dock Navigation:** macOS-style dock at bottom with magnification effects using motion/react
- **Section Tracking:** Active section context tracks scroll position and updates navigation state
- **Smooth Scrolling:** Intersection Observer API for section detection and smooth transitions

### Component Architecture
- **UI Components:** Located in `src/components/ui/` following shadcn/ui patterns
- **Custom Dock System:** Advanced animated dock with context provider for motion values
- **Form Handling:** React Email integration with Resend for contact forms
- **Motion Integration:** Extensive use of motion/react for animations and transitions

### AI Integration
- **Chat System:** LangChain-powered AI chat with AstraDB vector storage
- **Context Awareness:** Portfolio-specific AI responses using embedded knowledge
- **Real-time Chat:** Streaming responses via AI SDK integration

### Styling Approach
- **Tailwind CSS:** Primary styling system with custom color scheme and variables
- **CSS Custom Properties:** For theme-stable values and responsive behavior
- **Component Variants:** Using class-variance-authority for component state management
- **Animation:** Motion/react for complex animations, tailwindcss-animate for utilities

### Data & Content
- **Static Data:** Portfolio content in `src/lib/data.ts` with locale-specific variants
- **Type Safety:** Custom types in `src/lib/types.ts` for consistent data structures
- **Asset Management:** Optimized images in `src/assets/` with Next.js Image component

## Key Technical Considerations

**Theme Switching:**
- Always use next-themes `useTheme` hook with `resolvedTheme` for consistent state
- Include hydration checks (`mounted` state) to prevent SSR mismatches

**Locale Handling:**  
- Components should use `useLocale()` and `useTranslations()` from next-intl
- Data arrays often have locale-specific variants (e.g., `experiencesDataEng`, `experiencesDataJap`)

**Motion & Animation:**
- Dock components rely on motion value contexts - don't break the provider hierarchy
- Use `motion/react` (not framer-motion) for consistency with existing animations

**Responsive Behavior:**
- Layout uses custom CSS properties for stable responsive behavior during dynamic changes
- Scrollbar gutter is stabilized to prevent layout shift during modal/dropdown interactions