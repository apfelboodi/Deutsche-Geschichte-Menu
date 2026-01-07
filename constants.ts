
import type { Level } from './types';

export const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2'];

export const LEVEL_STYLES: Record<Level, {
  bg: string;
  hoverBg: string;
  text: string;
  ring: string;
  border: string;
  hoverBorder: string;
  solidBg: string;
}> = {
  A1: { bg: 'bg-[#fef9c3]', hoverBg: 'hover:bg-[#fef08a]', text: 'text-[#a16207]', ring: 'focus:ring-[#eab308]', border: 'border-[#eab308]', hoverBorder: 'hover:border-[#eab308]', solidBg: 'bg-[#eab308]' },
  A2: { bg: 'bg-[#d1fae5]', hoverBg: 'hover:bg-[#a7f3d0]', text: 'text-[#047857]', ring: 'focus:ring-[#10b981]', border: 'border-[#10b981]', hoverBorder: 'hover:border-[#10b981]', solidBg: 'bg-[#10b981]' },
  B1: { bg: 'bg-[#dbeafe]', hoverBg: 'hover:bg-[#bfdbfe]', text: 'text-[#1d4ed8]', ring: 'focus:ring-[#3b82f6]', border: 'border-[#3b82f6]', hoverBorder: 'hover:border-[#3b82f6]', solidBg: 'bg-[#3b82f6]' },
  B2: { bg: 'bg-[#fee2e2]', hoverBg: 'hover:bg-[#fecaca]', text: 'text-[#b91c1c]', ring: 'focus:ring-[#ef4444]', border: 'border-[#ef4444]', hoverBorder: 'hover:border-[#ef4444]', solidBg: 'bg-[#ef4444]' },
};
