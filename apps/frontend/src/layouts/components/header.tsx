

import { MagicWandIcon } from "@radix-ui/react-icons"

export default function Header() {
    return (
        <header
            className="flex h-14 shrink-0 items-center gap-4 border-b border-gray-200 bg-white px-4 sm:px-6"
        >
            <p className="text-sm font-semibold text-gray-900">
                PirateHunter <span className="font-normal text-gray-400">/ C2</span>
            </p>

            <label htmlFor="TicketSearch" className="ml-4 hidden max-w-sm flex-1 sm:block">
                <span className="sr-only">Search tickets</span>
                <div className="relative">
                    <input
                        type="search"
                        id="TicketSearch"
                        placeholder="Search tickets"
                        className="w-full rounded-md border-gray-200 pl-9 text-sm shadow-xs focus:border-indigo-600 focus:ring-indigo-600"
                    />
                </div>
            </label>

            <div className="ml-auto flex items-center gap-3">
                <button
                    type="button"
                    className="hidden rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-indigo-700 sm:block"
                >
                    New ticket
                </button>

                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80&w=200"
                    className="size-8 rounded-full object-cover"
                />
            </div>
        </header>
    )
}