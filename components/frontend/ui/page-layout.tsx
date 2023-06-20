type Props = {
  title: React.ReactNode;
  description: React.ReactNode;
  children: React.ReactNode;
};

export default function PageLayout({ title, description, children }: Props) {
  return (
    <main>
      <div className="w-full max-w-[360px] mx-auto pt-10 lg:pt-[100px] pb-20 lg:pb-[200px] flex flex-col items-center gap-3">
        <h1 className="text-[32px] lg:text-6xl font-extrabold text-zinc-900 text-center">
          {title}
        </h1>

        <p className="font-semibold text-center text-xs lg:text-base">
          {description}
        </p>

        {children}
      </div>
    </main>
  );
}
