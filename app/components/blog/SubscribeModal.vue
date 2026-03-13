<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const isVisible = ref(false)
const hasTriggered = ref(false)
const subscribedCookie = useCookie('momoir_subscribed', { maxAge: 365 * 24 * 60 * 60 })

const { y } = useWindowScroll()

watch(y, () => {
  if (hasTriggered.value || subscribedCookie.value) return

  const scrollPercent = y.value / (document.documentElement.scrollHeight - window.innerHeight)
  if (scrollPercent >= 0.5) {
    hasTriggered.value = true
    isVisible.value = true
  }
})

function closeModal(cookieValue: string, maxAge?: number) {
  isVisible.value = false
  if (maxAge) {
    subscribedCookie.value = undefined
    subscribedCookie.value = cookieValue
    // Re-create with shorter expiry
    const shortCookie = useCookie('momoir_subscribed', { maxAge })
    shortCookie.value = cookieValue
  } else {
    subscribedCookie.value = cookieValue
  }
}

function onDismiss() {
  closeModal('dismissed', 7 * 24 * 60 * 60)
}

function onAlreadySubscribed() {
  closeModal('manual')
}

function onBackdropClick(e: MouseEvent) {
  if ((e.target as HTMLElement).classList.contains('subscribe-modal-backdrop')) {
    onDismiss()
  }
}

// Listen for ConvertKit form success
onMounted(() => {
  useHead({
    script: [
      {
        src: 'https://f.convertkit.com/ckjs/ck.5.js',
        type: 'text/javascript',
        defer: true,
        tagPosition: 'bodyClose',
      },
    ],
  })

  // ConvertKit fires a custom event on successful subscription
  const observer = new MutationObserver(() => {
    const successAlert = document.querySelector('.subscribe-modal-form .formkit-alert-success')
    if (successAlert) {
      closeModal('subscribed')
      observer.disconnect()
    }
  })

  nextTick(() => {
    const formEl = document.querySelector('.subscribe-modal-form')
    if (formEl) {
      observer.observe(formEl, { childList: true, subtree: true, attributes: true })
    }
  })

  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <Transition name="modal-fade">
    <div
      v-if="isVisible"
      class="subscribe-modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      @click="onBackdropClick"
    >
      <div class="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <!-- Close button -->
        <button
          class="absolute top-4 right-4 text-gray-400 transition-colors hover:text-gray-600"
          aria-label="Close"
          @click="onDismiss"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>

        <!-- Content -->
        <h2 class="mb-2 text-center font-cormorant text-3xl font-bold text-gray-900">
          Don't miss a post!
        </h2>
        <p class="mb-6 text-center text-sm text-slate-600">
          Sign up for my newsletter and stay up to date.
        </p>

        <!-- ConvertKit form -->
        <div class="subscribe-modal-form">
          <form
            action="https://app.convertkit.com/forms/4987777/subscriptions"
            class="seva-form formkit-form"
            method="post"
            data-sv-form="4987777"
            data-uid="b1ea85dbf7"
            data-format="inline"
            data-version="5"
            data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":""},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
            min-width="400 500 600 700 800"
          >
            <div data-style="clean">
              <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
              <div data-element="fields" data-stacked="true" class="seva-fields formkit-fields">
                <div class="formkit-field">
                  <input
                    class="formkit-input"
                    name="email_address"
                    aria-label="Email Address"
                    placeholder="Email Address"
                    required
                    type="email"
                    style="color: rgb(0, 0, 0); border-color: rgb(227, 227, 227); border-radius: 8px; font-weight: 400;"
                  />
                </div>
                <button
                  data-element="submit"
                  class="formkit-submit"
                  style="color: rgb(0, 0, 0); background-color: rgb(224, 195, 198); border-radius: 8px; font-weight: 600;"
                >
                  <div class="formkit-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </form>
        </div>

        <!-- Already subscribed -->
        <button
          class="mt-4 w-full text-center text-sm text-slate-500 underline underline-offset-2 transition-colors hover:text-slate-700"
          @click="onAlreadySubscribed"
        >
          I'm already subscribed
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
