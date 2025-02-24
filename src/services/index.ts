import axios, { AxiosInstance } from "axios";

// Naming Convention : api/{RequestType}/{Product}/{Business}/{Environment}

type ApiDataType = "bodyData" | "formData";
type APIRequestType = "get" | "post" | "put";

export const api = (value: ApiDataType): AxiosInstance => {
  const headers: any = {
    "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_CORS_ALLOW_ORIGIN,
  };

  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: false,
    headers: headers,
  });

  return instance;
};

export const apiCall = async (
  dataType: ApiDataType,
  requestType: APIRequestType,
  apiUrl: string,
  payload?: any,
  responseType?: "blob"
) => {
  try {
    const response =
      payload && requestType !== "get"
        ? await api(dataType)[requestType](apiUrl, payload)
        : await api(dataType)[requestType](apiUrl, {
            responseType: responseType,
          });
    return response;
  } catch (error: any & {
    [key: string]: any;
    response: { data: { code: number; message: string } };
  }) {
    throw new Error(`Failed::AccessAPI::${apiUrl}`);
  } finally {
  }
};
