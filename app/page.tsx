
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";

import { title} from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center font-bold">
        <span className={title()}>Bienvenido al </span>
        <span className={title({ color: "green" })}>Lugar</span> <br />
        <span className={title()}>donde Los Imposibles  </span> <br />
        <span className={title({ color: "green" })}>  No Existen</span>

        <span className={title()}>
          
        </span>
      </div>

      <div className="flex gap-3">


      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
