import useSWR from 'swr'

import StatCard from '../components/stat-card'
import DefaultLayout from '../layouts/default'

import { usePirateStore } from "../stores/pirates";
import { useNavyStore } from "../stores/navy";
import { useMerchantStore } from "../stores/merchants";
import ReportsFeature from '../features/reports';

const URL = "https://jsonplaceholder.typicode.com";


const fetcher = (path: string) => fetch(`${URL}${path}`).then((res) => res.json())

export default function HomePage() {
    const pirates = usePirateStore((state) => state.count);
    const navy = useNavyStore((state) => state.count);
    const merchant = useMerchantStore((state) => state.count);

    const { data, error, isLoading } = useSWR(`/posts`, fetcher)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    console.log(data);

    return (
        <DefaultLayout>

            <div className="border-b border-gray-200 bg-white px-4 py-4 sm:px-6">
                <h1 className="text-lg font-semibold text-gray-900">Observations</h1>

                <div className="mt-3 flex gap-4">
                    <StatCard title="Total Pirates" value={pirates} change="67.81%" />
                    <StatCard title="Total Navy" value={navy} change="67.81%" />
                    <StatCard title="Total Merchants" value={merchant} change="67.81%" />
                    <StatCard title="Total" value={pirates + navy + merchant} change="67.81%" />
                </div>
            </div>

            <div className="border-b border-gray-200 bg-white px-4 py-4 sm:px-6">
                <h1 className="text-lg font-semibold text-gray-900">Reports</h1>

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

            <ReportsFeature data={data} />
        </DefaultLayout>
    )
}
