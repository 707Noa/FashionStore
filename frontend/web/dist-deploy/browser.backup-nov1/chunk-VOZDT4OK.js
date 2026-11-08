import {
  environment
} from "./chunk-WLDUVQ6B.js";

// src/app/core/utils/resolve-media-url.ts
function resolveMediaUrl(path) {
  if (!path) {
    return null;
  }
  if (/^https?:\/\//i.test(path)) {
    return path;
  }
  const origin = environment.apiUrl.replace(/\/api\/v1\/?$/, "");
  return `${origin}${path}`;
}

export {
  resolveMediaUrl
};
//# debugId=f8868581-c616-5d50-a545-dbb4fc5554b1
//# sourceMappingURL=chunk-VOZDT4OK.js.map
