import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import incrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

const base = defineCloudflareConfig({
  incrementalCache,
  enableCacheInterception: true,
});

export default {
  ...base,
  functions: {
    // Edge-runtime OG image route must be bundled as a separate edge function
    ogApi: {
      routes: ["app/api/og/route"],
      runtime: "edge",
    },
  },
};
