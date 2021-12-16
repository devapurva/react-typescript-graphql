// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOT_ROUTE = "/";

// ----------------------------------------------------------------------

export const PATH_DASHBOARD = {
  root: ROOT_ROUTE,
  general: {
    home: path(ROOT_ROUTE, "home"),
  },
};
