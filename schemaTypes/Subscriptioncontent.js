
import { defineType, defineField } from "sanity";

export const Subscriptiontext = defineType({
  name: "subscriptiontext",
  title: "Subscriptiontext",
  type: "document",
  fields: [
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
    }),
    defineField({
        name: "sectionname",
        title: "Sectionname",
        type: 'string',
        description: "Main headline text for the hero section.",
      //   validation: (Rule) => Rule.required().min(10).max(80),
      }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "array",
      of: [{ type:"block" }],
      description: "Main headline text for the hero section.",
    //   validation: (Rule) => Rule.required().min(10).max(80),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'headline'},
      validation: (rule) => rule.required(),

    }),
    defineField({
      name: "subheadline",
      title: "Subheadline (max - 500 letters)",
      type: "array",
      of: [{ type:"block" }],
      description: "Short subheading text to display below the headline.",
      validation: (Rule) => Rule.max(500),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  
  
  ],

  
});
