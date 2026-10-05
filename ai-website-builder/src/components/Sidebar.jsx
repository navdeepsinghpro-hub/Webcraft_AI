import { useState } from "react";
import { generateWebsite as generateFromPrompt } from "../utils/generateWebsite";

function Sidebar({
  setWebsite,
  isGenerating,
  setIsGenerating,
  generationStep,
  setGenerationStep,
}) {
  const [prompt, setPrompt] = useState("");

  const generateWebsite = () => {
    if (!prompt.trim()) {
      return;
    }

    const generatedWebsite = generateFromPrompt(prompt);

    setIsGenerating(true);
    setGenerationStep(0);

    setTimeout(() => {
      setGenerationStep(1);
    }, 700);

    setTimeout(() => {
      setGenerationStep(2);
    }, 1400);

    setTimeout(() => {
      setWebsite(generatedWebsite);
      setGenerationStep(3);
    }, 2200);

    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="w-full shrink-0 bg-[#0d0d0d] p-5">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          AI Website Builder
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Describe the website you want to create.
        </p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Website Prompt
        </label>

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. Create a restaurant website..."
          className="h-36 w-full resize-none rounded-xl border border-white/10 bg-[#171717] p-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-white/30"
        />
      </div>

      <button
        onClick={generateWebsite}
        disabled={isGenerating}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isGenerating ? "Generating..." : "✦ Generate Website"}
      </button>

      {isGenerating && (
        <div className="mt-6 space-y-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <GenerationStep
            active={generationStep >= 0}
            completed={generationStep > 0}
            text="Analyzing prompt..."
          />

          <GenerationStep
            active={generationStep >= 1}
            completed={generationStep > 1}
            text="Designing layout..."
          />

          <GenerationStep
            active={generationStep >= 2}
            completed={generationStep > 2}
            text="Generating components..."
          />

          <GenerationStep
            active={generationStep >= 3}
            completed={generationStep >= 3}
            text="✨ Website ready"
          />
        </div>
      )}
    </div>
  );
}

function GenerationStep({ active, completed, text }) {
  return (
    <div
      className={`flex items-center gap-3 text-sm transition ${
        active ? "text-white" : "text-gray-600"
      }`}
    >
      <div
        className={`flex h-5 w-5 items-center justify-center rounded-full text-xs ${
          completed
            ? "bg-white text-black"
            : active
              ? "animate-pulse border border-white/40"
              : "border border-white/10"
        }`}
      >
        {completed ? "✓" : ""}
      </div>

      <span>{text}</span>
    </div>
  );
}

export default Sidebar;