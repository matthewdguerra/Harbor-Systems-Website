import Chatbot from "@/components/Chatbot";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata = {
  title: "AI Demo"
};

export default function DemoPage() {
  return (
    <>
      <section className="section-dark px-5 pb-20 pt-36">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-gold">AI Demo</p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Experience a Harbor-style AI assistant.
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/70">
            Ask how operational intelligence, dashboards, automation, and responsible AI could support a church, nonprofit, or school.
          </p>
        </div>
      </section>

      <SectionWrapper
        eyebrow="Try It"
        title="Ask about your organization's workflows"
        description="This demo uses the same site API route as the floating chatbot. Add your Anthropic API key in Vercel or .env.local to enable live Claude responses."
        white
      >
        <div className="mx-auto max-w-3xl">
          <Chatbot embedded />
        </div>
      </SectionWrapper>
    </>
  );
}
