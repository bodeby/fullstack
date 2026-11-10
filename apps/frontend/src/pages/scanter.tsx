
import ScanterFeature from '../features/scanter';
import DefaultLayout from '../layouts/default'

export default function ScanterPage() {
    return (
        <DefaultLayout>
            <section className="border-b border-gray-200 bg-white px-4 py-4 sm:px-6 h-[64px] flex items-center">
                <h1 className="text-lg font-semibold text-gray-900">Scanter</h1>
            </section>
            
            <section className="h-[calc(100%-64px)]">
                <ScanterFeature />
            </section>

            <section className="relative z-10 flex h-[64px] items-center justify-between border-t border-gray-200 bg-white px-4 py-4 sm:px-6">
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        className="rounded-md bg-gray-900 px-3 py-1.5 text-xs font-medium text-white"
                    >
                        All
                    </button>
                    <button
                        type="button"
                        className="rounded-md px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
                    >
                        Open
                    </button>
                </div>
            </section>
        </DefaultLayout>
    );
}