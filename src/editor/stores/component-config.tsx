import { create } from "zustand";
import Container from "../materials/Container";
import Button from "../materials/Button";
import Page from "../materials/Page";

export interface ComponentConfig {
    name: string;
    defaultProps: Record<string, any>;
    component: any;
}

interface State {
    componentConfig: { [key: string]: Record<string, any> }
}

interface Action {
    registerComponent: (name: string, component: any) => void;
}

export const useComponentsConfigStore = create<State & Action>((set) => ({
    componentConfig: {
        Container: { name: "Container", defaultProps: {}, component: Container },
        Button: { name: "Button", defaultProps: { type: 'primary', text: 'primary' }, component: Button },
        Page: { name: 'Page', defaultProps: {}, component: Page }
    },
    registerComponent: (name, componentConfig) => set((state) => {
        return { componentConfig: { ...state.componentConfig, [name]: componentConfig } };
    }),
}));