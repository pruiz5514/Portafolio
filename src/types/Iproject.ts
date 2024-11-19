export interface IProject {
    name: {
        en: string;
        es: string;
      };
      description: {
        en: string;
        es: string;
      };
    img : string;
    urlWeb: string;
    urlCode:  string;
    stacks:  React.ReactNode[];
}