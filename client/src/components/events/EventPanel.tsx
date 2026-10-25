import Icon from "@/components/ui/Icon";

export type PanelItem = {
  id: string;
  title: string;
  description: string;
  location: string;
  dateLabel: string;
  statusLabel: string;
  status: "upcoming" | "next" | "previous" | "past";
  likes: number;
  cta: { text: string; link: string };
};

type EventPanelProps = {
  item: PanelItem;
  liked: boolean;
  saved: boolean;
  commented: boolean;
  onLike: () => void;
  onComment: () => void;
  onShare: () => void;
  onSave: () => void;
};

/**
 * The details under the carousel. The like, comment, share and save buttons
 * respond visually only (the state lives in the carousel). Nothing is written
 * to a database, as the brief requires for the MVP.
 */
export default function EventPanel({ item, liked, saved, commented, onLike, onComment, onShare, onSave }: EventPanelProps) {
  const likeCount = item.likes + (liked ? 1 : 0);

  return (
    <article className="insta-details" aria-label="Selected event details">
      <div className="insta-action-row">
        <button
          className={`icon-button${liked ? " is-liked" : ""}`}
          type="button"
          aria-label={liked ? "Unlike this event" : "Like this event"}
          aria-pressed={liked}
          onClick={onLike}
        >
          <Icon name="eventLike" />
        </button>
        <button
          className={`icon-button${commented ? " is-active" : ""}`}
          type="button"
          aria-label="Comment on this event"
          aria-pressed={commented}
          onClick={onComment}
        >
          <Icon name="eventComment" />
        </button>
        <button className="icon-button" type="button" aria-label="Copy link to this event" onClick={onShare}>
          <Icon name="eventShare" />
        </button>
        <button
          className={`icon-button save-button${saved ? " is-saved" : ""}`}
          type="button"
          aria-label={saved ? "Remove this event from saved" : "Save this event"}
          aria-pressed={saved}
          onClick={onSave}
        >
          <Icon name="eventSave" />
        </button>
      </div>

      <div className="insta-likes">
        {likeCount} {likeCount === 1 ? "like" : "likes"}
      </div>
      <h3 className="insta-title">{item.title}</h3>
      <p className="insta-desc">
        <strong>thistlenetwork</strong>
        {item.description}
      </p>
      <div className="post-meta">
        <span className="post-date">{item.dateLabel}</span>
        <span className={`status-tag status-${item.status}`}>{item.statusLabel}</span>
      </div>
      <a className="insta-cta" href={item.cta.link}>
        {item.cta.text} <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}
