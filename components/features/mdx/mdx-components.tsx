"use client";

import React from "react";
import Image from "next/image";
import { Callout } from "./callout";
import CollapsibleCodeBlock from "./collapsible-codeblock";
import PreWrapper from "./pre-wrapper";
import { mdxComponents } from "@/content/compiled";

const components = {
  Image,
  Callout,
  CollapsibleCodeBlock,
  pre: PreWrapper,
};

interface MdxProps {
  slug: string;
}

export function MDXContent({ slug }: MdxProps) {
  // Precompiled at build time (npm run mdx): no runtime eval,
  // which Cloudflare Workers forbids.
  const Component = mdxComponents[slug];

  if (!Component) {
    return (
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
        <p className="text-gray-600">No content available.</p>
      </div>
    );
  }

  return <Component components={components} />;
}
