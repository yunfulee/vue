---
name: 'ui-ux-pro-max'
description: 'AI-powered design intelligence for professional UI/UX. Invoke to generate design systems, optimize conversion, or apply Soft UI/Hero-Centric patterns.'
---

# UI/UX Pro Max (v2.0)

This skill provides design intelligence for building professional UI/UX across multiple platforms and frameworks. It includes a Design System Generator and a reasoning engine for project-tailored layouts.

## 🚀 What's New in v2.0

### Intelligent Design System Generation

The flagship feature is the Design System Generator—an AI-powered reasoning engine that analyzes project requirements and generates a complete, tailored design system in seconds.

## 🛠 Design Patterns & Styles

### Recommended Pattern: Hero-Centric + Social Proof

- **Conversion**: Emotion-driven with trust elements.
- **CTA**: Above fold, repeated after testimonials/social proof.
- **Standard Sections**:
  1. Hero (Emotion + Key Value)
  2. Social Proof (Trust badges, testimonials)
  3. Services/Products
  4. Conversion (CTA)
  5. Contact/Booking
  3. 服务/产品展示
### Recommended Style: Soft UI Evolution

- **Keywords**: Soft shadows, subtle depth, calming, premium feel, organic shapes.
- **Best For**: Wellness, beauty, lifestyle brands, premium services.
- **Performance**: Excellent | **Accessibility**: WCAG AA.

### Design Variables (v2.0 Defaults)

- **Primary Color**: #E8B4B8 (Soft Pink)
- **Secondary Color**: #A8D5BA (Sage Green)
- **CTA Color**: #D4AF37 (Gold)
- **Background**: #FFF5F5 (Warm White)
- **Text**: #2D3436 (Charcoal)
- **Typography**: Cormorant Garamond (Elegant/Serif) / Montserrat (Clean/Sans-serif)
- **Key Effects**: Soft shadows + Smooth transitions (200-300ms) + Gentle hover states.
- **CTA 色**: #D4AF37 (金色)
## 🚫 Anti-patterns to Avoid

- **Bright neon colors** (Too harsh for premium feel).
- **Harsh animations** (Distracting and breaks flow).
- **Dark mode** (For wellness/luxury brands, Light mode is often better).
- **AI purple/pink gradients** (Generic and unprofessional).
## 🚫 避坑指南 (Anti-patterns)
## ✅ Pre-delivery Checklist

- [ ] **No emojis as icons**: Use SVG (Heroicons/Lucide).
- [ ] **Interactive States**: `cursor-pointer` and smooth transitions (150-300ms) on all clickable elements.
- [ ] **Accessibility**: Light mode text contrast 4.5:1 minimum; focus states visible for keyboard nav.
- [ ] **Motion**: Respect `prefers-reduced-motion`.
- [ ] **Responsiveness**: Check 375px, 768px, 1024px, 1440px.

## 🧠 Reasoning Engine Usage

When this skill is invoked, the model should:

1. Analyze the project domain (e.g., Luxury Spa, E-commerce).
2. Propose a layout pattern (e.g., Hero-Centric).
3. Select a color palette and typography that matches the "Mood" (e.g., Calming, Professional).
4. Implement the design using modern CSS/SCSS (Flexbox/Grid).

## 🧠 推理引擎使用说明

当调用此技能时，模型应：

1. 分析项目领域 (如：奢侈水疗、电子商务)。
2. 提议布局模式 (如：Hero-Centric)。
3. 选择匹配“氛围”的配色方案和字体 (如：冷静、专业)。
4. 使用现代 CSS/SCSS (Flexbox/Grid) 实现设计。
