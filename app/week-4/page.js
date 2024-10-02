import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="flex justify-center w-full bg-slate-100" aria-label="Shopping List App">
      <section className="flex flex-col items-center">
        <NewItem />
      </section>
    </main>
  );
}
