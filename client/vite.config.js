// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [react(), tailwindcss(), createHtmlPlugin({
    minify: true, 
    inject: {
      data: {
        title: 'Full-Stack Web Developer & Digital Solutions Builder',
        description: "Full-stack web developer specializing in modern, high-performance web applications. Experienced in React, Next.js, Node.js, and API development, building scalable SaaS platforms, business websites, dashboards, and custom digital solutions. Focused on clean code, responsive design, performance optimization, security, and user experience. Delivering reliable, SEO-friendly web solutions tailored for startups, businesses, and enterprises.",
        keywords: 'full-stack web developer, modern web applications, React, Next.js, Node.js, API development, scalable SaaS platforms, business websites, dashboards, custom digital solutions, clean code, responsive design, performance optimization, security, user experience, SEO-friendly web solutions, startups, businesses, enterprises Full Stack Developer ,Web Developer,JavaScript, React,Next.js,Node.js,Frontend Development,Backend Development,API Development,SaaS Applications,Responsive Design,UI/UX,Web Performance,Modern Web Technologies'
      }
    }
  })],
  resolve: {
    alias: {
      "@": "/src", // ✅ no path import needed, works fine in Vite
    },
  },
});
