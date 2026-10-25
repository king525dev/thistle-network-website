import Icon from "@/components/ui/Icon";
import type { ContactContent } from "@/types/home";
import { socialButtonIcon } from "./social-icons";

type ContactProps = {
  content: ContactContent;
};

/**
 * The contact band at the bottom of the homepage. It is a homepage section only,
 * not part of the shared footer, and its content lives on the Home Page single type.
 */
export default function Contact({ content }: ContactProps) {
  return (
    <div className="container contact-inner">
      <p className="eyebrow">{content.eyebrow}</p>
      <a className="contact-email" href={`mailto:${content.mailLink}`}>
        {content.mailLink}
      </a>
      <div className="social-links">
        {content.socials.map((social) => {
          const icon = socialButtonIcon(social.platform);
          return (
            <a key={social.id} className="social-btn" href={social.link} aria-label={`Thistle Network on ${social.text}`}>
              {icon && <Icon name={icon} />}
              {social.text}
            </a>
          );
        })}
      </div>
    </div>
  );
}
