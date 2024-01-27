import { Circle, Eraser, Hand, MousePointer2, SquareEqual, Type } from "lucide-react";

export enum Tool {
  Select = "Select",
  Eraser = "Eraser",
  Seat = "Seat",
  Booth = "Booth",
  Text = "Text",
  Hand = "Hand"
}

export const tools = {
  [Tool.Select]: {
    icon: MousePointer2,
    shortcut: "V"
  },
  [Tool.Eraser]: {
    icon: Eraser,
    shortcut: "E"
  },
  [Tool.Seat]: {
    icon: Circle,
    shortcut: "S"
  },
  [Tool.Booth]: {
    icon: SquareEqual,
    shortcut: "B"
  },
  [Tool.Text]: {
    icon: Type,
    shortcut: "T"
  },
  [Tool.Hand]: {
    icon: Hand,
    shortcut: "H"
  }
};
