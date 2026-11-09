
import DefaultLayout from '../layouts/default'

export default function ScanterPage() {
    return (
        <DefaultLayout>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-4xl font-bold">Welcome to the Scanter Page!</h1>
                <p className="mt-4 text-lg text-gray-600">This is a placeholder for the Scanter page content.</p>
            </div>
        </DefaultLayout>
    );
}