/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly VITE_FORMSPREE_CONTACT_ENDPOINT?: string
  readonly VITE_FORMSPREE_NEWSLETTER_ENDPOINT?: string
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}
