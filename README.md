# Senior Developer Portfolio

A modern, performant, and scalable portfolio website for a Senior Developer with 11 years of experience. Built with Next.js and TailwindCSS.

## Features

- **Modern Design**: Clean, professional UI with dark mode support
- **Responsive**: Mobile-first approach, looks great on all devices
- **Performance Optimized**: Fast loading times with Next.js
- **Accessible**: Built with accessibility in mind
- **SEO Friendly**: Optimized metadata for better search engine visibility

## Pages

- **Home**: Introduction, featured projects, and skills
- **About**: Detailed background, experience timeline, and education
- **Work/Projects**: Showcase of professional and personal projects with filtering
- **Contact**: Contact form and social links
- **Resume**: Interactive resume with download option
- **Uses**: List of tools, software, hardware, and services used
- **Blog**: (Coming soon) Developer insights and tutorials

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: TailwindCSS
- **Deployment**: Vercel (recommended)
- **Package Management**: pnpm

## Getting Started

### Prerequisites

- Node.js 18.x or later
- pnpm (recommended) or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Run the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

Update your personal information in the following files:

- `src/app/page.tsx`: Home page content
- `src/app/about/page.tsx`: About page content
- `src/app/work/page.tsx`: Projects data
- `src/app/resume/page.tsx`: Resume content
- `src/app/uses/page.tsx`: Tools and setup
- `src/components/Footer.tsx`: Footer links and copyright

### Styling

The project uses TailwindCSS for styling. You can customize the theme in `tailwind.config.ts`.

### Images

Replace the placeholder images in the `public` directory with your own:

- `public/profile.jpg`: Your profile picture
- `public/about.jpg`: Image for the about page
- `public/projects/`: Project screenshots
- `public/resume.pdf`: Your downloadable resume

## Deployment

The easiest way to deploy your portfolio is using [Vercel](https://vercel.com/), the platform from the creators of Next.js.

1. Push your code to a GitHub repository.
2. Import your project to Vercel.
3. Vercel will detect that you're using Next.js and set up the build configuration for you.
4. Your site will be deployed to a URL like `your-portfolio.vercel.app`.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/) (SVG icons used in the project)
