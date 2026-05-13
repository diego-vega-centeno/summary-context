"use client";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { useState } from "react";

interface CollapsibleProps extends CollapsiblePrimitive.CollapsibleProps {
  trigger: string;
  children: any;
  className?: any;
}

export default function Collapsible({
  trigger,
  children,
  className,
  ...props
}: CollapsibleProps) {
  return (
    <CollapsiblePrimitive.Root className={className} {...props}>
      <CollapsiblePrimitive.Trigger asChild>
        {trigger}
      </CollapsiblePrimitive.Trigger>
      <CollapsiblePrimitive.Content>{children}</CollapsiblePrimitive.Content>
    </CollapsiblePrimitive.Root>
  );
}
