const SITE_URL = 'https://www.thisismymomoir.com'

export function useCanonical(path?: string) {
  const route = useRoute()
  const canonicalPath = path ?? route.path

  useHead({
    link: [
      { rel: 'canonical', href: `${SITE_URL}${canonicalPath}` },
    ],
  })
}
