import { css } from "@emotion/core";

const C;

export default function Composition() {
  return (
    <>
      <div className={"StyledJSX"}>
        {"styled-jsx uses a jsx style block and requires explicit class names"}

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
