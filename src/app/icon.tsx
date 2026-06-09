import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          borderRadius: "6px",
          border: "1px solid #E2E8F0",
          boxSizing: "border-box",
        }}
      >
        <svg
          width="18"
          height="28.8"
          viewBox="0 0 100 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            display: "flex",
          }}
        >
          {/* Top Circle - Black */}
          <circle cx="50" cy="50" r="40" stroke="#000000" strokeWidth="12" />
          {/* Bottom Circle - Navy Blue */}
          <circle cx="50" cy="110" r="40" stroke="#0056b3" strokeWidth="12" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
