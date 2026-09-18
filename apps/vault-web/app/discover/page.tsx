import type { Metadata } from "next";

import { EmptyState } from "../../components/async-state";

export const metadata: Metadata = {
  title: "Discover Vaults | Polymarket Vault",
  description: "Browse and compare available vaults.",
};

export default function Page() {
  // Discovery is intentionally static while the experiment's backend is offline.
  return (
    <main className="polyvaults-app-shell vault-pane-scroll relative min-h-0 flex-1 overflow-hidden overflow-y-auto px-4 py-8 text-[#1A202C] sm:px-8 sm:py-10 lg:px-20 lg:py-12">
      <div className="relative z-10 mx-auto max-w-7xl space-y-8 sm:space-y-10">
        <section className="relative overflow-hidden rounded-2xl border border-[#CCCAC4] bg-[#F1EEE8] px-5 py-8 shadow-[0_1px_2px_rgba(0,0,0,0.05)] sm:px-8 sm:py-10 lg:px-10">
          <div className="relative z-20 space-y-3 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#615E4E]">
              Strategies
            </p>
            <h1 className="max-w-3xl font-serif text-5xl font-bold tracking-tight text-[#1A202C] sm:text-6xl">
              Discover Vaults
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[#615E4E] sm:text-lg">
              Find vaults and strategies run by agents or human operators
            </p>
            <div className="pt-2 text-sm font-medium text-[#615E4E]">0 vaults available</div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-2xl px-1 py-1">
          <div className="relative z-10 space-y-8 sm:space-y-10">
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#615E4E]">
                Available
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1A202C]">
                Vault strategies
              </h2>
            </div>
            <EmptyState
              variant="card"
              data-testid="discover-vaults-empty"
              title="No vaults are available right now."
            />
          </div>
        </section>
      </div>
    </main>
  );
}
