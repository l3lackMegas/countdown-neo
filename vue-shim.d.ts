// For some weird reason, it is needed.
declare module 'particles.vue3'
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}
