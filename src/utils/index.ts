import * as d3 from "d3";
import { ids, selectors } from "@/constants";

export * from "./d3";
export * from "./workspace";

export const fallible = (fn: Function) => {
  try {
    fn();
  } catch (_) {}
};

export const isWithinBounds = (x: number, y: number, bounds: DOMRect) => {
  return x >= bounds.left && x <= bounds.right && y >= bounds.top && y <= bounds.bottom;
};

export const getRelativeClickCoords = (e: any) => {
  const dim = e.target.getBoundingClientRect();
  return {
    x: e.clientX - dim.left,
    y: e.clientY - dim.top
  };
};

export const getRelativeWorkspaceClickCoords = (e: any) => {
  let target = e.target;
  while (target.id !== ids.workspace) target = target.parentElement;
  const dim = target.getBoundingClientRect();
  return {
    x: e.clientX - dim.left,
    y: e.clientY - dim.top
  };
};

export const getRelativeClickCoordsWithTransform = (e: any) => {
  const coords = getRelativeWorkspaceClickCoords(e);
  const transform = d3.zoomTransform(document.querySelector(selectors.workspaceGroup));
  return {
    x: (coords.x - transform.x) / transform.k,
    y: (coords.y - transform.y) / transform.k
  };
};
