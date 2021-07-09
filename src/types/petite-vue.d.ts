/* eslint-disable */
// TODO: Remove this file once Petite Vue provides types itself
declare module "petite-vue/src/directives/bind" {
  import { Directive } from "petite-vue/src/directives/index";
  export const bind: Directive<
    Element & {
      _class?: string;
    }
  >;
}
declare module "petite-vue/src/directives/effect" {
  import { Directive } from "petite-vue/src/directives/index";
  export const effect: Directive;
}
declare module "petite-vue/src/directives/for" {
  import { Context } from "petite-vue/src/context";
  export const _for: (
    el: Element,
    exp: string,
    ctx: Context
  ) => ChildNode | null | undefined;
}
declare module "petite-vue/src/directives/html" {
  import { Directive } from "petite-vue/src/directives/index";
  export const html: Directive;
}
declare module "petite-vue/src/directives/if" {
  import { Context } from "petite-vue/src/context";
  export const _if: (
    el: Element,
    exp: string,
    ctx: Context
  ) => ChildNode | null;
}
declare module "petite-vue/src/directives/index" {
  import { Context } from "petite-vue/src/context";
  import { effect as rawEffect } from "@vue/reactivity";
  export interface Directive<T = Element> {
    (ctx: DirectiveContext<T>): (() => void) | void;
  }
  export interface DirectiveContext<T = Element> {
    el: T;
    get: (exp?: string) => any;
    effect: typeof rawEffect;
    exp: string;
    arg?: string;
    modifiers?: Record<string, true>;
    ctx: Context;
  }
  export const builtInDirectives: Record<string, Directive<any>>;
}
declare module "petite-vue/src/directives/model" {
  import { Directive } from "petite-vue/src/directives/index";
  export const model: Directive<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >;
}
declare module "petite-vue/src/directives/on" {
  import { Directive } from "petite-vue/src/directives/index";
  export const on: Directive;
}
declare module "petite-vue/src/directives/ref" {
  import { Directive } from "petite-vue/src/directives/index";
  export const ref: Directive;
}
declare module "petite-vue/src/directives/show" {
  import { Directive } from "petite-vue/src/directives/index";
  export const show: Directive<HTMLElement>;
}
declare module "petite-vue/src/directives/text" {
  import { Directive } from "petite-vue/src/directives/index";
  export const text: Directive<Text | Element>;
  export const toDisplayString: (value: any) => string;
}
declare module "petite-vue/src/app" {
  import { Directive } from "petite-vue/src/directives/index";
  export const createApp: (initialData?: any) => {
    directive(
      name: string,
      def?: Directive<Element> | undefined
    ): Directive<Element> | any;
    mount(el?: string | Element | null | undefined): any | undefined;
    unmount(): void;
  };
}
declare module "petite-vue/src/block" {
  import { Context } from "petite-vue/src/context";
  export class Block {
    template: Element | DocumentFragment;
    ctx: Context;
    key?: any;
    parentCtx?: Context;
    isFragment: boolean;
    start?: Text;
    end?: Text;
    get el(): Element | Text;
    constructor(template: Element, parentCtx: Context, isRoot?: boolean);
    insert(parent: Element, anchor?: Node | null): void;
    remove(): void;
    teardown(): void;
  }
}
declare module "petite-vue/src/context" {
  import { effect as rawEffect, ReactiveEffect } from "@vue/reactivity";
  import { Block } from "petite-vue/src/block";
  import { Directive } from "petite-vue/src/directives/index";
  export interface Context {
    key?: any;
    scope: Record<string, any>;
    dirs: Record<string, Directive>;
    blocks: Block[];
    effect: typeof rawEffect;
    effects: ReactiveEffect[];
    cleanups: (() => void)[];
  }
  export const createContext: (parent?: Context | undefined) => Context;
  export const createScopedContext: (ctx: Context, data?: {}) => Context;
}
declare module "petite-vue/src/eval" {
  export const evaluate: (
    scope: any,
    exp: string,
    el?: Node | undefined
  ) => any;
  export const execute: (scope: any, exp: string, el?: Node | undefined) => any;
}
declare module "petite-vue/src/scheduler" {
  export const nextTick: (fn: () => void) => Promise<void>;
  export const queueJob: (job: Function) => void;
}
declare module "petite-vue/src/utils" {
  export const checkAttr: (el: Element, name: string) => string | null;
  export const listen: (
    el: Element,
    event: string,
    handler: any,
    options?: any
  ) => void;
}
declare module "petite-vue/src/walk" {
  import { Context } from "petite-vue/src/context";
  export let inOnce: boolean;
  export const walk: (node: Node, ctx: Context) => ChildNode | null | void;
}
declare module "petite-vue" {
  export { createApp } from "petite-vue/src/app";
  export { nextTick } from "petite-vue/src/scheduler";
  export { reactive } from "@vue/reactivity";
}
