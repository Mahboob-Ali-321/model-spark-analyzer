import { createFileRoute } from "@tanstack/react-router";
import { Plus, X } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Button,
  DataValue,
  EmptyState,
  Label,
  Panel,
  SectionHeading,
  Select,
  Tag,
  TextInput,
} from "@/components/kit";
import { ValueScoreInfo } from "@/components/ValueScoreInfo";
import { estimateCost, getModels, valueScore } from "@/services/modelService";
import { formatUsd, parseTokenInput } from "@/lib/format";
import type { Model } from "@/types/model";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Compare AI Models — ModelPulse" },
      {
        name: "description",
        content:
          "Put up to four AI models side by side on price, context, quality, speed, value and estimated monthly workload cost.",
      },
      { property: "og:title", content: "Compare AI Models — ModelPulse" },
      {
        property: "og:description",
        content: "Side-by-side AI model comparison with dynamic best-price and best-value winners.",
      },
    ],
  }),
  component: Compare;
});

const MAX = 4;

function Compare() {
  return null;
}
