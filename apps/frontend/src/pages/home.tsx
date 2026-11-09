

import StatCard from '../components/stat-card'
import DefaultLayout from '../layouts/default'


export default function HomePage() {
  return (
    <DefaultLayout>

      <div className="border-b border-gray-200 bg-white px-4 py-4 sm:px-6">
        <h1 className="text-lg font-semibold text-gray-900">My tickets</h1>

        <div className="mt-3 flex gap-1">
            <StatCard title="Total Tickets" value="4" change="67.81%"/>
            <StatCard title="Total Tickets" value="4" change="67.81%"/>
            <StatCard title="Total Tickets" value="4" change="67.81%"/>
        </div>
      </div>

      <div className="border-b border-gray-200 bg-white px-4 py-4 sm:px-6">
        <h1 className="text-lg font-semibold text-gray-900">My tickets</h1>

        <div className="mt-3 flex gap-1">
          <button
            aria-pressed="true"
            className="rounded-md bg-gray-900 px-3 py-1.5 text-xs font-medium text-white"
          >
            All
          </button>
          <button
            aria-pressed="false"
            className="rounded-md px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
          >
            Open
          </button>
          <button
            aria-pressed="false"
            className="rounded-md px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
          >
            Pending
          </button>
          <button
            aria-pressed="false"
            className="rounded-md px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
          >
            Closed
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr className="*:px-4 *:py-3 *:text-left *:text-xs *:font-medium *:text-gray-500">
                <th scope="col">Ticket</th>
                <th scope="col" className="hidden sm:table-cell">Requester</th>
                <th scope="col">Status</th>
                <th scope="col" className="hidden md:table-cell">Priority</th>
                <th scope="col" className="hidden md:table-cell">Updated</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr className="cursor-pointer hover:bg-gray-50">
                <td className="px-4 py-3">
                  <p className="text-sm font-medium text-gray-900">Can't export invoices as CSV</p>
                  <p className="text-xs text-gray-500">#4821</p>
                </td>
                <td className="hidden px-4 py-3 text-sm text-gray-600 sm:table-cell">Marcus Boyle</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-700">
                    Open
                  </span>
                </td>
                <td className="hidden px-4 py-3 md:table-cell">
                  <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs text-red-700">
                    High
                  </span>
                </td>
                <td className="hidden px-4 py-3 text-sm text-gray-500 md:table-cell">
                  12 minutes ago
                </td>
              </tr>

              <tr className="cursor-pointer bg-indigo-50/60 hover:bg-indigo-50">
                <td className="px-4 py-3">
                  <p className="text-sm font-medium text-gray-900">
                    Team seats not syncing after upgrade
                  </p>
                  <p className="text-xs text-gray-500">#4819</p>
                </td>
                <td className="hidden px-4 py-3 text-sm text-gray-600 sm:table-cell">
                  Priya Natarajan
                </td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-700">
                    Open
                  </span>
                </td>
                <td className="hidden px-4 py-3 md:table-cell">
                  <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs text-red-700">
                    High
                  </span>
                </td>
                <td className="hidden px-4 py-3 text-sm text-gray-500 md:table-cell">
                  41 minutes ago
                </td>
              </tr>

              <tr className="cursor-pointer hover:bg-gray-50">
                <td className="px-4 py-3">
                  <p className="text-sm font-medium text-gray-900">
                    Question about annual billing discount
                  </p>
                  <p className="text-xs text-gray-500">#4812</p>
                </td>
                <td className="hidden px-4 py-3 text-sm text-gray-600 sm:table-cell">
                  Owen Baptiste
                </td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs text-amber-700">
                    Pending
                  </span>
                </td>
                <td className="hidden px-4 py-3 md:table-cell">
                  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
                    Low
                  </span>
                </td>
                <td className="hidden px-4 py-3 text-sm text-gray-500 md:table-cell">3 hours ago</td>
              </tr>

              <tr className="cursor-pointer hover:bg-gray-50">
                <td className="px-4 py-3">
                  <p className="text-sm font-medium text-gray-900">
                    Feature request: dark mode for reports
                  </p>
                  <p className="text-xs text-gray-500">#4790</p>
                </td>
                <td className="hidden px-4 py-3 text-sm text-gray-600 sm:table-cell">
                  Freya Lindqvist
                </td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs text-amber-700">
                    Pending
                  </span>
                </td>
                <td className="hidden px-4 py-3 md:table-cell">
                  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
                    Low
                  </span>
                </td>
                <td className="hidden px-4 py-3 text-sm text-gray-500 md:table-cell">1 day ago</td>
              </tr>
            </tbody>
          </table>
        </div>

        <nav aria-label="Pagination" className="mt-4 flex items-center justify-between">
          <p className="text-xs text-gray-500">Showing 4 of 37 open tickets</p>

          <div className="flex gap-1">
            <a
              href="#"
              className="inline-flex size-8 items-center justify-center rounded-md border border-gray-200 text-gray-400"
            >
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="size-3 rtl:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex size-8 items-center justify-center rounded-md border border-gray-200 text-gray-600"
            >
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="size-3 rtl:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </DefaultLayout>
  )
}
