<script setup lang="ts">
import FooterNewsletterSignup from './blog/FooterNewsletterSignup.vue';


</script>

<template>
  <footer class="mt-8 bg-gradient-to-b from-primary to-primary-dark">
    <section class="mx-auto ">
      <div class="relative isolate overflow-hidden  py-16 sm:py-24 lg:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
            <div class="max-w-xl lg:max-w-lg">
              <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Subscribe to my newsletter.</h2>
              <p class="mt-4 text-lg leading-8 text-slate-900">Sign up for my monthly newsletter and stay up to date with
                current blog posts.</p>
              <FooterNewsletterSignup />
            </div>
            <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div class="flex flex-col items-start">
                <div class="rounded-md bg-slate-900/5 p-2 ring-1 ring-slate-900/10">
                  <svg class="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                  </svg>
                </div>
                <dt class="mt-4 font-semibold text-slate-900">Monthly Updates</dt>
                <dd class="mt-2 leading-7 text-slate-900">I will send you an update each month to keep you filled in on
                  what I have been up to.</dd>
              </div>
              <div class="flex flex-col items-start">
                <div class="rounded-md bg-slate-900/5 p-2 ring-1 ring-slate-900/10">
                  <svg class="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                  </svg>
                </div>
                <dt class="mt-4 font-semibold text-slate-900">No spam</dt>
                <dd class="mt-2 leading-7 text-slate-900">You will not recieve spam from me and I will not share your
                  email
                  address with anyone.</dd>
              </div>
            </dl>
          </div>
        </div>
        <svg class="absolute top-0 left-2/3 -z-10 h-[22.375rem] -translate-x-1/2 blur-3xl xl:-top-6"
          viewBox="0 0 1155 678" fill="none">
          <path fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)" fill-opacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
          <defs>
            <linearGradient id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a" x1="1155.49" x2="-78.208" y1=".177" y2="474.645"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#986e72" />
              <stop offset="1" stop-color="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
    <section class="mx-auto max-w-6xl">
      <hr class="border-1 border-primary/2 mb-8 mx-4" />
      <nav class="text-slate-900 text-center mb-4">
        <NuxtLink to=" /" class="underline hover:opacity-90 hover:no-underline">Home</NuxtLink> &#8226;
        <NuxtLink to="/blog/about" class="underline hover:opacity-90 hover:no-underline">About Me</NuxtLink> &#8226;
        <NuxtLink to="/disclaimer" class="underline hover:opacity-90 hover:no-underline">Disclaimer</NuxtLink> &#8226;
        <NuxtLink to="/privacy" class="underline hover:opacity-90 hover:no-underline">Privacy Policy</NuxtLink> &#8226;
        <NuxtLink to="/contact" class="underline hover:opacity-90 hover:no-underline">Contact Me</NuxtLink>
      </nav>
      <p class="text-center">Copyright &copy; <span>2023</span>. This is my Momoir. All Rights Reserved.</p>
      <div class="flex flex-row justify-center gap-4 mb-8 mt-2">
        <a href="https://pinterest.com/thisismymomoir">
          <Icon name="entypo-social:pinterest-with-circle" size="1.5rem" class="text-slate-900" />
        </a>
        <a href="https://www.facebook.com/thisismymomoir">
          <Icon name="entypo-social:facebook" size="1.5rem" class="text-slate-900" />
        </a>
        <a href="https://www.instagram.com/thisismymomoir">
          <Icon name="entypo-social:instagram" size="1.5rem" class="text-slate-900" />
        </a>
        <a href="https://www.twitter.com/thisismymomoir">
          <Icon name="entypo-social:twitter" size="1.5rem" class="text-slate-900" />
        </a>
      </div>
    </section>
  </footer>
</template>
