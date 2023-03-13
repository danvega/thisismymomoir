<script setup lang="ts">
const categoryParam = useRoute().params.category;
const category = ref('');
const postCover = ref('');
const featuredPost = ref('');

switch (categoryParam) {
  case "momlife":
    category.value = "#MomLife";
    postCover.value = "momlife.jpeg";
    featuredPost.value = "Becoming a mom has changed my life in more ways than I can count. I often tell my husband that I don't feel like my life really began until our daughter was born. Obviously, that's not the case, and the 34 years of life that I lived before Bella (B.B. was a whole different era) were shaping me into the person I am today. The first time I held my baby in my arms, I felt like I had finally arrived at the chapter I was meant to be in. I felt the same way when Juliana was born. I had this overwhelming feeling of peace, and I knew that my family was complete.";
    break;
  case "health":
    category.value = "Health & Wellness";
    postCover.value = "health_wellness.jpeg";
    break;
  case "recipes":
    category.value = "Recipes & Meal Planning";
    postCover.value = "recipes_meal_planning.jpeg";
    break;
  case "celebrate":
    category.value = "Celebrate!";
    postCover.value = "celebrate.jpeg";
    break;
  case "travel":
    category.value = "Travel";
    postCover.value = "travel.jpeg";
    break;
}

const { data: posts } = await useFetch<Post[]>("/api/notion/posts/" + encodeURI(category.value));
</script>

<template>
  <main class="bg-primary">
    <section class="mx-auto max-w-6xl flex mb-4">
      <article class="w-2/3 bg-white rounded p-4 shadow mt-4 mr-4">
        <h2 class="text-4xl mb-4 font-bold" style="font-family: 'Cormorant Garamond'">{{ category }}</h2>
        <p class="leading-7 text-slate-900 mb-2">
          {{ featuredPost }}
        </p>
      </article>
      <article class="w-1/3">
        <img :src="`/images/category/${postCover}`" class="w-full h-max object-cover mt-4 rounded shadow" />
      </article>
    </section>

    <section class=" bg-white">
      <div class="mx-auto max-w-6xl py-8">
        <h3 class="text-3xl font-bold mb-8">Latest Posts in {{ category }}</h3>
        <article class="grid grid-cols-3 gap-10">
          <div v-for="post in posts" :key="post.id" class="rounded-md shadow-md bg-slate-50">
            <NuxtLink :to="`/blog/${post.slug}`">
              <img :src="`/images/blog/thumbnails/${post.cover}`" class="w-full h-48 object-cover rounded-md" />
            </NuxtLink>
            <div class="p-6">
              <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
              <p class="text-gray-700 mb-4">We need to figure out a good way to grab an excerpt for each blog post to give
                the reader a teaser as to what this blog post is all about.</p>
              <NuxtLink :to="`/blog/${post.slug}`"
                class="inline-block bg-primary hover:opacity-90 text-slate-900 py-2 px-4 rounded float-right mb-8">Read
                More
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>
    </section>


  </main>
</template>
