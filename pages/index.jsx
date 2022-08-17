import Loader from "./components/Loader";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import { useAnimation } from "framer-motion";

export default function Home() {
  const textAnimate = useAnimation();
  const modalAnimate = useAnimation();
  const blockAnimate = useAnimation();
  const navBarAnimate = useAnimation();
  const principalTextAnimate = useAnimation();

  const initialShowText = () => {
    textAnimate.start({ translateY: 0 });
  };

  const initialAnimation = () => {
    textAnimate.start({ translateY: -200 }).then(() => {
      textAnimate.start({ display: "none" }).then(() => {
        blockAnimate
          .start({ display: "none" })
          .then(() => modalAnimate.start({ height: "0px" }))
          .then(() => navBarAnimate.start({ translateY: 0 }))
          .then(() => principalTextAnimate.start({ translateY: 0 }));
      });
    });
  };

  return (
    <div className="w-full overflow-x-hidden p-10">
      <Loader
        blockAnimate={blockAnimate}
        modalAnimate={modalAnimate}
        textAnimate={textAnimate}
        initialAnimation={initialAnimation}
        initialShowText={initialShowText}
      />
      <Presentation
        navBarAnimate={navBarAnimate}
        principalTextAnimate={principalTextAnimate}
      />
      <Projects />
    </div>
  );
}
