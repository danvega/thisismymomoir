export function useCanonical(path?: string) {
  const route = useRoute()
  const { siteUrl } = useRuntimeConfig().public
  const canonicalPath = path ?? route.path

  useHead({
    link: [
      { rel: 'canonical', href: `${siteUrl}${canonicalPath}` },
    ],
  })
}
