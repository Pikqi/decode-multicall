import { twMerge } from "tailwind-merge";

import clsx from "clsx";

const cx = (...args: Parameters<typeof clsx>) => twMerge(clsx(args).split(" "));

export { cx };
