export const rest = async (
    method: "POST" | "GET" | "DELETE" | "PUT" | "PATCH",
    endpoint: string,
    data?: object
  ) => {
    const response = await fetch(endpoint, {
      method: method,
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    return await response.json();
  };
  