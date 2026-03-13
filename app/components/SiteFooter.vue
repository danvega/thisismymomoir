<script setup lang="ts">
import FooterNewsletterSignup from './blog/FooterNewsletterSignup.vue';

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="mt-8 bg-gradient-to-b from-primary to-primary-dark">
    <section class="mx-auto">
      <div class="py-10 sm:py-14">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-8 gap-x-8 lg:max-w-none lg:grid-cols-2 items-center">
            <div class="max-w-xl lg:max-w-lg">
              <h2 class="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl font-cormorant">Subscribe to my newsletter.</h2>
              <p class="mt-2 text-base leading-7 text-slate-700">Sign up for my monthly newsletter and stay up to date with
                current blog posts.</p>
              <FooterNewsletterSignup />
            </div>
            <div class="flex gap-8 sm:gap-12">
              <div class="flex items-start gap-3">
                <div class="rounded-lg bg-white/40 p-2 shrink-0">
                  <Icon name="ic:baseline-calendar-month" size="20px" class="text-slate-700" />
                </div>
                <div>
                  <p class="font-semibold text-sm text-slate-800">Monthly Updates</p>
                  <p class="text-sm leading-6 text-slate-600">An update each month on what I've been up to.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="rounded-lg bg-white/40 p-2 shrink-0">
                  <Icon name="material-symbols:waving-hand-outline" size="20px" class="text-slate-700" />
                </div>
                <div>
                  <p class="font-semibold text-sm text-slate-800">No spam</p>
                  <p class="text-sm leading-6 text-slate-600">I'll never share your email with anyone.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mx-auto max-w-6xl px-4 pb-6">
      <hr class="border-slate-800/10 mb-5" />
      <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 text-sm text-slate-700">
        <NuxtLink to="/" class="transition-colors duration-200 hover:text-slate-900">Home</NuxtLink>
        <NuxtLink to="/blog/about" class="transition-colors duration-200 hover:text-slate-900">About Me</NuxtLink>
        <NuxtLink to="/disclaimer" class="transition-colors duration-200 hover:text-slate-900">Disclaimer</NuxtLink>
        <NuxtLink to="/privacy" class="transition-colors duration-200 hover:text-slate-900">Privacy Policy</NuxtLink>
        <NuxtLink to="/contact" class="transition-colors duration-200 hover:text-slate-900">Contact Me</NuxtLink>
      </nav>
      <div class="flex justify-center gap-5 mb-3">
        <a href="https://pinterest.com/thisismymomoir" class="text-slate-600 transition-all duration-200 hover:text-slate-900 hover:scale-110">
          <Icon name="entypo-social:pinterest-with-circle" size="1.5rem" />
        </a>
        <a href="https://www.facebook.com/thisismymomoir" class="text-slate-600 transition-all duration-200 hover:text-slate-900 hover:scale-110">
          <Icon name="entypo-social:facebook" size="1.5rem" />
        </a>
        <a href="https://www.instagram.com/thisismymomoir" class="text-slate-600 transition-all duration-200 hover:text-slate-900 hover:scale-110">
          <Icon name="entypo-social:instagram" size="1.5rem" />
        </a>
        <a href="https://www.twitter.com/thisismymomoir" class="text-slate-600 transition-all duration-200 hover:text-slate-900 hover:scale-110">
          <Icon name="entypo-social:twitter" size="1.5rem" />
        </a>
      </div>
      <p class="text-center text-sm text-slate-500">Copyright &copy; {{ currentYear }} This Is My Momoir. All Rights Reserved.</p>
    </section>
  </footer>
</template>
