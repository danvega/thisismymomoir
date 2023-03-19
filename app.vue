<template>
  <header class="text-gray-800" style="font-family: 'PT Serif', serif;">
    <section class="mx-auto flex max-w-6xl items-center justify-between p-4">
      <h1 class="text-5xl font-medium md:text-3xl lg:text-5xl">
        <NuxtLink to="/" class="font-bold" style="font-family: 'turbinado-pro', sans-serif">This is my Momoir</NuxtLink>
      </h1>
      <div>
        <button id="hamburger-button" class="relative h-8 w-8 cursor-pointer text-3xl md:hidden">
          <div
            class="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-primary transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-primary before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-primary after:transition-all after:duration-500 after:content-['']">
          </div>
        </button>
        <nav class="hidden space-x-8 text-xl md:block md:text-base md:space-x-4" aria-label="main">
          <NuxtLink to="/blog/category/momlife" class="hover:opacity-90">#MomLife</NuxtLink>
          <NuxtLink to="/blog/category/health-wellness" class="hover:opacity-90">Health & Wellness</NuxtLink>
          <NuxtLink to="/blog/category/meal-planning-recipes" class="hover:opacity-90">Recipes & Meal Planning</NuxtLink>
          <NuxtLink to="/blog/category/celebrate" class="hover:opacity-90">Celebrate!</NuxtLink>
          <NuxtLink to="/blog/category/travel" class="hover:opacity-90">Travel</NuxtLink>
        </nav>
      </div>
    </section>
    <section id="mobile-menu"
      class="top-68 justify-content-center absolute hidden w-full origin-top animate-open-menu flex-col bg-primary text-3xl">
      <nav class="flex min-h-screen flex-col items-center py-8 text-slate-900" aria-label="mobile">
        <NuxtLink to="/" class="w-full py-6 text-center hover:opacity-90">Home</NuxtLink>
        <NuxtLink to="/blog/category/momlife" class="w-full py-6 text-center hover:opacity-90">#MomLife</NuxtLink>
        <NuxtLink to="/blog/category/health-wellness" class="w-full py-6 text-center hover:opacity-90">Health & Wellness
        </NuxtLink>
        <NuxtLink to="/blog/category/meal-planning-recipes" class="w-full py-6 text-center hover:opacity-90">Recipes &
          Meal Planning</NuxtLink>
        <NuxtLink to="/blog/category/celebrate" class="w-full py-6 text-center hover:opacity-90">Celebrate!</NuxtLink>
        <NuxtLink to="/blog/category/travel" class="w-full py-6 text-center hover:opacity-90">Travel</NuxtLink>
      </nav>
    </section>
  </header>
  <NuxtPage />
  <footer class="bg-primary p-4 flex flex-col text-center gap-4">
    <nav class="text-sm md:text-lg text-slate-900">
      <NuxtLink to=" /" class="hover:opacity-90 hover:underline">Home</NuxtLink> &#8226;
      <NuxtLink to="/blog/about" class="hover:opacity-90 hover:underline">About Me</NuxtLink> &#8226;
      <NuxtLink to="/disclaimer" class="hover:opacity-90 hover:underline">Disclaimer</NuxtLink> &#8226;
      <NuxtLink to="/privacy" class="hover:opacity-90 hover:underline">Privacy Policy</NuxtLink> &#8226;
      <NuxtLink to="/contact" class="hover:opacity-90 hover:underline">Contact Me</NuxtLink>
    </nav>
    <div class="">
      <p class="text-sm">Copyright &copy; <span>2023</span>.</p>
      <p>This is my Momoir. All Rights Reserved</p>
    </div>
    <div class="flex flex-row justify-center gap-4">
      <a href="https://pinterest.com/thisismymomoir">
        <Icon name="entypo-social:pinterest-with-circle" size="1.25rem" class="text-slate-900" />
      </a>
      <a href="https://www.facebook.com/thisismymomoir">
        <Icon name="entypo-social:facebook" size="1.25rem" class="text-slate-900" />
      </a>
      <a href="https://www.instagram.com/thisismymomoir">
        <Icon name="entypo-social:instagram" size="1.25rem" class="text-slate-900" />
      </a>
      <a href="https://www.twitter.com/thisismymomoir">
        <Icon name="entypo-social:twitter" size="1.25rem" class="text-slate-900" />
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">

useHead({
  bodyAttrs: {
    class: 'min-h-screen'
  }
})

onMounted(() => {
  const hamburgerBtn = document.getElementById('hamburger-button')
  const mobileMenu = document.getElementById('mobile-menu')

  const toggleMenu = () => {
    mobileMenu?.classList.toggle('hidden')
    mobileMenu?.classList.toggle('flex')
    hamburgerBtn?.classList.toggle('toggle-btn')
  }

  hamburgerBtn?.addEventListener('click', toggleMenu)
  mobileMenu?.addEventListener('click', toggleMenu)
});

</script>

