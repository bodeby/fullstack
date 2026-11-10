
import ScanterFeature from '../features/scanter';
import DefaultLayout from '../layouts/default'

export default function ScanterPage() {
    return (
        <DefaultLayout>
            <main className="flex h-screen flex-col">
                <section className="flex h-16 shrink-0 items-center border-b border-gray-200 bg-white px-4 sm:px-6">
                    <h1 className="text-lg font-semibold text-gray-900">Scanter Radar</h1>
                </section>

                <section className="min-h-0 flex-1">
                    <ScanterFeature />
                </section>
            </main>
        </DefaultLayout>
    );
}