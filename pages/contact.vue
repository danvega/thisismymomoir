<script setup lang="ts">
useServerSeoMeta({
  title: 'This Is My Momoir - Contact',
  ogTitle: 'This Is My Momoir - Contact',
  description: 'This Is My Momoir, a memoir (in blog form) of everything I have learned on this beautiful, exhausting, magical journey known as motherhood.',
  ogDescription: 'This Is My Momoir, a memoir (in blog form) of everything I have learned on this beautiful, exhausting, magical journey known as motherhood.',
  ogImage: 'http://www.thisismymomoir.com/this-is-my-momoir-og.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <main class="bg-white scroll-smooth">
    <section class="bg-primary p-4 lg:mx-auto lg:max-w-6xl">
      <h2 class="text-4xl font-bold leading-tight text-gray-900">Contact</h2>
    </section>
    <section class="mx-auto max-w-6xl mb-4 flex flex-col lg:flex-row divide-x-2 mt-4">
      <div class="lg:w-2/3 p-4">
        <p class=" text-gray-800 text-left mb-4">Let's connect! Whether you have questions, ideas, or feedback, I'd love
          to hear from you. For your convenience, I've provided a simple message form below that you can use to send me a
          message directly. Just fill it out, hit "Send Message," and I'll get back to you as soon as I can..</p>
        <form name="contact" netlify class="space-y-8" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
            <input type="text" id="name"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Your Name" required>
          </div>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input type="email" id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Your Email Address" required>
          </div>

          <div class="sm:col-span-2">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
              message</label>
            <textarea id="message" rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-slate-900 rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send
            Message</button>
        </form>
      </div>
      <div class="lg:w-1/3 px-8 py-4">
        <p class="lg:text-sm">If you prefer connecting through social media, you're in luck! You can find me on various
          platforms, where I
          share updates, interesting articles, and engage with my followers. Feel free to check out my profiles and follow
          or connect with me on your favorite platform. Here are the links to my social networks:</p>
        <div class="flex flex-col mt-4">
          <a href="https://www.instagram.com/thisismymomoir" class="py-4">
            <Icon name="entypo-social:instagram" size="1.5rem" class="text-slate-900" /> Instagram
          </a>
          <a href="https://www.facebook.com/thisismymomoir" class="py-4">
            <Icon name="entypo-social:facebook" size="1.5rem" class="text-slate-900" /> Facebook
          </a>
          <a href="https://pinterest.com/thisismymomoir" class="py-4">
            <Icon name="entypo-social:pinterest-with-circle" size="1.5rem" class="text-slate-900" /> Pinterest
          </a>
          <a href="https://www.twitter.com/thisismymomoir" class="py-4">
            <Icon name="entypo-social:twitter" size="1.5rem" class="text-slate-900" /> Twitter
          </a>
        </div>
      </div>
    </section>
  </main>
</template>



