
const PUBLISHED_KEY =
  "webcraft-ai-published-project";

function createProjectId() {
  return (
    "site-" +
    Math.random()
      .toString(36)
      .substring(2, 8) +
    "-" +
    Date.now()
      .toString(36)
  );
}

export function publishProject(
  website,
) {
  if (!website) {
    return null;
  }

  const existing =
    getPublishedProject();

  const projectId =
    existing?.id ||
    createProjectId();

  const publishedProject = {
    id: projectId,

    website: JSON.parse(
      JSON.stringify(website),
    ),

    publishedAt:
      existing?.publishedAt ||
      new Date().toISOString(),
  };

  try {
    localStorage.setItem(
      PUBLISHED_KEY,
      JSON.stringify(
        publishedProject,
      ),
    );

    return publishedProject;
  } catch (error) {
    console.error(
      "Failed to publish project:",
      error,
    );

    return null;
  }
}

export function getPublishedProject() {
  try {
    const saved =
      localStorage.getItem(
        PUBLISHED_KEY,
      );

    if (!saved) {
      return null;
    }

    return JSON.parse(saved);
  } catch (error) {
    console.error(
      "Failed to load published project:",
      error,
    );

    return null;
  }
}

export function unpublishProject() {
  try {
    localStorage.removeItem(
      PUBLISHED_KEY,
    );
  } catch (error) {
    console.error(
      "Failed to unpublish project:",
      error,
    );
  }
}

export function getPublishedUrl(
  projectId,
) {
  if (!projectId) {
    return "";
  }

  return `${window.location.origin}${window.location.pathname}#/published/${projectId}`;
}