declare module "diff" {
  export function diffChars(
    arg0: string,
    arg1: string
  ): {
    count?: number;
    value: string;
    added?: boolean;
    removed?: boolean;
  }[];
}
