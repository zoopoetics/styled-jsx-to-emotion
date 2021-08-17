import { css } from "@emotion/core";

export default function MediaQueries() {
  return (
    <>
      <div className={"StyledJSX"}>
        {"styled-jsx uses conventional bulky media queries"}

        <style jsx>{`
          .StyledJSX {
            align-items: center;
            background-color: #f6f6f6;
            display: flex;
            height: 100px;
            justify-content: center;
          }
        `}</style>
      </div>

      <div
        css={css`
          align-items: center;
          background-color: #f0c;
          display: flex;
          height: 100px;
          justify-content: center;
        `}
      >
        {"emotion uses the css prop and auto-generates class names"}
      </div>
    </>
  );
}
