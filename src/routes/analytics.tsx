import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Panel, SectionHeading, Tag } from "@/components/kit";
import { ValueScoreInfo } from "@/components/ValueScoreInfo";
import { getModels, getStatistics, valueScore } from "@/services/modelService";
import { formatCompact, formatPrice1M } from "@/lib/format";
import type { Model } from "@/types/model";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "AI Model Analytics — ModelPulse" },
      {
        name: "description",
        content:
          "Price distributions, provider coverage, quality-vs-price and context-window analytics computed from the tracked AI model dataset.",
      },
      { property: "og:title", content: "AI Model Analytics — ModelPulse" },
      {
        property: "og:description",
        content: "Distribution and tradeoff analytics across tracked AI models.",
      },
    ],
  }),
  component: Analytics;
});

function Analytics() {
  return null;
}
