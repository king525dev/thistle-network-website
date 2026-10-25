import type { RegistrationContent } from "@/types/home";

type RegistrationProps = {
  content: RegistrationContent;
};

/** Three numbered steps explaining how registration works. */
export default function Registration({ content }: RegistrationProps) {
  return (
    <section id="registration" aria-label="How registration works">
      <section className="registration-explainer">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">{content.eyebrow}</div>
            <h2>{content.header}</h2>
          </div>
          <div className="steps-grid">
            {content.steps.map((step) => (
              <div className="step reveal" key={step.id}>
                <span className="step-number">{step.stepNumber}</span>
                <h3>{step.stepHeader}</h3>
                <p>{step.stepDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
