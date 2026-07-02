export function VideoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="grid items-center gap-8 rounded-[24px] border border-petrol/10 bg-white p-6 shadow-soft lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Vídeo</p>
        <h3 className="text-2xl font-semibold text-ink">{title}</h3>
        <p className="mt-4 text-base leading-8 text-graphite">{text}</p>
      </div>
      <div className="flex aspect-video items-center justify-center rounded-subtle border border-dashed border-petrol/25 bg-mist text-center text-sm font-medium leading-6 text-petrol">
        Conteúdo em vídeo
        <br />
        Material educativo do atendimento
      </div>
    </div>
  );
}
