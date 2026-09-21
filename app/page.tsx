import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold text-center">
        Русский язык для иностранцев
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-xl">
        Индивидуальные занятия онлайн с опытным преподавателем
      </p>
      <Button size="lg">Записаться на пробный урок</Button>
    </main>
  );
}