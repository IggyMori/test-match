declare module '*.svg' {
  const value: string;
  export default value;
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
