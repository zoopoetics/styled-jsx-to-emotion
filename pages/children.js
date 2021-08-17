import { css } from "@emotion/core";

export default function Children() {
  return (
    <>
      <div className={"StyledJSX"}>
        {"styled-jsx requires a hack using :global() to style layout children"}

        <div className={"Flexbox"}>
          {Array.from({ length: 5 }, (item, index) => {
            return <div className={"Flexitem"} key={index} />;
          })}
        </div>

        <style jsx>{`
          .StyledJSX {
            align-items: center;
            background-color: #f6f6f6;
            display: flex;
            height: 100px;
            flex-direction: column;
            justify-content: center;
          }

          .Flexbox {
            display: flex;
            padding: 8px;
          }

          .Flexitem {
            background-color: #000;
            height: 20px;
            width: 30px;
          }

          .Flexbox > :global(*):not(:last-child) {
            margin-right: 4px;
          }
        `}</style>
      </div>

      <div
        css={css`
          align-items: center;
          background-color: #f0c;
          display: flex;
          flex-direction: column;
          height: 100px;
          justify-content: center;
        `}
      >
        {
          "emotion uses the same syntax but with no hack, although it has an issue with nth-child selectors during SSR"
        }

        <div
          css={css`
            display: flex;
            gap: 12px;
            padding: 8px;
          `}
        >
          {Array.from({ length: 5 }, (item, index) => {
            return (
              <div
                css={css`
                  background-color: #000;
                  height: 20px;
                  width: 30px;
                `}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
