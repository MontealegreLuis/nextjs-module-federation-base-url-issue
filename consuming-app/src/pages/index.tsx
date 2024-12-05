import {ComponentType} from "react";
import dynamic from "next/dynamic";

const HelloWorld: ComponentType<Record<string, unknown>> = dynamic(
    // @ts-ignore
    () => import("notifications/HelloWorld"),
    {
      ssr: false,
      loading: () => <div>Loading...</div>
    }
);

export default function Home() {
  return (<>
    <h1>Test</h1>
    <HelloWorld/>
  </>);
}
