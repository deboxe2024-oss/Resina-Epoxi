import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handlePurchase = () => {
  window.fbq?.('track', 'Purchase', {value: 97.00, currency: 'BRL'});
};
