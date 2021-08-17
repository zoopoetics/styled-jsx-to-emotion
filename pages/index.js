import Head from "next/head";

export default function Home() {
  return (
    <div className={"Foo"}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={""}></main>

      <style jsx>{`
        .Foo {
          background-color: #f0c;
          height: 800px;
        }
      `}</style>
    </div>
  );
}
