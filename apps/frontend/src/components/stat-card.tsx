
interface StatCardProps {
    title: string;
    value: number;
    change: string;
    icon?: React.ReactNode;
}

const StatCard = ({ title, value, change }: StatCardProps) => {
    return (
        <article className="rounded-lg border border-gray-100 bg-blue-100 p-6 grow">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-500 capitalize">{title}</p>
                    <p className="text-2xl font-medium text-gray-900">{value}</p>
                </div>
            </div>

            <div className="mt-1 flex gap-1 text-green-600">
                <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                </svg>

                <span className="sr-only">Increase: </span>

                <p className="flex gap-2 text-xs">
                    <span className="font-medium"> {change} %</span>
                    <span className="text-gray-500"> Since last week </span>
                </p>
            </div>
        </article>
    )
}

export default StatCard;