
import {
  useState,
} from "react";

import {
  getPublishedUrl,
  publishProject,
} from "../utils/publishProject";

function PublishModal({
  website,
  publishedProject,
  setPublishedProject,
  onClose,
}) {
  const [
    copied,
    setCopied,
  ] = useState(false);

  const handlePublish = () => {
    const result =
      publishProject(
        website,
      );

    if (!result) {
      return;
    }

    setPublishedProject(
      result,
    );
  };

  const publishedUrl =
    publishedProject
      ? getPublishedUrl(
          publishedProject.id,
        )
      : "";

  const handleCopy = async () => {
    if (!publishedUrl) {
      return;
    }

    try {
      await navigator.clipboard.writeText(
        publishedUrl,
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(
        "Failed to copy URL:",
        error,
      );
    }
  };

  const handleOpen = () => {
    if (!publishedUrl) {
      return;
    }

    window.open(
      publishedUrl,
      "_blank",
    );
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#111111] p-6 shadow-2xl">

        {/* HEADER */}

        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Publish Website
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Make your website ready to share.
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition hover:bg-white/5 hover:text-white"
          >
            ×
          </button>
        </div>

        {/* BEFORE PUBLISH */}

        {!publishedProject && (
          <div className="mt-6">

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-lg">
                  🌐
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    Ready to publish
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Your current website will be saved as a published version.
                  </p>
                </div>
              </div>

            </div>

            <button
              onClick={
                handlePublish
              }
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              🚀 Publish Website
            </button>

          </div>
        )}

        {/* AFTER PUBLISH */}

        {publishedProject && (
          <div className="mt-6">

            <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                  ✓
                </div>

                <div>
                  <p className="text-sm font-semibold text-green-400">
                    Website Published
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Your website is ready to preview.
                  </p>
                </div>

              </div>

            </div>

            {/* URL */}

            <div className="mt-5">

              <label className="mb-2 block text-xs font-medium text-gray-400">
                Published URL
              </label>

              <div className="flex gap-2">

                <input
                  value={
                    publishedUrl
                  }
                  readOnly
                  className="min-w-0 flex-1 rounded-lg border border-white/10 bg-black/20 px-3 py-2.5 text-xs text-gray-400 outline-none"
                />

                <button
                  onClick={
                    handleCopy
                  }
                  className="shrink-0 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-white transition hover:bg-white/5"
                >
                  {copied
                    ? "Copied!"
                    : "Copy"}
                </button>

              </div>

            </div>

            {/* OPEN */}

            <button
              onClick={
                handleOpen
              }
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              ↗ Open Published Site
            </button>

            <p className="mt-4 text-center text-[11px] leading-relaxed text-gray-600">
              Local publishing is being used
              because this version does not
              have a backend or hosting service yet.
            </p>

          </div>
        )}

      </div>
    </div>
  );
}

export default PublishModal;
