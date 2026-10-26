import type { Schema, Struct } from '@strapi/strapi';

export interface HomeAbout extends Struct.ComponentSchema {
  collectionName: 'components_home_abouts';
  info: {
    displayName: 'About';
    icon: 'user';
  };
  attributes: {
    aboutCta: Schema.Attribute.Component<'shared.cta', false>;
    aboutGrid: Schema.Attribute.Component<'home.about-card', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    header: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeAboutCard extends Struct.ComponentSchema {
  collectionName: 'components_home_about_cards';
  info: {
    displayName: 'About Card';
    icon: 'file';
  };
  attributes: {
    aboutCta: Schema.Attribute.Component<'shared.cta', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeContact extends Struct.ComponentSchema {
  collectionName: 'components_home_contacts';
  info: {
    displayName: 'Contact';
    icon: 'phone';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    mailLink: Schema.Attribute.String & Schema.Attribute.Required;
    socials: Schema.Attribute.Component<'shared.social-link', true>;
  };
}

export interface HomeEventSection extends Struct.ComponentSchema {
  collectionName: 'components_home_event_sections';
  info: {
    displayName: 'EventSection';
    icon: 'calendar';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    header: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeFaq extends Struct.ComponentSchema {
  collectionName: 'components_home_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    header: Schema.Attribute.String & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'home.faq-item', true>;
  };
}

export interface HomeFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_home_faq_items';
  info: {
    displayName: 'FAQ Item';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'Hero';
    icon: 'house';
  };
  attributes: {
    description: Schema.Attribute.Text;
    header: Schema.Attribute.String & Schema.Attribute.Required;
    heroLogo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    primaryCtaText: Schema.Attribute.String;
    tagLine: Schema.Attribute.String;
    thistleIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface HomeJoinModal extends Struct.ComponentSchema {
  collectionName: 'components_home_join_modals';
  info: {
    displayName: 'Join Modal';
    icon: 'cursor';
  };
  attributes: {
    modalDesciption: Schema.Attribute.Text;
    modalTitle: Schema.Attribute.String;
    options: Schema.Attribute.Component<'shared.join-option', true>;
  };
}

export interface HomeRegistration extends Struct.ComponentSchema {
  collectionName: 'components_home_registrations';
  info: {
    displayName: 'Registration';
    icon: 'layout';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    header: Schema.Attribute.String & Schema.Attribute.Required;
    steps: Schema.Attribute.Component<'home.registration-step', true>;
  };
}

export interface HomeRegistrationStep extends Struct.ComponentSchema {
  collectionName: 'components_home_registration_step_s';
  info: {
    displayName: 'Registration Step ';
    icon: 'bulletList';
  };
  attributes: {
    stepDescription: Schema.Attribute.Text;
    stepHeader: Schema.Attribute.String & Schema.Attribute.Required;
    stepNumber: Schema.Attribute.String;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'CTA';
    icon: 'cursor';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedJoinOption extends Struct.ComponentSchema {
  collectionName: 'components_shared_join_options';
  info: {
    displayName: 'Join Option';
    icon: 'cursor';
  };
  attributes: {
    audienceKey: Schema.Attribute.Enumeration<['current', 'aspiring']> &
      Schema.Attribute.Required;
    optionDescription: Schema.Attribute.Text;
    optionLink: Schema.Attribute.String & Schema.Attribute.Required;
    optionTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedPageHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_page_headers';
  info: {
    displayName: 'Page Header';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    header: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'link';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    platform: Schema.Attribute.Enumeration<
      ['instagram', 'linkedin', 'titktok', 'email', 'other']
    > &
      Schema.Attribute.DefaultTo<'other'>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'home.about': HomeAbout;
      'home.about-card': HomeAboutCard;
      'home.contact': HomeContact;
      'home.event-section': HomeEventSection;
      'home.faq': HomeFaq;
      'home.faq-item': HomeFaqItem;
      'home.hero': HomeHero;
      'home.join-modal': HomeJoinModal;
      'home.registration': HomeRegistration;
      'home.registration-step': HomeRegistrationStep;
      'shared.cta': SharedCta;
      'shared.join-option': SharedJoinOption;
      'shared.link': SharedLink;
      'shared.page-header': SharedPageHeader;
      'shared.social-link': SharedSocialLink;
    }
  }
}
