<script setup lang="ts">
useServerSeoMeta({
  title: 'This is my Momoir - Home',
  ogTitle: 'This is my Momoir',
  description: 'This is my Momoir, a memoir (in blog form) of everything I have learned on this beautiful, exhausting, magical journey known as motherhood.',
  ogDescription: 'This is my Momoir, a memoir (in blog form) of everything I have learned on this beautiful, exhausting, magical journey known as motherhood.',
  ogImage: 'http://www.thisismymomoir.com/this-is-my-momoir-og.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <main class="bg-primary ">
    <section class="mx-4 lg:mx-auto max-w-6xl flex flex-col lg:flex-row">
      <article class="mt-4 p-4 lg:w-1/3 lg:mb-4 bg-white rounded shadow">
        <h2 class="text-4xl mb-4 font-cormorant font-bold">Hello, I'm Jen Vega!</h2>
        <p class="text-slate-900">I am the creator and writer of This Is My Momoir. Thank
          you so much for being
          here! Aside from being a writer, I am the wife of a pretty awesome guy named Dan Vega and the mom of two
          adorable little girls, Isabella and Juliana. We are lifelong Clevelanders living in the suburb of Rocky River,
          Ohio. I love reading and writing and have a Bachelor of Arts degree in English from Cleveland State University.
          I also love to cook, bake, exercise, and travel among other hobbies. <a href="/blog/about"
            class="text-blue-700 under hover:text-blue-600 hover:no-underline">Click here to learn more</a>.
        </p>
        <div class="pt-4 flex flex-row gap-8 justify-center">
          <a href="https://pinterest.com/thisismymomoir">
            <Icon name="entypo-social:pinterest-with-circle" size="1.75rem" class="text-rose-600" />
          </a>
          <a href="https://www.facebook.com/thisismymomoir">
            <Icon name="entypo-social:facebook" size="1.75rem" class="text-blue-500" />
          </a>
          <a href="https://www.instagram.com/thisismymomoir">
            <Icon name="entypo-social:instagram" size="1.75rem" class="text-primary" />
          </a>
          <a href="https://www.twitter.com/thisismymomoir">
            <Icon name="entypo-social:twitter" size="1.75rem" class="text-blue-500" />
          </a>
        </div>
      </article>
      <article class="lg:w-2/3 lg:ml-4 my-4">
        <NuxtLink to="/blog/welcome">
          <img src="/images/home/mom-girls-dress-up.png" alt="Welcome to This is my Momoir"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 724px"
            srcset="/images/home/mom-girls-dress-up-640.png 640w,
                                                                                                                            /images/home/mom-girls-dress-up-384.png 384w,
                                                                                                                            /images/home/mom-girls-dress-up-724.png 724w"
            class="lg:h-full w-full rounded shadow" />
        </NuxtLink>
      </article>
    </section>
    <section class="bg-slate-100 p-8">
      <article class="mx-auto max-w-6xl flex flex-col md:flex-row gap-4">
        <div class="flex-1">
          <h2 class="text-3xl md:text-4xl mb-2 font-cormorant font-bold">Stay in touch with me</h2>
          <p class="text-slate-900 mb-4">Sign up for my monthly newsletter and stay up to date with current blog posts.
          </p>
          <form action="" class="md:w-1/2">
            <input type="email" name="email" id="email" placeholder="Enter your email address" class="w-full p-3 rounded">
            <button class="bg-primary p-3 mt-4 rounded font-semibold hover:opacity-90 w-full"
              type="submit">Subscribe</button>
          </form>
        </div>
        <img src="/images/envelope.png" alt="envelope" class="h-36 hidden">
      </article>
    </section>

    <section class="bg-white p-4">
      <article class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <BlogCategoryCard title="Welcome" link="welcome" img="welcome-386.jpg" />
        <BlogCategoryCard title="#MomLife" link="category/momlife" img="momlife-386.jpg" />
        <BlogCategoryCard title="Health & Wellness" link="category/health-wellness" img="health_wellness-386.jpg" />
        <BlogCategoryCard title="Recipes & Meal Planning" link="category/meal-planning-recipes"
          img="recipes_meal_planning-386.jpg" />
        <BlogCategoryCard title="Celebrate!" link="category/celebrate" img="celebrate-386.jpg" />
        <BlogCategoryCard title="Travel" link="category/travel" img="travel-386.jpg" />
      </article>
    </section>

    <section class="bg-white p-4">
      <BlogLatestPostsByCategory categorySlug="momlife" />
      <BlogLatestPostsByCategory categorySlug="health-wellness" />
      <BlogLatestPostsByCategory categorySlug="meal-planning-recipes" />
      <BlogLatestPostsByCategory categorySlug="celebrate" />
      <BlogLatestPostsByCategory categorySlug="travel" />
    </section>

  </main>
</template>
