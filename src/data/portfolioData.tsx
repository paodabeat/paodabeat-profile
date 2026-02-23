/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Globe, Tv, Gamepad, Layout, Monitor } from 'lucide-react';

export const TikTok = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

// Map Icon cho các Project theo ID
export const PROJECT_ICONS: Record<number, React.ReactNode> = {
    1: <Globe className="w-6 h-6" />,
    2: <Tv className="w-6 h-6" />,
    3: <Gamepad className="w-6 h-6" />,
    4: <Layout className="w-6 h-6" />,
    5: <Monitor className="w-6 h-6" />
};