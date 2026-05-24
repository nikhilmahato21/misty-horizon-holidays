# Design System - Misty Horizon Holidays

## 🎨 Color Palette

All colors derived from the uploaded logo.

### Primary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Golden Sun | `#F4C46E` | Primary CTAs, Highlights, Links |
| Teal Blue | `#7CB8C8` | Secondary CTAs, Borders, Accents |
| Light Teal | `#8BC4D4` | Hover states, Soft backgrounds |
| Forest Green | `#3D6B4F` | Headings, Text, Strong elements |
| Sage Green | `#A8B89C` | Muted text, Soft accents |

### Neutral Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Off-White | `#F5F5F5` | Page backgrounds |
| Cream | `#FAFAF9` | Section backgrounds |
| Light Gray | `#E0E0E0` | Borders, Dividers |
| Medium Gray | `#999999` | Muted text |
| Dark Gray | `#666666` | Body text |
| Almost Black | `#1a1a1a` | Headings, Primary text |

### Semantic Colors

| Intent | Color | Hex |
|--------|-------|-----|
| Success | Green | `#10b981` |
| Warning | Amber | `#f59e0b` |
| Error | Red | `#ef4444` |
| Info | Blue | `#3b82f6` |

## 🔤 Typography

### Font Families

```css
/* Serif - For Headings & Emphasis */
font-family: 'Georgia', serif;
weight: 400, 700

/* Sans-serif - For Body & UI */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
weight: 400, 500, 600, 700
```

### Font Sizes & Weights

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 56px | 700 | 1.2 |
| H2 | 48px | 700 | 1.2 |
| H3 | 36px | 700 | 1.2 |
| H4 | 28px | 600 | 1.3 |
| H5 | 24px | 600 | 1.3 |
| H6 | 20px | 600 | 1.4 |
| Body | 16px | 400 | 1.7 |
| Small | 14px | 400 | 1.6 |
| XSmall | 12px | 500 | 1.5 |

### Font Scale
```
H1: 3.5rem (56px)
H2: 3rem (48px)
H3: 2.25rem (36px)
H4: 1.75rem (28px)
H5: 1.5rem (24px)
H6: 1.25rem (20px)
Body: 1rem (16px)
Small: 0.875rem (14px)
Tiny: 0.75rem (12px)
```

## 📏 Spacing System

Based on 8px grid:

```
XS: 0.5rem (4px)
SM: 1rem (8px)
MD: 1.5rem (12px)
LG: 2rem (16px)
XL: 2.5rem (20px)
2XL: 3rem (24px)
3XL: 4rem (32px)
4XL: 6rem (48px)
5XL: 8rem (64px)
```

## 🎯 Border Radius

```
None: 0px
SM: 0.375rem (6px)
MD: 0.5rem (8px)
LG: 1rem (12px)
XL: 1.5rem (16px)
2XL: 2rem (24px)
Full: 9999px
```

## 🌊 Shadows

```
SM: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
MD: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
LG: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
XL: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
2XL: 0 25px 50px -12px rgba(0, 0, 0, 0.25)

Premium: 0 20px 60px rgba(61, 107, 79, 0.15)
Soft: 0 10px 40px rgba(123, 184, 200, 0.15)
```

## 🔲 Component Sizes

### Buttons

```
Small: 
  - Height: 36px
  - Padding: 8px 16px
  - Font: 14px

Medium (Default):
  - Height: 44px
  - Padding: 12px 24px
  - Font: 16px

Large:
  - Height: 52px
  - Padding: 16px 32px
  - Font: 18px
```

### Input Fields

```
Height: 44px
Padding: 12px 16px
Font: 16px
Border: 2px
Border Color: #E0E0E0 (default)
Border Radius: 8px
```

## 🎬 Animations

### Timing Functions
```
Ease: cubic-bezier(0.25, 0.46, 0.45, 0.94)
Ease-In: cubic-bezier(0.42, 0, 1, 1)
Ease-Out: cubic-bezier(0, 0, 0.58, 1)
Ease-In-Out: cubic-bezier(0.42, 0, 0.58, 1)
```

### Standard Durations
```
Fast: 150ms
Normal: 300ms (default)
Slow: 500ms
Slower: 800ms
Slowest: 1200ms
```

### Animation Keyframes

```javascript
// Fade In
@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
}

// Slide Up
@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0 }
  to { transform: translateY(0); opacity: 1 }
}

// Scale
@keyframes scale {
  from { transform: scale(0.9); opacity: 0 }
  to { transform: scale(1); opacity: 1 }
}

// Float
@keyframes float {
  0%, 100% { transform: translateY(0px) }
  50% { transform: translateY(-20px) }
}
```

## 🎚️ Opacity Scale

```
0: 0%
5: 5%
10: 10%
20: 20%
25: 25%
30: 30%
40: 40%
50: 50% (Medium opacity)
60: 60%
70: 70%
75: 75%
80: 80%
90: 90%
95: 95%
100: 100%
```

## 🖼️ Image Specifications

### Hero Image
```
Recommended Size: 1920x1080px
Min Width: 1200px
Format: WebP (with JPEG fallback)
Quality: 80-90%
```

### Card Images
```
Recommended Size: 400x300px
Aspect Ratio: 4:3
Format: WebP
Quality: 75-85%
```

### Gallery Images
```
Recommended Size: 600x600px
Aspect Ratio: 1:1 or varied
Format: WebP
Quality: 70-80%
```

### Icons
```
Size: 24px or 48px
Format: SVG or PNG
Fill: Inherits from parent
```

## 🎭 Glassmorphism Effect

```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.2);
```

## 🌈 Gradients

### Primary Gradient
```css
background: linear-gradient(135deg, #F4C46E 0%, #7CB8C8 100%);
```

### Soft Gradient
```css
background: linear-gradient(
  180deg,
  rgba(244, 196, 110, 0.1) 0%,
  rgba(123, 184, 200, 0.1) 100%
);
```

### Dark Overlay
```css
background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0.4) 0%,
  rgba(0, 0, 0, 0.2) 100%
);
```

## 📱 Responsive Grid

### Desktop (1200px+)
```
Columns: 4
Gutter: 24px
Margin: 40px
```

### Tablet (768px - 1199px)
```
Columns: 2
Gutter: 20px
Margin: 24px
```

### Mobile (< 768px)
```
Columns: 1
Gutter: 16px
Margin: 16px
```

## ♿ Accessibility

### Focus States
```css
outline: 2px solid #F4C46E;
outline-offset: 2px;
```

### Minimum Touch Target
```
Min Size: 44px × 44px
Spacing: 8px between targets
```

### Color Contrast
```
Minimum: 4.5:1 (AA standard)
Enhanced: 7:1 (AAA standard)
```

### Font Sizes
```
Minimum: 12px (for captions)
Body: 16px minimum
Touch: 18px minimum
```

## 🎨 Usage Examples

### Button Styles

#### Primary Button
```javascript
className="px-8 py-4 bg-[#F4C46E] text-[#3D6B4F] font-semibold rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
```

#### Secondary Button
```javascript
className="px-8 py-4 bg-[#7CB8C8] text-white font-semibold rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
```

### Card Styles
```javascript
className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
```

### Glass Card
```javascript
className="glass-morphism rounded-2xl p-6"
```

---

**Last Updated**: May 2026
**Version**: 1.0
