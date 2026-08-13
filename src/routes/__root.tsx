import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Seite nicht gefunden</h2>
        <p className="mt-2 text-sm text-muted-foreground">Diese Seite existiert nicht.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center rounded-md bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Etwas ist schiefgelaufen</h1>
        <p className="mt-2 text-sm text-muted-foreground">Bitte versuche es erneut.</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 inline-flex items-center rounded-md bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground"
        >
          Erneut versuchen
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "M³ Performance – Personal Training & Gesundheit" },
      { name: "description", content: "Mehr Energie. Mehr Leistung. Mehr Leben. Personal Training, Ernährung, Stoffwechsel & Gesundheitscoaching mit Michél Meier." },
      { property: "og:title", content: "M³ Performance – Personal Training & Gesundheit" },
      { property: "og:description", content: "Mehr Energie. Mehr Leistung. Mehr Leben. Personal Training, Ernährung, Stoffwechsel & Gesundheitscoaching mit Michél Meier." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "M³ Performance – Personal Training & Gesundheit" },
      { name: "twitter:description", content: "Mehr Energie. Mehr Leistung. Mehr Leben. Personal Training, Ernährung, Stoffwechsel & Gesundheitscoaching mit Michél Meier." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e31dabdd-0070-4a08-8c0f-e2a44228e42e/id-preview-c9dfe4c7--8fe7207a-94ec-46ae-9256-874e1ca745d9.lovable.app-1783887060743.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e31dabdd-0070-4a08-8c0f-e2a44228e42e/id-preview-c9dfe4c7--8fe7207a-94ec-46ae-9256-874e1ca745d9.lovable.app-1783887060743.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
