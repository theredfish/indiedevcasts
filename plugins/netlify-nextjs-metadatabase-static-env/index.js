export const onPreBuild = function () {
  const defaultMetadataBase = "https://indiedevcasts.com";
  const deployUrl = (() => {
    switch (process.env.CONTEXT) {
      case "production":
        return process.env.URL;
      case "deploy-preview":
        return process.env.DEPLOY_URL;
      default:
        return defaultMetadataBase;
    }
  })();

  // Creates an environment variable accessible from both browser and backend.
  process.env["NEXT_PUBLIC_METADATA_BASE"] = deployUrl;
};
