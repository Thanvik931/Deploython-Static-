export const config = {
  path: "/hello",
};

export default async (request) => {
  const userAgent = request.headers.get("user-agent") || "Unknown";
  return new Response(
    `<html><body><h1>Hello from Edge Function!</h1><p>Your User-Agent: ${userAgent}</p></body></html>`,
    {
      headers: {
        "content-type": "text/html",
      },
    }
  );
};
