<template>
  <header class="text-gray-800">
    <section class="mx-auto flex max-w-6xl items-center justify-between p-4">
      <h1 class="text-5xl font-medium md:text-3xl lg:text-5xl">
        <NuxtLink to="/" class="font-turbinado">This Is My Momoir</NuxtLink>
      </h1>
      <div>
        <button id="hamburger-button" class="relative h-8 w-8 cursor-pointer text-3xl lg:hidden">
          <div
            class="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-primary transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-primary before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-primary after:transition-all after:duration-500 after:content-['']">
          </div>
        </button>
        <nav class="hidden space-x-8 text-xl lg:block lg:space-x-4 font-cormorant font-bold" aria-label="main">
          <NuxtLink to="/blog/category/momlife" class="p-2 rounded hover:bg-primary hover:opacity-90">#MomLife
          </NuxtLink>
          <NuxtLink to="/blog/category/health-wellness" class="p-2 rounded hover:bg-primary hover:opacity-90">
            Health & Wellness</NuxtLink>
          <NuxtLink to="/blog/category/meal-planning-recipes" class="p-2 rounded hover:bg-primary hover:opacity-90">
            Recipes & Meal Planning</NuxtLink>
          <NuxtLink to="/blog/category/celebrate" class="p-2 rounded hover:bg-primary hover:opacity-90">Celebrate!
          </NuxtLink>
          <NuxtLink to="/blog/category/travel" class="p-2 rounded hover:bg-primary hover:opacity-90">Travel
          </NuxtLink>
        </nav>
      </div>
    </section>
    <section id="mobile-menu"
      class="top-68 justify-content-center absolute hidden w-full origin-top animate-open-menu flex-col bg-primary text-3xl">
      <nav class="flex min-h-screen flex-col items-center py-8 text-slate-900 font-cormorant font-bold"
        aria-label="mobile">
        <NuxtLink to="/" class="w-full py-6 text-center hover:opacity-90">Home</NuxtLink>
        <NuxtLink to="/blog/category/momlife" class="w-full py-6 text-center hover:opacity-90">#MomLife</NuxtLink>
        <NuxtLink to="/blog/category/health-wellness" class="w-full py-6 text-center hover:opacity-90">Health & Wellness
        </NuxtLink>
        <NuxtLink to="/blog/category/meal-planning-recipes" class="w-full py-6 text-center hover:opacity-90">Recipes &
          Meal Planning</NuxtLink>
        <NuxtLink to="/blog/category/celebrate" class="w-full py-6 text-center hover:opacity-90">Celebrate!</NuxtLink>
        <NuxtLink to="/blog/category/travel" class="w-full py-6 text-center hover:opacity-90">Travel</NuxtLink>
        <NuxtLink to="/blog/about" class="w-full py-6 text-center hover:opacity-90">About Me</NuxtLink>
      </nav>
    </section>
  </header>
  <NuxtPage />
  <SiteFooter />
</template>

<script setup lang="ts">

useHead({
  bodyAttrs: {
    class: 'min-h-screen',
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

