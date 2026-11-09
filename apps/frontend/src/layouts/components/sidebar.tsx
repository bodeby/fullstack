
import { NavLink } from 'react-router'


interface Link {
    to: string;
    label: string;
    count?: number;
}

const links: Link[] = [
    { to: '/', label: 'Overview', count: 4 },
    { to: '/scanter', label: 'Scanter', count: 11 },
];

const ActiveLinkClass = 'bg-indigo-50 text-indigo-700';
const InactiveLinkClass = 'text-gray-600 hover:bg-gray-100 hover:text-gray-900';


const LinkComponent = (link: Link) => (
    <li key={link.to}>
        <NavLink
            to={link.to}
            className={({ isActive }) =>
                `flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition ${isActive
                    ? ActiveLinkClass
                    : InactiveLinkClass
                }`
            }
        >
            {link.label}
            {link.count && (
                <span
                    className={`rounded-full px-2 py-0.5 text-xs ${link.to === '/' ? 'bg-white text-indigo-700' : 'bg-gray-100 text-gray-600'
                        }`}
                >
                    {link.count}
                </span>
            )}
        </NavLink>
    </li>
);

const TagComponent = (tag: { name: string; color: string }) => (
    <li key={tag.name}>
        <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100"
        >
            <span className={`size-2 rounded-full ${tag.color}`}></span>
            {tag.name}
        </a>
    </li>
);


export default function Sidebar() {
    return (
        <nav
            id="queue-rail"
            aria-label="Queues"
            className="fixed inset-y-14 start-0 z-40 w-56 -translate-x-full overflow-y-auto border-e border-gray-200 bg-white p-3 transition-transform duration-300 peer-checked:translate-x-0 lg:static lg:translate-x-0"
        >
            <ul className="space-y-1">
                {links.map((link) => <LinkComponent key={link.to} {...link} />)}
            </ul>

            <p className="mt-6 px-3 text-xs font-medium tracking-wide text-gray-400 uppercase">Tags</p>
            <ul className="mt-2 space-y-1">
                <li>
                    <a
                        href="#"
                        className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100"
                    >
                        <span className="size-2 rounded-full bg-rose-500"></span>
                        Critical
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100"
                    >
                        <span className="size-2 rounded-full bg-amber-500"></span>
                        Warning
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100"
                    >
                        <span className="size-2 rounded-full bg-emerald-500"></span>
                        Safe
                    </a>
                </li>
            </ul>
        </nav>
    );
}