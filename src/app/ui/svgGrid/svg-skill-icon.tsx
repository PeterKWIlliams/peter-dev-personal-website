import { CSSTransition } from "react-transition-group";

interface IconProps {
  svg: JSX.Element;
  label: string;
  isOpen?: boolean;
  buttonRef: any;
}
const SVGSkillIcon: React.FC<IconProps> = ({
  svg,
  label,
  isOpen,
  buttonRef,
}) => {
  return (
    <CSSTransition
      nodeRef={buttonRef}
      in={isOpen}
      timeout={500}
      classNames="grow"
      unmountOnExit
    >
      <div
        ref={buttonRef}
        className="flex flex-col items-center justify-center space-y-4  "
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-lg border-2 border-slate-900 bg-zinc-200  px-4 py-4 shadow-md md:h-full md:w-full">
          {svg}
        </div>

        <label className="text-lg font-semibold tracking-wide text-zinc-600 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ">
          {label}
        </label>
      </div>
    </CSSTransition>
  );
};

export default SVGSkillIcon;
