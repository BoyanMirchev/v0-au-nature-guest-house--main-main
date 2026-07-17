export {}

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      parameters?: Record<
        string,
        string | number | boolean | undefined
      >,
    ) => void
  }
}