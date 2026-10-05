
import { useMemo } from "react";
import { generateHTML } from "../utils/exportWebsite";

function PreviewMode({ website, onExit }) {
  const html = useMemo(() => {
    if (!website) {
      return "";
    }

    return generateHTML(website);
  }, [website]);

  if (!website) {
    return (
      <div className="flex h-full items-center justify-center bg-[#0a0a0a] text-gray-500">
        Generate a website first.
      </div>
    );
  }

  return (
    <div className="relative h-full w-full bg-white">
      {/* Preview Toolbar */}

      <div className="absolute left-1/2 top-4 z-50 flex -translate-x-1/2 items-center gap-2 rounded-xl border border-black/10 bg-white/95 p-1.5 shadow-xl backdrop-blur">
        <div className="px-3 text-xs font-medium text-gray-600">
          Preview Mode
        </div>

        <button
          onClick={onExit}
          className="rounded-lg bg-black px-3 py-2 text-xs font-semibold text-white transition hover:bg-gray-800"
        >
          ← Back to Editor
        </button>
      </div>

      {/* Website */}

      <iframe
        title="Website Preview"
        srcDoc={html}
        className="h-full w-full border-0"
      />
    </div>
  );
}

export default PreviewMode;