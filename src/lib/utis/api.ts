import App from "@/config/app";
import qs from "qs";
import { getCookie, removeCookie } from "typescript-cookie";

export const onLogout = ({ redirectTo } = { redirectTo: "/auth/login" }) => {
  removeCookie(App.Cookie.Auth.User);
  removeCookie(App.Cookie.Auth.Token);
  removeCookie(App.Cookie.Auth.RedirectTo);
  removeCookie(App.Cookie.Auth.ExpiredAt);
  window.location.href = redirectTo;
};

type typeApi = (properties: {
  path: string;
  objParams?: Record<string, any>;
  body?: FormData | Record<string, any> | string;
  method?: string;
  headers?: Record<string, string>;
  host?: string;
  staleTime?: number;
}) => Promise<Response>;

export const api: typeApi = async ({
  path,
  objParams,
  body,
  method,
  headers = {},
  host = App.Url ?? "",
  staleTime = 0,
}) => {
  /**
   * Setup var
   */
  path =
    path +
    (path.includes("?") ? "&" : "?") +
    (objParams ? qs.stringify(objParams) : "");

  /**
   * Check cache
   */
  if (staleTime > 0) {
    const cache = (window as any)?.fetchDataCached?.[path];
    if (cache && cache.expiredAt >= Date.now()) {
      return new Promise((resolve) => resolve(cache.result.clone()));
    }
  }

  /**
   * Get user token
   */
  try {
    const userToken = getCookie(App.Cookie.Auth.Token);
    // console.log(userToken);
    headers["Authorization"] = `Bearer ${userToken}`;
  } catch (error) {}

  /**
   * Set content type
   */
  headers["Accept"] = "application/json";
  if (body && !(body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
    if (typeof body == "object") body = JSON.stringify(body);
  }

  /**
   * Fething server
   */
  const response = fetch(host + path, {
    method: method ?? "get",
    body,
    headers,
  });

  /**
   * Pre return
   */
  response.then((res) => {
    /**
     * Check unauthed
     */
    if (res.status == 401) {
      console.log(res.json)
      onLogout();
    }

    // /**
    //  * Caching data
    //  */
    if (staleTime > 0 && res.status == 200) {
      (window as any).fetchDataCached = {
        ...((window as any)?.fetchDataCached ?? {}),
        [path]: {
          expiredAt: Date.now() + staleTime * 60 * 1000,
          result: res.clone(),
        },
      };
    }
  });

  /**
   * Return data
   */
  return response;
};
