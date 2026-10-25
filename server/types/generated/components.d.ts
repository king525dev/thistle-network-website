import type { Schema, Struct } from '@strapi/strapi';

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
      'shared.cta': SharedCta;
      'shared.join-option': SharedJoinOption;
      'shared.link': SharedLink;
      'shared.page-header': SharedPageHeader;
      'shared.social-link': SharedSocialLink;
    }
  }
}
