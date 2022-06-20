declare type SVGComponent = (props: SVGProps<SVGElement>) => ReactElement;

declare module '*.svg' {
  const component: SVGComponent;
  export default component;
}
