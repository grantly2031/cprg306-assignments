import NewItem from "./new-item";
import Link from 'next/link'; 

export default function Page() {
  return (
    <main className="flex justify-center w-full bg-slate-100" aria-label="Shopping List App">
      <section className="flex flex-col items-center">
        <NewItem />

        <Link href="/week-4" className="text-blue-500 hover:underline mt-4">
          Go to Week 4
        </Link>
      </section>
    </main>
  );
}
