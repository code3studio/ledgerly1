import posthog, { PostHog } from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect, useState } from "react";
import { useConsent } from "./consent";


export function PHProvider({ children }) {
  const { consent } = useConsent();
  const [phInstance, setPhInstance] = useState<PostHog | null>(null);

  useEffect(() => {
    const initPostHog = (mode) => {
      const ph = posthog.init(
        "phc_dvLAOScCPWS1kXSnJlvSHNnfXDvarKIsSN7Q32yt20s",
        {
          persistence: mode === "memory" ? "memory" : "localStorage+cookie",
          api_host: "https://eu.posthog.com",
          ...(mode !== "memory" && {
            bootstrap: { distinctID: phInstance?.get_distinct_id() },
          }),
        },
        mode
      );
      
      setPhInstance(ph || null);
    };

    if (consent === "initiating" || (phInstance && consent !== "granted")) {
      return;
    }
    if (consent === "undecided" || consent === "denied") {
      initPostHog("memory");
    } else if (consent === "granted") {
      initPostHog("cookie");
    }
  }, [consent, phInstance]);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
