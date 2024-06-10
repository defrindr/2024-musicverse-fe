const App = {
  Url: process.env.NEXT_PUBLIC_BACKEND_API,
  Domain: process.env.NEXT_PUBLIC_BACKEND_DOMAIN,
  Cookie: {
    Auth: {
      Token: "MUSICVERSE_COOKIE_AUTH_TOKEN",
      User: "MUSICVERSE_COOKIE_AUTH_USER",
      ExpiredAt: "MUSICVERSE_COOKIE_AUTH_EXPIRED",
      RedirectTo: "MUSICVERSE_COOKIE_AUTH_REDIRECT_TO",
    },
    View: {
      SidebarCollapse: "MUSICVERSE_COOKIE_VIEW_SIDEBAR_COLLAPSE",
    },
  },
};

export default App;
