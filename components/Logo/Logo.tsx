import * as React from 'react'
export const Logo = (props: React.HTMLAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0s24 10.745 24 24ZM2.16 24c0 12.062 9.778 21.84 21.84 21.84S45.84 36.062 45.84 24 36.062 2.16 24 2.16 2.16 11.938 2.16 24Z"
    />
    <path
      fill="currentColor"
      d="M11.453 25.138v-.074a1.18 1.18 0 0 1 0-1.679l5.12-5.148-5.12-5.158a1.198 1.198 0 0 1-.525-1.421 1.201 1.201 0 0 1 1.284-.802 1.196 1.196 0 0 1 .88.581l5.111 5.14.12-.13 4.991-5.02a1.18 1.18 0 0 1 1.931 1.286 1.183 1.183 0 0 1-.255.385l-3.113 3.127-1.841 1.901-.11.13 4.198 4.253 11.051-11.072a1.18 1.18 0 0 1 1.931 1.285 1.183 1.183 0 0 1-.255.385l-11.05 11.072L36.675 35.12a1.2 1.2 0 0 1-.865 1.99c-.305.01-.602-.099-.83-.302L24.107 25.858l-10.903 10.97a1.182 1.182 0 1 1-1.676-1.67l10.912-10.98-4.245-4.271-5.111 5.157a1.187 1.187 0 0 1-1.593.074h-.037Z"
    />
  </svg>
)
