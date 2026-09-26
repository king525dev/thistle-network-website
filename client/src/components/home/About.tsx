import Container from "@/components/ui/Container";

export type AboutContent = {
  lead: string;
  paragraphs: string[];
  tagline: string;
};

const defaultContent: AboutContent = {
  lead: "Thistle Network is a Scottish apprentice community focused on connection, growth and shared opportunity.",
  paragraphs: [
    "We bring apprentices together across industries, universities and training providers to build confidence, expand networks and create a supportive space for early talent in Scotland.",
    "Our aim is to make apprenticeships feel connected rather than isolated. Through meet-ups, peer support and collaborative events, we help apprentices develop personally and professionally while contributing to a stronger early-career ecosystem in Scotland.",
  ],
  tagline: "Thistle Network is built by Scottish apprentices for Scottish apprentices.",
};

type AboutProps = {
  content?: AboutContent;
};

export default function About({ content = defaultContent }: AboutProps) {
  return (
    <section className="aims" id="about">
      <Container className="aims-inner">
        <p className="eyebrow eyebrow-center">Who we are</p>
        <p className="lead">{content.lead}</p>
        {content.paragraphs.map((paragraph) => (
          <p className="body-text" key={paragraph}>
            {paragraph}
          </p>
        ))}
        <p className="tagline">{content.tagline}</p>
      </Container>
    </section>
  );
}
