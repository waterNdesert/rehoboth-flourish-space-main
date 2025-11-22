// Netlify Edge Function - Health Check
// This function can be used to verify the application is deployed correctly

export default async (req: Request) => {
  return new Response(
    JSON.stringify({
      status: "ok",
      timestamp: new Date().toISOString(),
      version: "1.0.0",
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
};

export const config = {
  path: "/api/health",
};
