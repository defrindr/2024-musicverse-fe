import App from "@/config/app";
import { sleep } from "@/lib/utis/sleep";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { toast } from "react-toastify";

export interface AuthStoreInterface {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
  loading: "idle" | "pending";
}

const initialState: AuthStoreInterface = {
  token: "",
  user: {
    id: 0,
    name: "",
    email: "",
    role: "",
  },
  loading: "idle",
};

export type AuthLoginProps = {
  email: string;
  password: string;
};

export const AuthLogin = createAsyncThunk(
  "AUTH_LOGIN",
  async (
    { router, payload }: { router: AppRouterInstance; payload: AuthLoginProps },
    { dispatch },
  ) => {
    dispatch(AuthLoadingActive());
    try {
      const response = await fetch(`${App.Url}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const json = await response.json();
      await sleep(1.5);

      if (response.status !== 200) {
        dispatch(AuthLoadingIdle());
        toast.error(json.message);
      } else {
        dispatch(AuthLoadingIdle());
        dispatch(AuthStoreResponse(json.data));

        router.replace("/admin");
      }
    } catch (error) {
      dispatch(AuthLoadingIdle());
      toast.error("Terjadi kesalahan saat mengirimkan request");
    }
  },
);

const authSlice = createSlice({
  name: "AUTH_SLICE",
  initialState,
  reducers: {
    AuthLoadingActive: (state) => {
      state.loading = "pending";
    },
    AuthLoadingIdle: (state) => {
      state.loading = "idle";
    },
    AuthStoreResponse: (
      state,
      { payload }: { payload: { accessToken: string; user: any } },
    ) => {
      state.token = payload.accessToken;
      state.user = payload.user;
    },
  },
});

const { AuthLoadingActive, AuthLoadingIdle, AuthStoreResponse } =
  authSlice.actions;

const AuthReducer = authSlice.reducer;
export default AuthReducer;
