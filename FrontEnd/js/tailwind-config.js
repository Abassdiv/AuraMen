// tailwind config js for index landing page
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "on-primary-fixed": "#1c1b1b",
                "on-tertiary-container": "#a17f3b",
                "surface": "#fbf9f9",
                "on-secondary": "#ffffff",
                "on-tertiary": "#ffffff",
                "primary-fixed": "#e5e2e1",
                "on-error-container": "#93000a",
                "tertiary-fixed": "#ffdea5",
                "on-primary": "#ffffff",
                "tertiary": "#000000",
                "error": "#ba1a1a",
                "secondary-container": "#e0dfde",
                "error-container": "#ffdad6",
                "on-error": "#ffffff",
                "surface-container-high": "#e9e8e7",
                "surface-container": "#efeded",
                "inverse-surface": "#303031",
                "surface-variant": "#e3e2e2",
                "inverse-primary": "#c8c6c5",
                "secondary": "#5e5e5d",
                "surface-container-low": "#f5f3f3",
                "on-tertiary-fixed": "#261900",
                "surface-container-highest": "#e3e2e2",
                "on-secondary-fixed": "#1a1c1b",
                "on-primary-fixed-variant": "#474646",
                "primary-container": "#1c1b1b",
                "inverse-on-surface": "#f2f0f0",
                "outline-variant": "#c4c7c7",
                "on-primary-container": "#858383",
                "on-background": "#1b1c1c",
                "on-secondary-fixed-variant": "#464746",
                "primary": "#000000",
                "surface-bright": "#fbf9f9",
                "primary-fixed-dim": "#c8c6c5",
                "on-surface": "#1b1c1c",
                "tertiary-fixed-dim": "#e9c176",
                "surface-tint": "#5f5e5e",
                "surface-dim": "#dbdad9",
                "secondary-fixed": "#e3e2e0",
                "on-surface-variant": "#444748",
                "on-tertiary-fixed-variant": "#5d4201",
                "background": "#fbf9f9",
                "on-secondary-container": "#626361",
                "outline": "#747878",
                "tertiary-container": "#261900",
                "surface-container-lowest": "#ffffff",
                "secondary-fixed-dim": "#c7c6c5"
            },
            "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            "spacing": {
                "gutter": "16px",
                "sm": "12px",
                "xl": "80px",
                "margin-mobile": "20px",
                "md": "24px",
                "margin-desktop": "64px",
                "xs": "4px",
                "lg": "48px",
                "base": "8px"
            },
            "fontFamily": {
                "body-md": ["Tajawal"],
                "body-sm": ["Tajawal"],
                "headline-lg": ["Tajawal"],
                "headline-md": ["Tajawal"],
                "body-lg": ["Tajawal"],
                "label-caps": ["Inter"],
                "headline-xl": ["Tajawal"],
                "price-display": ["Inter"]
            },
            "fontSize": {
                "body-md": ["16px", { "lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400" }],
                "body-sm": ["14px", { "lineHeight": "1.5", "letterSpacing": "0", "fontWeight": "400" }],
                "headline-lg": ["32px", { "lineHeight": "1.3", "letterSpacing": "0", "fontWeight": "700" }],
                "headline-md": ["24px", { "lineHeight": "1.4", "letterSpacing": "0", "fontWeight": "500" }],
                "body-lg": ["18px", { "lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400" }],
                "label-caps": ["12px", { "lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600" }],
                "headline-xl": ["48px", { "lineHeight": "1.2", "letterSpacing": "0", "fontWeight": "700" }],
                "price-display": ["20px", { "lineHeight": "1", "letterSpacing": "-0.02em", "fontWeight": "600" }]
            }
        }
    }
}