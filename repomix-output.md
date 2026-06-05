This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.devcontainer/
  devcontainer.json
client/
  public/
    favicon.svg
    icons.svg
  src/
    assets/
      hero.png
      react.svg
      vite.svg
    components/
      AuditManager.jsx
      EmployeeManager.jsx
    App.css
    App.jsx
    index.css
    main.jsx
  .gitignore
  eslint.config.js
  index.html
  package.json
  postcss.config.js
  README.md
  tailwind.config.js
  vite.config.js
db/
  init.sql
server/
  config/
    constants.js
    db.js
  models/
    Empleado.js
    empleados.json
  routes/
    auditoria.js
    empleados.js
  services/
    csvParser.js
    excelParser.js
    matrixService.js
  utils/
    dateUtils.js
    stringUtils.js
  .env.example
  index.js
  package.json
  servercopy.js
.gitignore
create-test-files.js
docker-compose.yml
ESTRUCTURA_VALIDACION.md
package.json
README.md
repomix-output.xml
```

# Files

## File: repomix-output.xml
````xml
This file is a merged representation of the entire codebase, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure>
.devcontainer/
  devcontainer.json
client/
  public/
    favicon.svg
    icons.svg
  src/
    assets/
      hero.png
      react.svg
      vite.svg
    components/
      AuditManager.jsx
      EmployeeManager.jsx
    App.css
    App.jsx
    index.css
    main.jsx
  .gitignore
  eslint.config.js
  index.html
  package.json
  postcss.config.js
  README.md
  tailwind.config.js
  vite.config.js
db/
  init.sql
server/
  config/
    constants.js
    db.js
  models/
    Empleado.js
    empleados.json
  routes/
    auditoria.js
    empleados.js
  services/
    csvParser.js
    excelParser.js
    matrixService.js
  utils/
    dateUtils.js
    stringUtils.js
  .env.example
  index.js
  package.json
  servercopy.js
.gitignore
create-test-files.js
docker-compose.yml
ESTRUCTURA_VALIDACION.md
package.json
README.md
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path=".devcontainer/devcontainer.json">
{
  "name": "Novedad Control",
  "dockerComposeFile": ["../docker-compose.yml"],
  "service": "app",
  "workspaceFolder": "/workspace",
  "features": {
    "ghcr.io/devcontainers/features/node:1": {
      "version": "20"
    }
  },
  "forwardPorts": [3000, 8080, 5432],
  "customizations": {
    "vscode": {
      "extensions": [
        "dbaeumer.vscode-eslint",
        "bradlc.vscode-tailwindcss",
        "ms-azuretools.vscode-docker"
      ]
    }
  },
  "postCreateCommand": "mkdir -p client/src server/db"
}
</file>

<file path="client/public/favicon.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="46" fill="none" viewBox="0 0 48 46"><path fill="#863bff" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z" style="fill:#863bff;fill:color(display-p3 .5252 .23 1);fill-opacity:1"/><mask id="a" width="48" height="46" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M25.842 44.938c-.664.844-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.183c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.498 0-3.579-1.842-3.579H1.133c-.92 0-1.456-1.04-.92-1.787L9.91.473c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.578 1.842 3.578h11.377c.943 0 1.473 1.088.89 1.832L25.843 44.94z" style="fill:#000;fill-opacity:1"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#ede6ff" rx="5.508" ry="14.704" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -4.47 31.516)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#ede6ff" rx="10.399" ry="29.851" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -39.328 7.883)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#7e14ff" rx="5.508" ry="30.487" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -25.913 -14.639)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -32.644 -3.334)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -34.34 30.47)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#ede6ff" rx="14.072" ry="22.078" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="rotate(93.35 24.506 48.493)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx=".387" cy="8.972" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(39.51 .387 8.972)"/></g><g filter="url(#k)"><ellipse cx="47.523" cy="-6.092" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 47.523 -6.092)"/></g><g filter="url(#l)"><ellipse cx="41.412" cy="6.333" fill="#47bfff" rx="5.971" ry="9.665" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 41.412 6.333)"/></g><g filter="url(#m)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#n)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#o)"><ellipse cx="35.651" cy="29.907" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 35.651 29.907)"/></g><g filter="url(#p)"><ellipse cx="38.418" cy="32.4" fill="#47bfff" rx="5.971" ry="15.297" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 38.418 32.4)"/></g></g><defs><filter id="b" width="60.045" height="41.654" x="-19.77" y="16.149" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-54.613" y="-7.533" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-49.64" y="2.03" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-45.045" y="20.029" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-43.513" y="21.178" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="15.756" y="-17.901" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-27.636" y="-22.853" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="20.116" y="-38.415" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="24.641" y="-11.323" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="8.244" y="-2.416" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="18.713" y="10.588" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter></defs></svg>
</file>

<file path="client/public/icons.svg">
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="bluesky-icon" viewBox="0 0 16 17">
    <g clip-path="url(#bluesky-clip)"><path fill="#08060d" d="M7.75 7.735c-.693-1.348-2.58-3.86-4.334-5.097-1.68-1.187-2.32-.981-2.74-.79C.188 2.065.1 2.812.1 3.251s.241 3.602.398 4.13c.52 1.744 2.367 2.333 4.07 2.145-2.495.37-4.71 1.278-1.805 4.512 3.196 3.309 4.38-.71 4.987-2.746.608 2.036 1.307 5.91 4.93 2.746 2.72-2.746.747-4.143-1.747-4.512 1.702.189 3.55-.4 4.07-2.145.156-.528.397-3.691.397-4.13s-.088-1.186-.575-1.406c-.42-.19-1.06-.395-2.741.79-1.755 1.24-3.64 3.752-4.334 5.099"/></g>
    <defs><clipPath id="bluesky-clip"><path fill="#fff" d="M.1.85h15.3v15.3H.1z"/></clipPath></defs>
  </symbol>
  <symbol id="discord-icon" viewBox="0 0 20 19">
    <path fill="#08060d" d="M16.224 3.768a14.5 14.5 0 0 0-3.67-1.153c-.158.286-.343.67-.47.976a13.5 13.5 0 0 0-4.067 0c-.128-.306-.317-.69-.476-.976A14.4 14.4 0 0 0 3.868 3.77C1.546 7.28.916 10.703 1.231 14.077a14.7 14.7 0 0 0 4.5 2.306q.545-.748.965-1.587a9.5 9.5 0 0 1-1.518-.74q.191-.14.372-.293c2.927 1.369 6.107 1.369 8.999 0q.183.152.372.294-.723.437-1.52.74.418.838.963 1.588a14.6 14.6 0 0 0 4.504-2.308c.37-3.911-.63-7.302-2.644-10.309m-9.13 8.234c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.894 0 1.614.82 1.599 1.82.001 1-.705 1.82-1.6 1.82m5.91 0c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.893 0 1.614.82 1.599 1.82 0 1-.706 1.82-1.6 1.82"/>
  </symbol>
  <symbol id="documentation-icon" viewBox="0 0 21 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="m15.5 13.333 1.533 1.322c.645.555.967.833.967 1.178s-.322.623-.967 1.179L15.5 18.333m-3.333-5-1.534 1.322c-.644.555-.966.833-.966 1.178s.322.623.966 1.179l1.534 1.321"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M17.167 10.836v-4.32c0-1.41 0-2.117-.224-2.68-.359-.906-1.118-1.621-2.08-1.96-.599-.21-1.349-.21-2.848-.21-2.623 0-3.935 0-4.983.369-1.684.591-3.013 1.842-3.641 3.428C3 6.449 3 7.684 3 10.154v2.122c0 2.558 0 3.838.706 4.726q.306.383.713.671c.76.536 1.79.64 3.581.66"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M3 10a2.78 2.78 0 0 1 2.778-2.778c.555 0 1.209.097 1.748-.047.48-.129.854-.503.982-.982.145-.54.048-1.194.048-1.749a2.78 2.78 0 0 1 2.777-2.777"/>
  </symbol>
  <symbol id="github-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clip-rule="evenodd"/>
  </symbol>
  <symbol id="social-icon" viewBox="0 0 20 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M12.5 6.667a4.167 4.167 0 1 0-8.334 0 4.167 4.167 0 0 0 8.334 0"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M2.5 16.667a5.833 5.833 0 0 1 8.75-5.053m3.837.474.513 1.035c.07.144.257.282.414.309l.93.155c.596.1.736.536.307.965l-.723.73a.64.64 0 0 0-.152.531l.207.903c.164.715-.213.991-.84.618l-.872-.52a.63.63 0 0 0-.577 0l-.872.52c-.624.373-1.003.094-.84-.618l.207-.903a.64.64 0 0 0-.152-.532l-.723-.729c-.426-.43-.289-.864.306-.964l.93-.156a.64.64 0 0 0 .412-.31l.513-1.034c.28-.562.735-.562 1.012 0"/>
  </symbol>
  <symbol id="x-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M1.893 1.98c.052.072 1.245 1.769 2.653 3.77l2.892 4.114c.183.261.333.48.333.486s-.068.089-.152.183l-.522.593-.765.867-3.597 4.087c-.375.426-.734.834-.798.905a1 1 0 0 0-.118.148c0 .01.236.017.664.017h.663l.729-.83c.4-.457.796-.906.879-.999a692 692 0 0 0 1.794-2.038c.034-.037.301-.34.594-.675l.551-.624.345-.392a7 7 0 0 1 .34-.374c.006 0 .93 1.306 2.052 2.903l2.084 2.965.045.063h2.275c1.87 0 2.273-.003 2.266-.021-.008-.02-1.098-1.572-3.894-5.547-2.013-2.862-2.28-3.246-2.273-3.266.008-.019.282-.332 2.085-2.38l2-2.274 1.567-1.782c.022-.028-.016-.03-.65-.03h-.674l-.3.342a871 871 0 0 1-1.782 2.025c-.067.075-.405.458-.75.852a100 100 0 0 1-.803.91c-.148.172-.299.344-.99 1.127-.304.343-.32.358-.345.327-.015-.019-.904-1.282-1.976-2.808L6.365 1.85H1.8zm1.782.91 8.078 11.294c.772 1.08 1.413 1.973 1.425 1.984.016.017.241.02 1.05.017l1.03-.004-2.694-3.766L7.796 5.75 5.722 2.852l-1.039-.004-1.039-.004z" clip-rule="evenodd"/>
  </symbol>
</svg>
</file>

<file path="client/src/assets/react.svg">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
</file>

<file path="client/src/assets/vite.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="77" height="47" fill="none" aria-labelledby="vite-logo-title" viewBox="0 0 77 47"><title id="vite-logo-title">Vite</title><style>.parenthesis{fill:#000}@media (prefers-color-scheme:dark){.parenthesis{fill:#fff}}</style><path fill="#9135ff" d="M40.151 45.71c-.663.844-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.493c-.92 0-1.457-1.04-.92-1.788l7.479-10.471c1.07-1.498 0-3.578-1.842-3.578H15.443c-.92 0-1.456-1.04-.92-1.788l9.696-13.576c.213-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.472c-1.07 1.497 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.087.89 1.83L40.153 45.712z"/><mask id="a" width="48" height="47" x="14" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M40.047 45.71c-.663.843-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.389c-.92 0-1.457-1.04-.92-1.788l7.479-10.472c1.07-1.497 0-3.578-1.842-3.578H15.34c-.92 0-1.456-1.04-.92-1.788l9.696-13.575c.213-.297.556-.474.92-.474H53.93c.92 0 1.456 1.04.92 1.788L47.37 13.03c-1.07 1.498 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.088.89 1.831L40.049 45.712z"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#eee6ff" rx="5.508" ry="14.704" transform="rotate(269.814 20.96 11.29)scale(-1 1)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#eee6ff" rx="10.399" ry="29.851" transform="rotate(89.814 -16.902 -8.275)scale(1 -1)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#8900ff" rx="5.508" ry="30.487" transform="rotate(89.814 -19.197 -7.127)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.928 4.177)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.738 5.52)scale(1 -1)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#eee6ff" rx="14.072" ry="22.078" transform="rotate(93.35 31.245 55.578)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx="14.592" cy="9.743" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(39.51 14.592 9.743)"/></g><g filter="url(#k)"><ellipse cx="61.728" cy="-5.321" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 61.728 -5.32)"/></g><g filter="url(#l)"><ellipse cx="55.618" cy="7.104" fill="#00c2ff" rx="5.971" ry="9.665" transform="rotate(37.892 55.618 7.104)"/></g><g filter="url(#m)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#n)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#o)"><ellipse cx="49.857" cy="30.678" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 49.857 30.678)"/></g><g filter="url(#p)"><ellipse cx="52.623" cy="33.171" fill="#00c2ff" rx="5.971" ry="15.297" transform="rotate(37.892 52.623 33.17)"/></g></g><path d="M6.919 0c-9.198 13.166-9.252 33.575 0 46.789h6.215c-9.25-13.214-9.196-33.623 0-46.789zm62.424 0h-6.215c9.198 13.166 9.252 33.575 0 46.789h6.215c9.25-13.214 9.196-33.623 0-46.789" class="parenthesis"/><defs><filter id="b" width="60.045" height="41.654" x="-5.564" y="16.92" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-40.407" y="-6.762" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-35.435" y="2.801" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-30.84" y="20.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-29.307" y="21.949" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="29.961" y="-17.13" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-13.43" y="-22.082" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="34.321" y="-37.644" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="38.847" y="-10.552" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="22.45" y="-1.645" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="32.919" y="11.36" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter></defs></svg>
</file>

<file path="client/src/components/AuditManager.jsx">
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Upload, Loader2, Activity, FileDown, FileText, TableProperties } from 'lucide-react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function AuditManager() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(() => {
    const saved = localStorage.getItem('audit_results');
    return saved ? JSON.parse(saved) : null;
  });
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('conflictos');
  const [dates, setDates] = useState({ fechaInicio: '', fechaFin: '', anio: new Date().getFullYear().toString() });

  useEffect(() => {
    if (result) {
      localStorage.setItem('audit_results', JSON.stringify(result));
    }
  }, [result]);

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true); setError(''); setResult(null);
    localStorage.removeItem('audit_results');
    const formData = new FormData();
    formData.append('vigilancia', e.target.vigilancia.files[0]);
    formData.append('nomina', e.target.nomina.files[0]);
    formData.append('fechaInicio', dates.fechaInicio);
    formData.append('fechaFin', dates.fechaFin);
    formData.append('anio', dates.anio);
    try {
      const response = await axios.post('/api/auditoria/analizar', formData);
      setResult(response.data);
    } catch (err) { setError(err.response?.data?.error || 'Error al procesar la auditoría'); }
    finally { setLoading(false); }
  };

  const exportToExcel = async () => {
    try {
      const response = await axios.post('/api/auditoria/exportar', { result }, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `auditoria_${new Date().toISOString().split('T')[0]}.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch { setError('Error al exportar el archivo'); }
  };

  const exportMatrizCSV = async () => {
    try {
      const response = await axios.post('/api/auditoria/exportar-matriz', { result }, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `matriz_laboral_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch { setError('Error al exportar la matriz CSV'); }
  };

  const exportToPDF = () => {
    try {
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text('Informe de Auditoría de Nómina', 14, 20);
      doc.setFontSize(11);
      doc.text(`Periodo: ${dates.fechaInicio} al ${dates.fechaFin} | Año: ${dates.anio}`, 14, 30);

      const sections = [
        { title: 'Conflictos', data: result.conflictos, cols: ['Contrato', 'Nombre', 'Fecha', 'Novedad', 'Actividad'] },
        { title: 'Faltantes', data: result.faltantes, cols: ['Contrato', 'Nombre', 'Estado'] },
        { title: 'Inactivos', data: result.inactivos.map(i => ({ ...i, dias_faltantes: i.dias_faltantes.join(', ') })), cols: ['Contrato', 'Nombre', 'Días Faltantes'] },
        { title: 'No Registrados', data: result.noRegistrados, cols: ['Contrato', 'Nombre'] },
        { title: 'Múltiples Actividades', data: result.multiples.map(m => ({ ...m, actividades: m.actividades.join(', ') })), cols: ['Contrato', 'Nombre', 'Fecha', 'Actividades'] },
      ];

      let currentY = 40;
      sections.forEach(section => {
        if (section.data.length === 0) return;
        
        doc.setFontSize(14);
        doc.text(section.title, 14, currentY);
        
        const tableData = section.data.map(row => 
          section.cols.map(col => {
            const key = col.toLowerCase().replace(' ', '_').replace('múltiples', 'multiples');
            const mapping = {
              'contrato': 'contrato',
              'nombre': 'nombre',
              'fecha': 'fecha',
              'novedad': 'novedad',
              'actividad': 'actividad',
              'estado': 'status',
              'días_faltantes': 'dias_faltantes',
              'actividades': 'actividades'
            };
            return row[mapping[key.toLowerCase()] || key];
          })
        );

        doc.autoTable({
          startY: currentY + 5,
          head: [section.cols],
          body: tableData,
          margin: { left: 14, right: 14 },
          theme: 'grid',
          headStyles: { fillColor: [41, 128, 185] }
        });
        
        currentY = doc.lastAutoTable.finalY + 15;
        if (currentY > 270) {
          doc.addPage();
          currentY = 20;
        }
      });

      doc.save(`auditoria_${new Date().toISOString().split('T')[0]}.pdf`);
    } catch { setError('Error al generar el PDF'); }
  };

  const renderPivotTable = (data) => {
    if (!data || data.length === 0) {
      return (
        <div className="px-6 py-10 text-center text-gray-500">
          No se encontraron registros
        </div>
      );
    }

    return (
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase border-r">Nombre Concepto</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase border-r">Detalle</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase">Referencia</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {data.map((row, idx) => {
              const showConcepto = idx === 0 || row.concepto !== data[idx - 1]?.concepto;

              return (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className={`px-4 py-2 text-sm border-r ${showConcepto ? 'font-bold bg-white' : 'text-gray-400'}`}>
                    {showConcepto ? row.concepto : row.concepto}
                  </td>
                  <td className="px-4 py-2 text-sm border-r">
                    {row.detalle}
                  </td>
                  <td className="px-4 py-2 text-sm">
                    {row.referencias}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  const renderTable = (data, columns) => (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50 border-b">
          <tr>
            {columns.map(col => <th key={col.key} className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase">{col.label}</th>)}
          </tr>
        </thead>
        <tbody className="divide-y">
          {data.length > 0 ? data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50 transition-colors">
              {columns.map(col => (
                <td key={col.key} className="px-6 py-4 text-sm text-gray-600">
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          )) : (
            <tr><td colSpan={columns.length} className="px-6 py-10 text-center text-gray-500">No se encontraron registros</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><Activity size={20} className="text-blue-600" /> Configuración de Auditoría</h2>
        <form onSubmit={handleUpload} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div><label className="block text-sm font-medium text-gray-700 mb-1">Fecha Inicio</label><input type="date" required className="block w-full p-2 border rounded-lg" value={dates.fechaInicio} onChange={e => setDates({...dates, fechaInicio: e.target.value})}/></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1">Fecha Fin</label><input type="date" required className="block w-full p-2 border rounded-lg" value={dates.fechaFin} onChange={e => setDates({...dates, fechaFin: e.target.value})}/></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1">Año</label><input type="number" required className="block w-full p-2 border rounded-lg" value={dates.anio} onChange={e => setDates({...dates, anio: e.target.value})}/></div>
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4 mt-2">
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Archivo Vigilancia (.xlsx)</label><input type="file" name="vigilancia" accept=".xlsx" required className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Archivo Nómina (.xlsx)</label><input type="file" name="nomina" accept=".xlsx" required className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"/></div>
          </div>
          <div className="md:col-span-3"><button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition disabled:opacity-50">{loading ? <><Loader2 className="animate-spin" size={20} /> Analizando...</> : <><Upload size={20} /> Ejecutar Auditoría</>}</button></div>
        </form>
        {error && <p className="mt-4 text-red-600 bg-red-50 p-3 rounded">{error}</p>}
      </div>

      {result && (
        <div className="animate-fade-in-up">
          <div className="flex justify-between items-center mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 flex-1 mr-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500"><p className="text-sm text-gray-500">Conflictos</p><p className="text-2xl font-bold">{result.resumen.total_conflictos}</p></div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500"><p className="text-sm text-gray-500">Faltantes</p><p className="text-2xl font-bold">{result.resumen.total_faltantes}</p></div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500"><p className="text-sm text-gray-500">Inactivos</p><p className="text-2xl font-bold">{result.resumen.total_inactivos}</p></div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500"><p className="text-sm text-gray-500">No Registrados</p><p className="text-2xl font-bold">{result.resumen.total_no_registrados}</p></div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500"><p className="text-sm text-gray-500">Mult. Actividades</p><p className="text-2xl font-bold">{result.resumen.total_multiples}</p></div>
            </div>
            <div className="flex gap-2">
              <button onClick={exportToPDF} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition shadow-sm whitespace-nowrap">
                <FileText size={20} /> PDF
              </button>
              <button onClick={exportToExcel} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition shadow-sm whitespace-nowrap">
                <FileDown size={20} /> Excel
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex border-b overflow-x-auto">
              {['conflictos', 'faltantes', 'inactivos', 'noRegistrados', 'multiples', 'resumenDetalle', 'matriz'].map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${activeTab === tab ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-700'}`}>
                  {tab === 'conflictos' ? 'Conflictos' : tab === 'faltantes' ? 'Faltantes' : tab === 'inactivos' ? 'Inactivos' : tab === 'noRegistrados' ? 'No Registrados' : tab === 'multiples' ? 'Mult. Actividades' : tab === 'resumenDetalle' ? 'Resumen Detalles' : 'Matriz Laboral'}
                </button>
              ))}
            </div>
            
            <div className="p-0">
              {activeTab === 'conflictos' && renderTable(result.conflictos, [
                { key: 'contrato', label: 'Contrato' },
                { key: 'nombre', label: 'Nombre' },
                { key: 'fecha', label: 'Fecha' },
                { key: 'novedad', label: 'Novedad' },
                { key: 'actividad', label: 'Actividad' },
              ])}
              {activeTab === 'faltantes' && renderTable(result.faltantes, [
                { key: 'contrato', label: 'Contrato' },
                { key: 'nombre', label: 'Nombre' },
                { key: 'status', label: 'Estado' },
              ])}
              {activeTab === 'inactivos' && renderTable(result.inactivos, [
                { key: 'contrato', label: 'Contrato' },
                { key: 'nombre', label: 'Nombre' },
                { key: 'dias_faltantes', label: 'Días Faltantes', render: row => row.dias_faltantes.join(', ') },
              ])}
              {activeTab === 'noRegistrados' && renderTable(result.noRegistrados, [
                { key: 'contrato', label: 'Contrato' },
                { key: 'nombre', label: 'Nombre' },
              ])}
              {activeTab === 'multiples' && renderTable(result.multiples, [
                { key: 'contrato', label: 'Contrato' },
                { key: 'nombre', label: 'Nombre' },
                { key: 'fecha', label: 'Fecha' },
                { key: 'actividades', label: 'Actividades', render: row => row.actividades.join(', ') },
              ])}
              {activeTab === 'resumenDetalle' && renderPivotTable(result.resumenDetalles)}
              {activeTab === 'matriz' && (
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Matriz de Actividades Diarias</h3>
                    <button onClick={exportMatrizCSV} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition shadow-sm">
                      <FileDown size={20} /> Exportar Matriz CSV
                    </button>
                  </div>
                  <div className="overflow-x-auto border rounded-lg">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase sticky left-0 bg-gray-50 z-10 border-r">Nombre</th>
                          {result.diasLaborales.map(date => {
                            const [, m, d] = date.split('-');
                            const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
                            return <th key={date} className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase min-w-[80px]">{d} {months[parseInt(m)-1]}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {result.matriz.map((emp, idx) => (
                          <tr key={idx} className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 text-sm font-medium text-gray-900 sticky left-0 bg-white z-10 border-r">{emp.nombre}</td>
                            {result.diasLaborales.map(date => (
                              <td key={date} className="px-4 py-3 text-sm text-center text-gray-600">
                                {emp.conteo[date] || ''}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
</file>

<file path="client/src/components/EmployeeManager.jsx">
import { useState, useEffect } from 'react';
import axios from 'axios';

// Configurar baseURL para producción si se define la variable Vite
axios.defaults.baseURL = import.meta.env.VITE_API_URL || '';
import { Upload, Loader2, Search, UserPlus, X, FileDown } from 'lucide-react';

export default function EmployeeManager() {
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [search, setSearch] = useState('');
  
  // Estado para el modal de agregar empleado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({ nombre: '', contrato: '' });
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get('/api/empleados');
        setEmployees(res.data);
      } catch (err) {
        console.error('Error fetching employees', err);
        setError('No se pudo cargar la lista de empleados. Ver consola para más detalles.');
      }
    };
    fetchEmployees();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true); setError(''); setSuccess('');
    const formData = new FormData();
    if (!e.target.csvFile.files[0]) {
      setError('Por favor seleccione un archivo');
      setLoading(false);
      return;
    }
    formData.append('file', e.target.csvFile.files[0]);
    try {
      const res = await axios.post('/api/empleados/cargar', formData);
      setSuccess(res.data.message);
      if (res.data.warnings && res.data.warnings.length > 0) {
        setError(`Atención: Se detectaron ${res.data.warnings.length} contratos en notación científica. Por favor, exporte el CSV con formato de Texto.`);
      }
      const updatedRes = await axios.get('/api/empleados');
      setEmployees(updatedRes.data);
    } catch (err) { setError(err.response?.data?.error || 'Error al cargar el archivo CSV'); }
    finally { setLoading(false); }
  };

  const handleAddNewEmployee = async (e) => {
    e.preventDefault();
    setAdding(true); setError(''); setSuccess('');
    try {
      const res = await axios.post('/api/empleados', newEmployee);
      setSuccess(res.data.message);
      setIsModalOpen(false);
      setNewEmployee({ nombre: '', contrato: '' });
      const updatedRes = await axios.get('/api/empleados');
      setEmployees(updatedRes.data);
    } catch (err) { setError(err.response?.data?.error || 'Error al agregar el empleado'); }
    finally { setAdding(false); }
  };

  const handleExportEmployees = async () => {
    try {
      const response = await axios.get('/api/empleados/exportar', { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `maestro_empleados_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch { setError('Error al exportar la lista de empleados'); }
  };

  const filteredEmployees = employees.filter(emp => 
    emp.nombre.toLowerCase().includes(search.toLowerCase()) || emp.contrato.includes(search)
  );

  const toggleStatus = async (contrato, currentStatus) => {
    const newStatus = currentStatus === 'activo' ? 'inactivo' : 'activo';
    try {
      await axios.put(`/api/empleados/${contrato}`, { status: newStatus });
      const res = await axios.get('/api/empleados');
      setEmployees(res.data);
    } catch { setError('Error al cambiar el estado'); }
  };

  const deleteEmployee = async (contrato) => {
    if(confirm('¿Estás seguro de eliminar este empleado?')) {
      try {
        await axios.delete(`/api/empleados/${contrato}`);
        const res = await axios.get('/api/empleados');
        setEmployees(res.data);
      } catch { setError('Error al eliminar el empleado'); }
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Gestión de Empleados</h1>
        <div className="flex gap-2 items-center">
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2 transition-colors"
          >
            <UserPlus className="w-4 h-4" /> Agregar Empleado
          </button>
          <button 
            onClick={handleExportEmployees}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 flex items-center gap-2 transition-colors"
          >
            <FileDown className="w-4 h-4" /> Exportar Maestro
          </button>
          <form onSubmit={handleUpload} className="flex gap-2 items-center">
            <input type="file" name="csvFile" accept=".csv" className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 flex items-center gap-2 transition-colors">
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              <Upload className="w-4 h-4" /> Cargar CSV
            </button>
          </form>
        </div>
      </div>

      {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">{error}</div>}
      {success && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">{success}</div>}

      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input 
          type="text" 
          placeholder="Buscar por nombre o contrato..." 
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden border">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase">Contrato</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase">Nombre</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase">Estado</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((emp, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{emp.contrato}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{emp.nombre}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${emp.status === 'activo' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-right flex justify-end gap-3">
                    <button onClick={() => toggleStatus(emp.contrato, emp.status)} className="text-blue-600 hover:text-blue-800 font-medium">
                      {emp.status === 'activo' ? 'Desactivar' : 'Activar'}
                    </button>
                    <button onClick={() => deleteEmployee(emp.contrato)} className="text-red-600 hover:text-red-800 font-medium">Eliminar</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-10 text-center text-gray-500">No se encontraron empleados</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal para agregar empleado */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-bold text-gray-800">Agregar Nuevo Empleado</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleAddNewEmployee} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                  value={newEmployee.nombre}
                  onChange={e => setNewEmployee({...newEmployee, nombre: e.target.value})}
                  placeholder="Ej. Juan Perez"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Número de Contrato / Cédula</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                  value={newEmployee.contrato}
                  onChange={e => setNewEmployee({...newEmployee, contrato: e.target.value})}
                  placeholder="Ej. 100427300941"
                />
              </div>
              <div className="pt-4 flex gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)} 
                  className="flex-1 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                >
                  Cancelar
                </button>
                <button 
                  type="submit" 
                  disabled={adding} 
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 font-medium transition-colors flex items-center justify-center gap-2"
                >
                  {adding && <Loader2 className="w-4 h-4 animate-spin" />}
                  Guardar Empleado
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
</file>

<file path="client/src/App.css">
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}
</file>

<file path="client/src/App.jsx">
import { useState } from 'react';
import { FileSpreadsheet, Users, Activity } from 'lucide-react';
import EmployeeManager from './components/EmployeeManager';
import AuditManager from './components/AuditManager';

export default function App() {
  const [activeTab, setActiveTab] = useState('audit');

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800 font-sans">
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-6 flex items-center gap-3 border-b border-blue-800">
          <FileSpreadsheet size={28} className="text-blue-300" />
          <span className="font-bold text-lg leading-tight">Auditoría<br/>Nómina</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button onClick={() => setActiveTab('employees')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeTab === 'employees' ? 'bg-blue-700 text-white shadow-inner' : 'text-blue-200 hover:bg-blue-800'}`}>
            <Users size={20} /> Maestro Empleados
          </button>
          <button onClick={() => setActiveTab('audit')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeTab === 'audit' ? 'bg-blue-700 text-white shadow-inner' : 'text-blue-200 hover:bg-blue-800'}`}>
            <Activity size={20} /> Analizar Auditoría
          </button>
        </nav>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {activeTab === 'employees' ? 'Gestión de Empleados' : 'Auditoría de Nómina'}
            </h1>
          </div>
          <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 text-sm font-medium text-gray-600">
            {new Date().toLocaleDateString()}
          </div>
        </header>

        {activeTab === 'employees' ? <EmployeeManager /> : <AuditManager />}
      </main>
    </div>
  );
}
</file>

<file path="client/src/index.css">
@tailwind base;
@tailwind components;
@tailwind utilities;
</file>

<file path="client/src/main.jsx">
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios';
import './index.css'
import App from './App.jsx'

// Determina la URL de la API basándose en el entorno
const API_URL = import.meta.env.VITE_API_URL || 
               (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
                ? 'http://localhost:8080' 
                : '');

axios.defaults.baseURL = API_URL;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
</file>

<file path="client/.gitignore">
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
</file>

<file path="client/eslint.config.js">
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
</file>

<file path="client/index.html">
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>client</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
</file>

<file path="client/package.json">
{
  "name": "client",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.15.2",
    "jspdf": "^4.2.1",
    "jspdf-autotable": "^5.0.8",
    "lucide-react": "^1.8.0",
    "react": "^19.2.5",
    "react-dom": "^19.2.5"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.4",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "autoprefixer": "^10.5.0",
    "eslint": "^9.39.4",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.5.0",
    "postcss": "^8.5.10",
    "tailwindcss": "3.4.19",
    "vite": "^8.0.9"
  }
}
</file>

<file path="client/postcss.config.js">
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
</file>

<file path="client/README.md">
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
</file>

<file path="client/tailwind.config.js">
/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
</file>

<file path="client/vite.config.js">
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
</file>

<file path="db/init.sql">
-- Initialize database schema
CREATE TABLE IF NOT EXISTS workers (
    id SERIAL PRIMARY KEY,
    cedula VARCHAR(20) UNIQUE NOT NULL,
    nombre TEXT NOT NULL,
    area TEXT
);

CREATE TABLE IF NOT EXISTS novelties (
    id SERIAL PRIMARY KEY,
    worker_id INTEGER REFERENCES workers(id) ON DELETE CASCADE,
    tipo VARCHAR(20) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    observacion TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(worker_id, fecha_inicio, tipo)
);

CREATE TABLE IF NOT EXISTS payroll_records (
    id SERIAL PRIMARY KEY,
    worker_id INTEGER REFERENCES workers(id) ON DELETE CASCADE,
    fecha DATE NOT NULL,
    concepto VARCHAR(50),
    detalle TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(worker_id, fecha, concepto)
);
</file>

<file path="server/config/constants.js">
const FESTIVOS_COLOMBIA = {
  2026: [
    { mes: 1, dia: 1, nombre: "Año Nuevo" },
    { mes: 1, dia: 6, nombre: "Dia de los Reyes Magos" },
    { mes: 1, dia: 12, nombre: "Dia de San Juan" },
    { mes: 1, dia: 20, nombre: "Dia de San José" },
    { mes: 2, dia: 16, nombre: "Dia de la Constitución" },
    { mes: 2, dia: 23, nombre: "Dia de la Cultura" },
    { mes: 3, dia: 23, nombre: "Semana Santa" },
    { mes: 4, dia: 2, nombre: "Jueves Santo" },
    { mes: 4, dia: 3, nombre: "Viernes Santo" },
    { mes: 5, dia: 1, nombre: "Dia del Trabajo" },
    { mes: 5, dia: 18, nombre: "Dia de la Ascensión" },
    { mes: 6, dia: 15, nombre: "Corpus Christi" },
    { mes: 6, dia: 29, nombre: "San Pedro y San Pablo" },
    { mes: 7, dia: 20, nombre: "Dia de la Independencia" },
    { mes: 8, dia: 7, nombre: "Batalla de Boyacá" },
    { mes: 8, dia: 24, nombre: "Maria Stella" },
    { mes: 10, dia: 12, nombre: "Dia de la Raza" },
    { mes: 10, dia: 17, nombre: "Dia de la Universidad" },
    { mes: 11, dia: 2, nombre: "Dia de los Difuntos" },
    { mes: 11, dia: 16, nombre: "Dia de Cartagena" },
    { mes: 12, dia: 8, nombre: "Inmaculada Concepción" },
    { mes: 12, dia: 25, nombre: "Navidad" }
  ]
};

const TIPOS_VALIDOS_VIGILANCIA = ['EMG', 'AT', 'PERM', 'INAS', 'LLUTO', 'LEY MARÍA', 'VAC', 'SUSP', 'HOSP', 'NUEVO'];

module.exports = { FESTIVOS_COLOMBIA, TIPOS_VALIDOS_VIGILANCIA };
</file>

<file path="server/config/db.js">
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
</file>

<file path="server/models/Empleado.js">
const mongoose = require('mongoose');

const EmpleadoSchema = new mongoose.Schema({
  contrato: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['activo', 'inactivo'],
    default: 'activo'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);
</file>

<file path="server/models/empleados.json">
{
  "actualizado": "2026-05-04T07:30:02.767Z",
  "empleados": [
    {
      "contrato": "1128104827",
      "nombre": "ALFARO CAMARGO ARLEY ALEJANDRO",
      "status": "activo"
    },
    {
      "contrato": "1193219009",
      "nombre": "ALGARIN MOYA WUILLIAM ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "19619861",
      "nombre": "ALVAREZ PADILLA JUAN CARLOS",
      "status": "activo"
    },
    {
      "contrato": "57272444",
      "nombre": "ALVIS BARRIOS MILENA PATRICIA",
      "status": "activo"
    },
    {
      "contrato": "195982123",
      "nombre": "ANAYA ANAYA JOSE ANGEL",
      "status": "activo"
    },
    {
      "contrato": "1193154681",
      "nombre": "ARAGON TAMARA CARLOS ANDRES",
      "status": "activo"
    },
    {
      "contrato": "10829328961",
      "nombre": "AREVALO OSORIO YOHANA LISETH",
      "status": "activo"
    },
    {
      "contrato": "84077062",
      "nombre": "ARPUSHANA CARLOS",
      "status": "activo"
    },
    {
      "contrato": "77166634",
      "nombre": "ARRIETA MARTINEZ LUIS ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "19602769",
      "nombre": "BARRANCO ARIAS EDWIN ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "1065123229",
      "nombre": "BARRANCO CERPA ELIAS DAVID",
      "status": "activo"
    },
    {
      "contrato": "195902971",
      "nombre": "BARRANCO OSPINO JOSE MARCELINO",
      "status": "activo"
    },
    {
      "contrato": "11281065801",
      "nombre": "BARRIOS JIMENEZ FRAY LUIS",
      "status": "activo"
    },
    {
      "contrato": "1084729362",
      "nombre": "BELTRAN VILLA DARWIN DAVID",
      "status": "activo"
    },
    {
      "contrato": "1193126015",
      "nombre": "BENAVIDES MANOTAS NORIS ELENA",
      "status": "activo"
    },
    {
      "contrato": "1131005354",
      "nombre": "BERDUGO MERCADO JHAN CARLOS",
      "status": "activo"
    },
    {
      "contrato": "1128106085",
      "nombre": "BOLAÑO MERCADO EFRAIN JAVIER",
      "status": "activo"
    },
    {
      "contrato": "1065641354",
      "nombre": "BUELVAS CASTRO VICTOR LUIS",
      "status": "activo"
    },
    {
      "contrato": "852901601",
      "nombre": "BURGOS ALEMAN YILMAR DE JESUS",
      "status": "activo"
    },
    {
      "contrato": "11931334081",
      "nombre": "CABARCAS GARCIA DANILO JAVIER",
      "status": "activo"
    },
    {
      "contrato": "1007095248",
      "nombre": "CABARCAS GARCIA FRANCISCO AVELARDO",
      "status": "activo"
    },
    {
      "contrato": "11932123284",
      "nombre": "CABARCAS MENDOZA FRANCISCO JOSE",
      "status": "activo"
    },
    {
      "contrato": "195103671",
      "nombre": "CABARCAS VERGARA TOMAS JOSE",
      "status": "activo"
    },
    {
      "contrato": "11342042751",
      "nombre": "CANTILLO  BARRANCO AMADO SEGUNDO",
      "status": "activo"
    },
    {
      "contrato": "77168224",
      "nombre": "CANTILLO CANTILLO DAVIER DAVID",
      "status": "activo"
    },
    {
      "contrato": "19619781",
      "nombre": "CANTILLO ESCORCIA RAFAEL ANTONIO",
      "status": "activo"
    },
    {
      "contrato": "195921121",
      "nombre": "CANTILLO FERNANDEZ PEDRO ANTONIO",
      "status": "activo"
    },
    {
      "contrato": "85290180",
      "nombre": "CANTILLO LOPEZ PEDRO ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "1193219294",
      "nombre": "CANTILLO MENDOZA YEISON DAVID",
      "status": "activo"
    },
    {
      "contrato": "7603924",
      "nombre": "CANTILLO MEZA CLEINER MANUEL",
      "status": "activo"
    },
    {
      "contrato": "1193140834",
      "nombre": "CANTILLO MIRANDA CARLOS ANDRES",
      "status": "activo"
    },
    {
      "contrato": "11281088502",
      "nombre": "CANTILLO RODRIGUEZ JULIO ANDRES",
      "status": "activo"
    },
    {
      "contrato": "195880601",
      "nombre": "CANTILLO VERGARA RAFAEL ANTONIO",
      "status": "activo"
    },
    {
      "contrato": "1128105601",
      "nombre": "CAÑA DE AVILA CARLOS SAMIR",
      "status": "activo"
    },
    {
      "contrato": "75972361",
      "nombre": "CARRILLO GARCIA LISARDO SANTANDER",
      "status": "activo"
    },
    {
      "contrato": "72210183",
      "nombre": "CARRILLO RAMOS CARLOS ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "11281095741",
      "nombre": "CASTELLANO ACOSTA ALONSO MIGUEL",
      "status": "activo"
    },
    {
      "contrato": "1134204290",
      "nombre": "CASTELLANO CARRACEDO GLENIS MARIA",
      "status": "inactivo"
    },
    {
      "contrato": "1193211838",
      "nombre": "CASTELLANO CARRACEDO JENIFFER",
      "status": "activo"
    },
    {
      "contrato": "1193576502",
      "nombre": "CASTRO ORDOÑEZ ARNULFO ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "1007929143",
      "nombre": "CASTRO POLO CARLOS DAVID",
      "status": "activo"
    },
    {
      "contrato": "1193154680",
      "nombre": "CASTRO POLO LUIS ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "1131040993",
      "nombre": "CATRILLO GAMEZ JOHAIDIS ANTONIO",
      "status": "activo"
    },
    {
      "contrato": "11932188552",
      "nombre": "CERVANTES CASTRO VANESSA PATRICIA",
      "status": "activo"
    },
    {
      "contrato": "11281040831",
      "nombre": "CERVANTES MUÑOZ ANDRES DAVID",
      "status": "activo"
    },
    {
      "contrato": "19592207",
      "nombre": "CERVANTES VALENCIA EVER LUIS",
      "status": "activo"
    },
    {
      "contrato": "195949781",
      "nombre": "CERVANTES VALENCIA RICHARD ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "19604486",
      "nombre": "CHARRIS CASTRO JAIDER ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "195982053",
      "nombre": "CHARRIS CASTRO PEDRO JOSE",
      "status": "activo"
    },
    {
      "contrato": "11931415601",
      "nombre": "CHARRIS RODRIGUEZ ROBERTO CARLOS",
      "status": "activo"
    },
    {
      "contrato": "852622151",
      "nombre": "CONTRERAS SALCEDO ALVARO RAFAEL",
      "status": "activo"
    },
    {
      "contrato": "195952111",
      "nombre": "CRESPO GARCIA MIGUEL ARCANGEL",
      "status": "activo"
    },
    {
      "contrato": "19596842",
      "nombre": "CRESPO VALENCIA NIBALDO ANTONIO",
      "status": "activo"
    },
    {
      "contrato": "7716586812",
      "nombre": "DE AGUAS ARIZA JAIRO ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "195907473",
      "nombre": "DE AVILA RIVERA JAIRO RAFAEL",
      "status": "activo"
    },
    {
      "contrato": "1193127906",
      "nombre": "DE AVILA TORRIJO SAMUEL DAVID",
      "status": "activo"
    },
    {
      "contrato": "1193285054",
      "nombre": "DELGAN CASTRILLO OMAR YESITH",
      "status": "activo"
    },
    {
      "contrato": "1128106269",
      "nombre": "DIAZ DE AVILA CRISTIAN DANIEL",
      "status": "activo"
    },
    {
      "contrato": "11281041401",
      "nombre": "DITA BERNATE JORGE LUIS",
      "status": "activo"
    },
    {
      "contrato": "86382431",
      "nombre": "DITA IGLESIAS ANGEL",
      "status": "activo"
    },
    {
      "contrato": "195968181",
      "nombre": "ENTRENA SALGADO LUIS FERNANDO",
      "status": "activo"
    },
    {
      "contrato": "10818027141",
      "nombre": "ESCANDON ALTAMAR ANDRES FRANCISCO",
      "status": "activo"
    },
    {
      "contrato": "195940161",
      "nombre": "ESCORCIA GARCIA JAIME  MANUEL",
      "status": "activo"
    },
    {
      "contrato": "771663711",
      "nombre": "ESTRADA PERTUZ LUIS ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "195888171",
      "nombre": "FABIAN PABON FELIX ANTONIO",
      "status": "activo"
    },
    {
      "contrato": "127037371",
      "nombre": "FABIAN PABON GERMAN ELIAS",
      "status": "activo"
    },
    {
      "contrato": "84077270",
      "nombre": "FINCE ARPUSHANA ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "17948898",
      "nombre": "FINCE ARPUSHANA JAIDER",
      "status": "activo"
    },
    {
      "contrato": "1079912747",
      "nombre": "FONTALVO PERTUZ VICTOR MANUEL",
      "status": "activo"
    },
    {
      "contrato": "85290136",
      "nombre": "GALVAN TEJEDA WUILSON JESUS",
      "status": "activo"
    },
    {
      "contrato": "1084735587",
      "nombre": "GAMERO TORRES ALVARO RAMON",
      "status": "activo"
    },
    {
      "contrato": "1128110681",
      "nombre": "GARCERAN CABARCAS DEINER FARID",
      "status": "activo"
    },
    {
      "contrato": "195905541",
      "nombre": "GARCERAN CAMACHO JULIO DOMINGO",
      "status": "activo"
    },
    {
      "contrato": "10031982332",
      "nombre": "GARCIA BARRANCO CRISTIAN RAFAEL",
      "status": "activo"
    },
    {
      "contrato": "11281049831",
      "nombre": "GARCIA CANTILLO MATIAS JOSE",
      "status": "activo"
    },
    {
      "contrato": "771665103",
      "nombre": "GARCIA GARCIA RAFAEL MARIA",
      "status": "activo"
    },
    {
      "contrato": "195986601",
      "nombre": "GARCIA GUZMAN WILFRIDO RAFAEL",
      "status": "activo"
    },
    {
      "contrato": "10079290891",
      "nombre": "GONZALEZ BERRIO YORLEDIS TAILITH",
      "status": "activo"
    },
    {
      "contrato": "19602023",
      "nombre": "GONZALEZ MARTINEZ JARRINSON ALFONSO",
      "status": "activo"
    },
    {
      "contrato": "195998631",
      "nombre": "GONZALEZ NOCHE WILMER ALFONSO",
      "status": "activo"
    },
    {
      "contrato": "853804321",
      "nombre": "GONZALEZ NOCHES BENJAMIN ANTONIO",
      "status": "activo"
    },
    {
      "contrato": "1065138960",
      "nombre": "GUERRERO VERGARA JESUS MANUEL",
      "status": "activo"
    },
    {
      "contrato": "1065132548",
      "nombre": "GUERRERO VERGARA LUIS EDUARDO",
      "status": "activo"
    },
    {
      "contrato": "11281053882",
      "nombre": "GUTIERREZ MARTINEZ ALJEDIS MIGUEL",
      "status": "activo"
    },
    {
      "contrato": "1128186055",
      "nombre": "GUTIERREZ PEDROZA JORGE LUIS",
      "status": "activo"
    },
    {
      "contrato": "1128106991",
      "nombre": "HERNANDEZ MEDINA JOAN CARLOS",
      "status": "activo"
    },
    {
      "contrato": "1128104125",
      "nombre": "HERRERA DIAZ CARLOS ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "179724621",
      "nombre": "IGUARAN  AVILA NESTOR SEGUNDO",
      "status": "activo"
    },
    {
      "contrato": "1123416869",
      "nombre": "IPUANA IPUANA EDINSON MANUEL",
      "status": "activo"
    },
    {
      "contrato": "11281062073",
      "nombre": "ISMAEL LOPEZ LUIS ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "11281097471",
      "nombre": "JIMENEZ ARIZA JENNIFER JOHANA",
      "status": "activo"
    },
    {
      "contrato": "1193142822",
      "nombre": "JIMENEZ ARIZA JOINER JAVIER",
      "status": "activo"
    },
    {
      "contrato": "1128104248",
      "nombre": "JIMENEZ CASTELLAR VALERIA KARINA",
      "status": "inactivo"
    },
    {
      "contrato": "11342042023",
      "nombre": "JIMENEZ ESCORCIA JAIME LUIS",
      "status": "activo"
    },
    {
      "contrato": "77170450",
      "nombre": "JIMENEZ MOJICA JUAN AGUSTIN",
      "status": "activo"
    },
    {
      "contrato": "1081819970",
      "nombre": "JIMENEZ MOLINARES DINA LUZ",
      "status": "activo"
    },
    {
      "contrato": "1128106227",
      "nombre": "JIMENEZ PEREZ DEIBER JOSE",
      "status": "activo"
    },
    {
      "contrato": "1193219583",
      "nombre": "JIMENEZ POLO WELSER ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "1151187355",
      "nombre": "JIMENEZ RODRIGUEZ CRISTIAN JESUS",
      "status": "activo"
    },
    {
      "contrato": "19596054",
      "nombre": "JIMENEZ RUIZ UBALDO ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "1128107546",
      "nombre": "JIMENEZ VALENCIA ALVARO JOSE",
      "status": "activo"
    },
    {
      "contrato": "85290076",
      "nombre": "JIMENEZ VALENCIA LUIS JAVIER",
      "status": "activo"
    },
    {
      "contrato": "12448339",
      "nombre": "JIMENEZ VARELA ANTONIO ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "1151456577",
      "nombre": "JUSAYU SALVADOR",
      "status": "activo"
    },
    {
      "contrato": "127037361",
      "nombre": "LARA ESPAÑA JUAN",
      "status": "activo"
    },
    {
      "contrato": "196016001",
      "nombre": "LARA VALDEZ FABIO",
      "status": "activo"
    },
    {
      "contrato": "57270890",
      "nombre": "MADRID FONSECA DIOCELINA DEL SOCORRO",
      "status": "activo"
    },
    {
      "contrato": "11281101131",
      "nombre": "MADRID PEREZ BRAYAN JOSE",
      "status": "activo"
    },
    {
      "contrato": "1081026016",
      "nombre": "MANJARRES NAVARRO DAVID ALFONSO",
      "status": "activo"
    },
    {
      "contrato": "19601585",
      "nombre": "MARTINEZ OROZCO CARLOS MARIO",
      "status": "activo"
    },
    {
      "contrato": "1065138852",
      "nombre": "MARTINEZ OROZCO DIEGO ARMANDO",
      "status": "activo"
    },
    {
      "contrato": "127037211",
      "nombre": "MARTINEZ PARODIS PEDRO MANUEL",
      "status": "activo"
    },
    {
      "contrato": "7636550",
      "nombre": "MATOSO MARTINEZ RAMON DE JESUS",
      "status": "activo"
    },
    {
      "contrato": "1128104868",
      "nombre": "MAZA VERGARA BENJAMIN",
      "status": "activo"
    },
    {
      "contrato": "1128105334",
      "nombre": "MENDINUETA BENAVIDES CARLOS ARTURO",
      "status": "activo"
    },
    {
      "contrato": "1128106782",
      "nombre": "MENDINUETA MAESTRE ARMANDO LUIS",
      "status": "activo"
    },
    {
      "contrato": "1193219020",
      "nombre": "MENDOZA DE AVILA JORGE LUIS",
      "status": "activo"
    },
    {
      "contrato": "1193133417",
      "nombre": "MENDOZA DE AVILA KEIDER JOSE",
      "status": "activo"
    },
    {
      "contrato": "11281094671",
      "nombre": "MENDOZA MENDOZA JESUS DAVID",
      "status": "activo"
    },
    {
      "contrato": "1193133960",
      "nombre": "MERCADO RODRIGUEZ ELKIN ALFONSO",
      "status": "activo"
    },
    {
      "contrato": "1081819320",
      "nombre": "MEZA ACOSTA WALTER JOSE",
      "status": "activo"
    },
    {
      "contrato": "11932192201",
      "nombre": "MEZA GARCIA EDINSON RAFAEL",
      "status": "activo"
    },
    {
      "contrato": "11934378521",
      "nombre": "MEZA MENCO LUIS FELIPE",
      "status": "activo"
    },
    {
      "contrato": "11281087871",
      "nombre": "MIRANDA DE LA CERDA ARAMIS MANUEL",
      "status": "activo"
    },
    {
      "contrato": "10658181841",
      "nombre": "MIRANDA LOPEZ ANDRES FELIPE",
      "status": "activo"
    },
    {
      "contrato": "195991841",
      "nombre": "MIRANDA MEZA MIGUEL ANTONIO",
      "status": "activo"
    },
    {
      "contrato": "11932114042",
      "nombre": "MIRANDA PABOLA JOSE CARLOS",
      "status": "activo"
    },
    {
      "contrato": "1193127524",
      "nombre": "MIRANDA PALLARES LUIS MIGUEL",
      "status": "activo"
    },
    {
      "contrato": "195952071",
      "nombre": "MOLINA CORONADO CIGISFREDO",
      "status": "activo"
    },
    {
      "contrato": "195967871",
      "nombre": "MOLINA CORONADO FREDI EDUARDO",
      "status": "activo"
    },
    {
      "contrato": "10077730503",
      "nombre": "MOLINA PIÑA EDUARDO JOSE",
      "status": "activo"
    },
    {
      "contrato": "85290062",
      "nombre": "MORA REYES RIGO JAIDER",
      "status": "activo"
    },
    {
      "contrato": "1193133627",
      "nombre": "MORA REYES YERSON ESNEIDER",
      "status": "activo"
    },
    {
      "contrato": "85290134",
      "nombre": "MORALES BARRANCO JUAN  CARLOS",
      "status": "activo"
    },
    {
      "contrato": "100427300941",
      "nombre": "MORALES ECHAVARRIA JEAN CARLOS",
      "status": "activo"
    },
    {
      "contrato": "195898421",
      "nombre": "MOVILLA DE AVILA CARLOS CRISTOBAL",
      "status": "activo"
    },
    {
      "contrato": "195947041",
      "nombre": "MOVILLA DE AVILA GENITO ANTONIO",
      "status": "activo"
    },
    {
      "contrato": "195994191",
      "nombre": "MUÑOZ BERDUGO LUIS JAVIER",
      "status": "activo"
    },
    {
      "contrato": "1063947881",
      "nombre": "MUÑOZ GUTIERREZ LUIS ALFONSO",
      "status": "activo"
    },
    {
      "contrato": "1193068106",
      "nombre": "NAVARRO DE AVILA JUAN CARLOS",
      "status": "activo"
    },
    {
      "contrato": "572000542",
      "nombre": "NIETO ORTEGA CLAUDIA PATRICIA",
      "status": "activo"
    },
    {
      "contrato": "1065124272",
      "nombre": "OCHOA GUTIERREZ CARLOS ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "19595727",
      "nombre": "OCHOA VALENCIA RAMON MANUEL",
      "status": "activo"
    },
    {
      "contrato": "19594052",
      "nombre": "OLIVAREZ DIAZ NISON RAFAEL",
      "status": "activo"
    },
    {
      "contrato": "197080432",
      "nombre": "OLIVEROS RODRIGUEZ JOSE LUIS",
      "status": "activo"
    },
    {
      "contrato": "1193584618",
      "nombre": "OROZCO CRESPO ALBA PATRICIA",
      "status": "activo"
    },
    {
      "contrato": "85479117",
      "nombre": "OROZCO GUTIERREZ WUILSON RAFAEL",
      "status": "activo"
    },
    {
      "contrato": "11932105881",
      "nombre": "OROZCO LARA LUIS FELIPE",
      "status": "activo"
    },
    {
      "contrato": "10651396241",
      "nombre": "OROZCO LUGO JHAN CARLOS",
      "status": "activo"
    },
    {
      "contrato": "196011682",
      "nombre": "OROZCO MENDINUETA FRAY LUIS",
      "status": "activo"
    },
    {
      "contrato": "11310401051",
      "nombre": "OROZCO SALCEDO RAFAEL ANTONIO",
      "status": "activo"
    },
    {
      "contrato": "1065123812",
      "nombre": "ORTEGA ARIZA JAIRO ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "19562671",
      "nombre": "ORTEGA BALDONADO DOMINGO",
      "status": "activo"
    },
    {
      "contrato": "9876628",
      "nombre": "ORTIZ GARCIA RENILFO MANUEL",
      "status": "activo"
    },
    {
      "contrato": "1079911799",
      "nombre": "ORTIZ RODRIGUEZ FELIX DAVID",
      "status": "activo"
    },
    {
      "contrato": "195879171",
      "nombre": "OTERO CASTILLO JUAN FRANCISCO",
      "status": "activo"
    },
    {
      "contrato": "1193067476",
      "nombre": "OTERO MANOTAS JESUS ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "11932188745",
      "nombre": "OYOLA MADRID JULIO CESAR",
      "status": "activo"
    },
    {
      "contrato": "11281090663",
      "nombre": "OYOLA MADRID LUIS DAVID",
      "status": "activo"
    },
    {
      "contrato": "196163901",
      "nombre": "OYOLA VILLA DAVID ANTONIO",
      "status": "activo"
    },
    {
      "contrato": "195890201",
      "nombre": "PACHECO ALEMAN JOSE LUIS",
      "status": "activo"
    },
    {
      "contrato": "572001331",
      "nombre": "PADILLA JIMENEZ LUZ MARINA",
      "status": "activo"
    },
    {
      "contrato": "1128105128",
      "nombre": "PADILLA TORRES JUAN JOSE",
      "status": "activo"
    },
    {
      "contrato": "195983111",
      "nombre": "PALMERA PALMA JORGE MARIO",
      "status": "activo"
    },
    {
      "contrato": "75941581",
      "nombre": "PALMERA SIERRA JUAN DE DIOS",
      "status": "activo"
    },
    {
      "contrato": "196134131",
      "nombre": "PARRA POLO JAIRO ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "195917041",
      "nombre": "PEDRAZA CLAROS EFRAIN",
      "status": "activo"
    },
    {
      "contrato": "195905681",
      "nombre": "PEDROZA MONTENEGRO ERAZMO RAFAEL",
      "status": "activo"
    },
    {
      "contrato": "1128104321",
      "nombre": "PEDROZA OÑATE JESUS DAVID",
      "status": "activo"
    },
    {
      "contrato": "19602499",
      "nombre": "PEÑALOZA SANCHEZ YESIR",
      "status": "activo"
    },
    {
      "contrato": "11281090511",
      "nombre": "PEREA ARIZA ROBINSON ANTONIO",
      "status": "activo"
    },
    {
      "contrato": "852901791",
      "nombre": "PEREZ TATIS JULIO CESAR",
      "status": "activo"
    },
    {
      "contrato": "11281063262",
      "nombre": "PEREZ TERNERA DARIO JOSE",
      "status": "activo"
    },
    {
      "contrato": "771660711",
      "nombre": "PEREZ TERNERA MANUEL SALVADOR",
      "status": "activo"
    },
    {
      "contrato": "11281082232",
      "nombre": "PEREZ VERGARA CARLOS ANDRES",
      "status": "activo"
    },
    {
      "contrato": "11931415814",
      "nombre": "PERTUZ PADILLA CARLOS ANDRES",
      "status": "activo"
    },
    {
      "contrato": "1128105269",
      "nombre": "PERTUZ PADILLA JUAN CAMILO",
      "status": "activo"
    },
    {
      "contrato": "195986401",
      "nombre": "PERTUZ ROJANO JUAN CARLOS",
      "status": "activo"
    },
    {
      "contrato": "1193219499",
      "nombre": "PERTUZ SIERRA GEOVANY RAFAEL",
      "status": "activo"
    },
    {
      "contrato": "11932188302",
      "nombre": "PERTUZ SIERRA LEONEL ENRIQUE",
      "status": "inactivo"
    },
    {
      "contrato": "11932188303",
      "nombre": "PERTUZ SIERRA LEONEL ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "10031978731",
      "nombre": "PLATA PADILLA HUGO HERNESTO",
      "status": "activo"
    },
    {
      "contrato": "11281047631",
      "nombre": "PLATA PADILLA JOSE DE JESUS",
      "status": "activo"
    },
    {
      "contrato": "1193133416",
      "nombre": "POLO BOLAÑO JESUS DAVID",
      "status": "activo"
    },
    {
      "contrato": "11931387932",
      "nombre": "POLO BOLAÑO JULIO MIGUEL",
      "status": "activo"
    },
    {
      "contrato": "11931334231",
      "nombre": "POLO BOLAÑO PABLO JOSE",
      "status": "activo"
    },
    {
      "contrato": "195911841",
      "nombre": "POLO CASTRO ALBERTO LUIS",
      "status": "activo"
    },
    {
      "contrato": "11932190272",
      "nombre": "POLO JULIO JULIO RAFAEL",
      "status": "activo"
    },
    {
      "contrato": "1081786787",
      "nombre": "POLO PERTUZ EDGAR ALEXANDER",
      "status": "activo"
    },
    {
      "contrato": "771673431",
      "nombre": "POLO PERTUZ JOSE FRANCISCO",
      "status": "activo"
    },
    {
      "contrato": "195950751",
      "nombre": "POLO TAPIA LEANDRO",
      "status": "activo"
    },
    {
      "contrato": "77166522",
      "nombre": "POLO TAPIA WILFRIDO RAFAEL",
      "status": "activo"
    },
    {
      "contrato": "1134204057",
      "nombre": "POLO TAPIAS WILLIAN ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "1193218840",
      "nombre": "POTES LOPEZ JOSE LUIS",
      "status": "activo"
    },
    {
      "contrato": "11281085834",
      "nombre": "PUELLO CANTILLO DAIRO JOSE",
      "status": "activo"
    },
    {
      "contrato": "51771351",
      "nombre": "PUSHAINA EPIEYU LORENZO",
      "status": "activo"
    },
    {
      "contrato": "1128105771",
      "nombre": "QUIROZ GOMEZ FRANK DAVID",
      "status": "activo"
    },
    {
      "contrato": "11281119912",
      "nombre": "REYES JIMENEZ DIEGO ANDRES",
      "status": "activo"
    },
    {
      "contrato": "11281069341",
      "nombre": "REYES LEONES JAIME LUIS",
      "status": "activo"
    },
    {
      "contrato": "11932188631",
      "nombre": "REYES LEONES JUAN CARLOS",
      "status": "activo"
    },
    {
      "contrato": "1007095283",
      "nombre": "REYES OSPINO CARLOS JOSE",
      "status": "activo"
    },
    {
      "contrato": "852900511",
      "nombre": "REYES RODRIGUEZ ANDRES EMILIO",
      "status": "activo"
    },
    {
      "contrato": "196004431",
      "nombre": "REYES RODRIGUEZ HECTOR RUBIEL",
      "status": "activo"
    },
    {
      "contrato": "1128106167",
      "nombre": "RODRIGUEZ AHUMADA CARLOS ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "10651252022",
      "nombre": "RODRIGUEZ CERVANTES JORGE ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "771667523",
      "nombre": "RODRIGUEZ CERVANTES SAUL ALBERTO",
      "status": "inactivo"
    },
    {
      "contrato": "771667524",
      "nombre": "RODRIGUEZ CERVANTES SAUL ALBERTO",
      "status": "inactivo"
    },
    {
      "contrato": "1128105230",
      "nombre": "RODRIGUEZ RODRIGUEZ ROQUE JACINTO",
      "status": "activo"
    },
    {
      "contrato": "1193593333",
      "nombre": "RUDA SIERRA EDINSON MANUEL",
      "status": "activo"
    },
    {
      "contrato": "77165358",
      "nombre": "RUDAS CALVO EZEQUIEL",
      "status": "activo"
    },
    {
      "contrato": "1193043710",
      "nombre": "SARMIENTO PIÑA HAROLD DAVID",
      "status": "activo"
    },
    {
      "contrato": "196204381",
      "nombre": "SILVA TAPIAS CALIXTO JOSE",
      "status": "activo"
    },
    {
      "contrato": "126259671",
      "nombre": "SILVA TAPIAS JORGE ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "124105361",
      "nombre": "TATI CABARCAS ENOC SENEN",
      "status": "inactivo"
    },
    {
      "contrato": "10651339271",
      "nombre": "TATI DE LA ROSA ENOC SENEN",
      "status": "activo"
    },
    {
      "contrato": "19599883",
      "nombre": "TOVAR PATIÑO EDWIN HERNAN",
      "status": "activo"
    },
    {
      "contrato": "84107580",
      "nombre": "URIANA ABSHANA RAFAEL",
      "status": "activo"
    },
    {
      "contrato": "84107151",
      "nombre": "URIANA ARPUSHANA JUAN",
      "status": "activo"
    },
    {
      "contrato": "84108624",
      "nombre": "URIANA ARPUSHANA MARTIN",
      "status": "activo"
    },
    {
      "contrato": "195951551",
      "nombre": "VALENCIA VIZCAINO HUMBERTO JOSE",
      "status": "activo"
    },
    {
      "contrato": "11932114136",
      "nombre": "VARELA OSPINO DAVID ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "195844081",
      "nombre": "VASQUEZ PLAZAS LUIS ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "11342043811",
      "nombre": "VERGARA GONZALEZ JUAN CARLOS",
      "status": "activo"
    },
    {
      "contrato": "1128105341",
      "nombre": "VIDES BERDUGO JAIR ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "195967011",
      "nombre": "VILLA CALVO EDWIN JESUS",
      "status": "activo"
    },
    {
      "contrato": "85261916",
      "nombre": "VILORIA SERPA YESID JOSE",
      "status": "activo"
    },
    {
      "contrato": "1193538182",
      "nombre": "VIZCAINO DITA OMAR DAVID",
      "status": "inactivo"
    },
    {
      "contrato": "11935381825",
      "nombre": "VIZCAINO DITA OMAR DAVID",
      "status": "activo"
    },
    {
      "contrato": "75972185",
      "nombre": "VIZCAINO PALLARES JOSE LUIS",
      "status": "activo"
    },
    {
      "contrato": "19590629",
      "nombre": "VIZCAINO SALGADO LUIS ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "364545961",
      "nombre": "VIZCAINO SALGADO LUZ ELENA",
      "status": "activo"
    },
    {
      "contrato": "1193208823",
      "nombre": "VIZCAINO TORRES IVAN DAVID",
      "status": "activo"
    },
    {
      "contrato": "10651230943",
      "nombre": "YEPES DE LEON MARIO ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "1128105136",
      "nombre": "OROZCO NAVARRLO ALEJANDRO FIDEL",
      "status": "activo"
    },
    {
      "contrato": "11931547232",
      "nombre": "OYOLA MADRID CARLOS ANDRES",
      "status": "activo"
    },
    {
      "contrato": "11281072303",
      "nombre": "JIMENEZ ESCORCIA EDUAR FRANCISCO",
      "status": "activo"
    },
    {
      "contrato": "10031969051",
      "nombre": "CHARRIS MARTINEZ JEAN CARLOS",
      "status": "activo"
    }
  ]
}
</file>

<file path="server/routes/auditoria.js">
const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');
const { parsearVigilancia, parsearNomina } = require('../services/excelParser');
const { obtenerDiasCalendario, obtenerDiasLaborales } = require('../utils/dateUtils');
const { calcularMatrizLaboral, generarCSVMatriz } = require('../services/matrixService');
const Empleado = require('../models/Empleado');

const upload = multer({ dest: 'uploads/' });

router.post('/analizar', upload.fields([{ name: 'vigilancia' }, { name: 'nomina' }]), async (req, res) => {
  try {
    const { fechaInicio, fechaFin, anio } = req.body;
    if (!req.files?.vigilancia || !req.files?.nomina) {
      return res.status(400).json({ error: 'Se requieren ambos archivos Excel' });
    }

    const maestro = await Empleado.find({ status: 'activo' });
    const vigRes = parsearVigilancia(req.files.vigilancia[0].path);
    const nomRes = parsearNomina(req.files.nomina[0].path);

    const novs = vigRes.data;
    const novNames = vigRes.names;
    const acts = nomRes.data;
    const actNames = nomRes.names;

    // 1. DETECCIÓN DE CONFLICTOS
    const conflictos = [];
    for (const contrato in novs) {
      const actividades = acts[contrato] || [];
      const contratoLimpio = contrato.trim();
      const empleado = maestro.find(emp => String(emp.contrato || '').trim() === contratoLimpio);
      const nombre = empleado ? empleado.nombre : (actNames[contrato] || novNames[contrato] || 'Desconocido');

      novs[contrato].forEach(n => {
        if (fechaInicio && fechaFin && (n.fecha < fechaInicio || n.fecha > fechaFin)) {
          return;
        }
        const act = actividades.find(a => a.fecha === n.fecha);
        if (act) {
          conflictos.push({ contrato, nombre, fecha: n.fecha, novedad: n.tipo, actividad: act.concepto });
        }
      });
    }

    // 2. DETECCIÓN DE EMPLEADOS FALTANTES
    const contratosEnArchivos = new Set([...Object.keys(novs), ...Object.keys(acts)]);
    const faltantes = maestro.filter(emp => !contratosEnArchivos.has(emp.contrato));

    // 3. DETECCIÓN DE EMPLEADOS NO REGISTRADOS
    const contratosMaestro = new Set(maestro.map(emp => emp.contrato));
    const noRegistrados = [];
    for (const contrato of contratosEnArchivos) {
      if (!contratosMaestro.has(contrato)) {
        const nombre = actNames[contrato] || novNames[contrato] || 'Nombre no encontrado en archivos';
        noRegistrados.push({ contrato, nombre });
      }
    }

    // 4. DETECCIÓN DE INACTIVIDAD
    let inactivos = [];
    if (fechaInicio && fechaFin && anio) {
      const diasLaborales = obtenerDiasLaborales(fechaInicio, fechaFin, parseInt(anio));
      maestro.forEach(emp => {
        const empNovs = novs[emp.contrato] || [];
        const empActs = acts[emp.contrato] || [];
        const fechasConRegistro = new Set([...empNovs.map(n => n.fecha), ...empActs.map(a => a.fecha)]);
        const diasSinRegistro = diasLaborales.filter(dia => !fechasConRegistro.has(dia));
        if (diasSinRegistro.length > 0) {
          inactivos.push({ contrato: emp.contrato, nombre: emp.nombre, dias_faltantes: diasSinRegistro });
        }
      });
    }

    // 5. DETECCIÓN DE MÚLTIPLES ACTIVIDADES (> 2 el mismo día)
    const multiples = [];
    for (const contrato in acts) {
      const actividades = acts[contrato];
      const contratoLimpio = contrato.trim();
      const empleado = maestro.find(emp => String(emp.contrato || '').trim() === contratoLimpio);
      const nombre = empleado ? empleado.nombre : (actNames[contrato] || 'Desconocido');

      const conteoPorFecha = {};
      actividades.forEach(act => {
        if (!conteoPorFecha[act.fecha]) conteoPorFecha[act.fecha] = [];
        conteoPorFecha[act.fecha].push(act.concepto);
      });

      for (const fecha in conteoPorFecha) {
        if (conteoPorFecha[fecha].length > 2) {
          multiples.push({
            contrato,
            nombre,
            fecha,
            actividades: conteoPorFecha[fecha]
          });
        }
      }
    }

    // 6. RESUMEN DE DETALLES Y REFERENCIAS
    const resumenDetallesMap = {};
    for (const contrato in acts) {
      const actividades = acts[contrato];
      actividades.forEach(act => {
        const concepto = act.concepto || 'Sin Concepto';
        const detalle = act.detalle || 'Sin Detalle';
        const ref = act.referencia || 'S/R';
        const key = `${concepto}:::${detalle}`;

        if (!resumenDetallesMap[key]) {
          resumenDetallesMap[key] = {
            concepto: concepto,
            detalle: detalle,
            refs: new Set()
          };
        }
        resumenDetallesMap[key].refs.add(ref);
      });
    }

    const resumenDetalles = Object.values(resumenDetallesMap).map(item => ({
      concepto: item.concepto,
      detalle: item.detalle,
      referencias: Array.from(item.refs).sort((a, b) => {
        const aNum = parseInt(a);
        const bNum = parseInt(b);
        if (!isNaN(aNum) && !isNaN(bNum)) return aNum - bNum;
        return a.localeCompare(b);
      }).join(', ')
    }));

    // 7. MATRIZ LABORAL
        const diasLaborales = (fechaInicio && fechaFin && anio)
      ? obtenerDiasLaborales(fechaInicio, fechaFin, parseInt(anio))
      : [];
    const diasMatriz = (fechaInicio && fechaFin)
      ? obtenerDiasCalendario(fechaInicio, fechaFin)
      : [];

    const todosEmpleados = [];
    maestro.forEach(emp => todosEmpleados.push({ contrato: emp.contrato, nombre: emp.nombre }));

    for (const contrato in acts) {
      if (!contratosMaestro.has(contrato)) {
        todosEmpleados.push({
          contrato,
          nombre: actNames[contrato] || novNames[contrato] || 'Desconocido'
        });
      }
    }
    for (const contrato in novs) {
      if (!contratosMaestro.has(contrato) && !acts[contrato]) {
        todosEmpleados.push({
          contrato,
          nombre: novNames[contrato] || 'Desconocido'
        });
      }
    }

    const matriz = calcularMatrizLaboral(todosEmpleados, diasMatriz, acts, novs, parseInt(anio));

    res.json({
      resumen: {
        total_conflictos: conflictos.length,
        total_faltantes: faltantes.length,
        total_inactivos: inactivos.length,
        total_no_registrados: noRegistrados.length,
        total_multiples: multiples.length
      },
      conflictos,
      faltantes,
      inactivos,
      noRegistrados,
      multiples,
      resumenDetalles,
      matriz,
      diasLaborales: diasMatriz
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.post('/exportar-matriz', (req, res) => {
  try {
    const { result } = req.body;
    if (!result || !result.matriz || !result.diasLaborales) {
      return res.status(400).json({ error: 'Datos insuficientes para exportar la matriz' });
    }

    const csvContent = generarCSVMatriz(result.matriz, result.diasLaborales);

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="matriz_laboral.csv"');
    res.status(200).send(csvContent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al generar el CSV de la matriz' });
  }
});

router.post('/exportar', (req, res) => {
  try {
    const { result } = req.body;
    if (!result) return res.status(400).json({ error: 'No se proporcionaron datos para exportar' });

    const wb = xlsx.utils.book_new();

    const sheets = [
      { name: 'Conflictos', data: result.conflictos },
      { name: 'Faltantes', data: result.faltantes },
      { name: 'Inactivos', data: result.inactivos.map(i => ({ ...i, dias_faltantes: i.dias_faltantes.join(', ') })) },
      { name: 'No Registrados', data: result.noRegistrados },
      { name: 'Multiples Actividades', data: result.multiples.map(m => ({ ...m, actividades: m.actividades.join(', ') })) },
      { name: 'Resumen Detalles', data: result.resumenDetalles },
    ];

    sheets.forEach(sheet => {
      const ws = xlsx.utils.json_to_sheet(sheet.data);
      xlsx.utils.book_append_sheet(wb, ws, sheet.name);
    });

    const buf = xlsx.write(wb, { type: 'buffer', bookType: 'xlsx' });
    res.setHeader('Content-Disposition', 'attachment; filename="auditoria.xlsx"');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(buf);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al generar el archivo Excel' });
  }
});

module.exports = router;
</file>

<file path="server/routes/empleados.js">
const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { parsearMaestroEmpleados } = require('../services/csvParser');
const { normalizeContract } = require('../utils/stringUtils');
const Empleado = require('../models/Empleado');

const upload = multer({ dest: 'uploads/' });
const DB_PATH = path.join(__dirname, '../models/empleados.json');

// Auxiliar para migrar datos de JSON a MongoDB si la colección está vacía
const migrateIfNeeded = async () => {
  try {
    const count = await Empleado.countDocuments();
    if (count === 0 && fs.existsSync(DB_PATH)) {
      console.log('Migrando datos de JSON a MongoDB...');
      const data = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
      if (data.empleados && data.empleados.length > 0) {
        await Empleado.insertMany(data.empleados);
        console.log(`Migración completada: ${data.empleados.length} empleados importados.`);
      }
    }
  } catch (e) {
    console.error('Error durante la migración:', e);
  }
};

// Ejecutar migración al cargar las rutas
migrateIfNeeded();

// POST /api/empleados/cargar
router.post('/cargar', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No se subió ningún archivo' });
    
    const { empleados, warnings } = parsearMaestroEmpleados(req.file.path);
    
    // Usamos bulkWrite para eficiencia
    const operations = empleados.map(emp => ({
      updateOne: {
        filter: { contrato: emp.contrato },
        update: { $set: emp },
        upsert: true
      }
    }));

    await Empleado.bulkWrite(operations);
    
    fs.unlinkSync(req.file.path);
    res.json({ 
      message: 'Maestro de empleados cargado con éxito', 
      total: empleados.length,
      warnings: warnings 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/empleados
router.get('/', async (req, res) => {
  try {
    const empleados = await Empleado.find({});
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener empleados' });
  }
});

// POST /api/empleados (Agregar un solo empleado)
router.post('/', async (req, res) => {
  try {
    const { nombre, contrato } = req.body;
    if (!nombre || !contrato) {
      return res.status(400).json({ error: 'El nombre y el contrato son requeridos' });
    }

    const normalizedContrato = normalizeContract(contrato);
    if (!normalizedContrato) {
      return res.status(400).json({ error: 'El contrato no tiene un formato válido' });
    }

    const exists = await Empleado.findOne({ contrato: normalizedContrato });
    if (exists) {
      return res.status(400).json({ error: 'El contrato ya existe en el sistema' });
    }

    const nuevoEmpleado = new Empleado({ 
      contrato: normalizedContrato, 
      nombre: nombre.trim(), 
      status: 'activo' 
    });

    await nuevoEmpleado.save();
    res.status(201).json({ message: 'Empleado agregado con éxito', empleado: nuevoEmpleado });
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el empleado' });
  }
});

// PUT /api/empleados/:contrato (Actualizar estado o nombre)
router.put('/:contrato', async (req, res) => {
  const { contrato } = req.params;
  const { status, nombre } = req.body;
  
  try {
    const updateData = {};
    if (status) updateData.status = status;
    if (nombre) updateData.nombre = nombre;

    const emp = await Empleado.findOneAndUpdate(
      { contrato },
      { $set: updateData },
      { new: true }
    );

    if (!emp) return res.status(404).json({ error: 'Empleado no encontrado' });
    res.json({ message: 'Empleado actualizado', empleado: emp });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el empleado' });
  }
});

// DELETE /api/empleados/:contrato
router.delete('/:contrato', async (req, res) => {
  const { contrato } = req.params;
  try {
    const result = await Empleado.deleteOne({ contrato });
    if (result.deletedCount === 0) return res.status(404).json({ error: 'Empleado no encontrado' });
    res.json({ message: 'Empleado eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el empleado' });
  }
});

module.exports = router;
</file>

<file path="server/services/csvParser.js">
const fs = require('fs');
const { COLUMNAS_EMPLEADO } = require('../config/constants');
const { normalizeContract } = require('../utils/stringUtils');

const parsearMaestroEmpleados = (filePath) => {
  const contenido = fs.readFileSync(filePath, 'utf8');
  const lineas = contenido.split(/\r?\n/).filter(l => l.trim() !== '');
  
  if (lineas.length < 2) throw new Error('El archivo CSV está vacío o no tiene datos');

  const encabezados = lineas[0].split(',').map(h => h.trim().replace(/"/g, ''));
  
  const idxContrato = encabezados.indexOf('Contrato');
  const idxNombre = encabezados.indexOf('Nombre');

  if (idxContrato === -1 || idxNombre === -1) {
    throw new Error(`El CSV debe tener las columnas: ${COLUMNAS_EMPLEADO.join(', ')}`);
  }

  const empleados = [];
  const contratosVistos = new Set();
  const warnings = [];

  for (let i = 1; i < lineas.length; i++) {
    const columnas = lineas[i].split(',').map(c => c.trim().replace(/"/g, ''));
    const contratoRaw = columnas[idxContrato];
    const nombre = columnas[idxNombre];

    if (!contratoRaw || !nombre) continue;
    
    if (contratoRaw.toLowerCase().includes('e+')) {
      warnings.push(`Línea ${i + 1}: El contrato ${contratoRaw} está en notación científica. Se recomienda exportar como Texto.`);
    }

    const contrato = normalizeContract(contratoRaw);
    if (!contrato) continue;
    if (contratosVistos.has(contrato)) continue;

    // Asignar estado activo por defecto
    empleados.push({ contrato, nombre, status: 'activo' });
    contratosVistos.add(contrato);
  }

  return { empleados, warnings };
};

module.exports = { parsearMaestroEmpleados };
</file>

<file path="server/services/excelParser.js">
const xlsx = require('xlsx');
const { parsearFechaExcel, formatearFechaISO } = require('../utils/dateUtils');
const { TIPOS_VALIDOS_VIGILANCIA } = require('../config/constants');
const { normalizeContract } = require('../utils/stringUtils');

const normalizeKey = (key) =>
  String(key || '')
    .toUpperCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^A-Z0-9]/g, '')
    .trim();

const buildHeaderMap = (headerRow) =>
  headerRow.reduce((acc, cell, index) => {
    const key = normalizeKey(cell);
    if (key) acc[key] = index;
    return acc;
  }, {});

const parsearVigilancia = (path) => {
  const wb = xlsx.readFile(path);
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const matrix = xlsx.utils.sheet_to_json(sheet, { header: 1, raw: false });

  if (matrix.length === 0) throw new Error('El archivo de Vigilancia está vacío');

  let headerRowIdx = -1;
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i].map(cell => normalizeKey(String(cell || '')));
    if (row.includes('IDCONTRATO') && row.includes('FECHAINICIO')) {
      headerRowIdx = i;
      break;
    }
  }

  if (headerRowIdx === -1) throw new Error('No se encontró la fila de encabezados en Vigilancia (ID_CONTRATO y FECHA_INICIO)');

  const headerRow = matrix[headerRowIdx];
  const headerMap = buildHeaderMap(headerRow);

  const cols = {
    contrato: headerMap.IDCONTRATO,
    nombre: headerMap.NOMBRETRABAJADOR,
    fechaInicio: headerMap.FECHAINICIO,
    fechaFin: headerMap.FECHAFIN,
    tipo: headerMap.IDNOVEDAD
  };

  const novedades = {};
  const names = {};

  for (let i = headerRowIdx + 1; i < matrix.length; i++) {
    const row = matrix[i];
    if (!row || row.length === 0) continue;

    const contratoRaw = row[cols.contrato] ?? row[headerMap.IDCONTRATO];
    const contrato = normalizeContract(String(contratoRaw || ''));
    const nombre = String((row[cols.nombre] ?? row[headerMap.NOMBRETRABAJADOR]) || '').trim();
    const fechaInicioRaw = row[cols.fechaInicio] ?? row[headerMap.FECHAINICIO];
    const fechaInicio = fechaInicioRaw ? parsearFechaExcel(fechaInicioRaw) : null;
    const fechaFinRaw = row[cols.fechaFin] ?? row[headerMap.FECHAFIN];
    const fechaFin = fechaFinRaw ? parsearFechaExcel(fechaFinRaw) : fechaInicio;
    const tipo = String((row[cols.tipo] ?? row[headerMap.IDNOVEDAD]) || '').toUpperCase().trim();

    if (contrato && fechaInicio && TIPOS_VALIDOS_VIGILANCIA.some(t => tipo.includes(t))) {
      if (!novedades[contrato]) novedades[contrato] = [];
      if (nombre) names[contrato] = nombre;
      const actual = new Date(fechaInicio);
      const limite = fechaFin || fechaInicio;
      while (actual <= limite) {
        novedades[contrato].push({ fecha: formatearFechaISO(actual), tipo: tipo });
        actual.setDate(actual.getDate() + 1);
      }
    }
  }
  return { data: novedades, names };
};

const parsearNomina = (path) => {
  const wb = xlsx.readFile(path);
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const matrix = xlsx.utils.sheet_to_json(sheet, { header: 1, raw: false });

  if (matrix.length === 0) throw new Error('El archivo de Nómina está vacío');

  let headerRowIdx = -1;
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i].map(cell => normalizeKey(String(cell || '')));
    if (row.includes('IDCONTRATO') && row.includes('FECHA')) {
      headerRowIdx = i;
      break;
    }
  }

  if (headerRowIdx === -1) throw new Error('No se encontró la fila de encabezados en Nómina (ID_CONTRATO y FECHA)');

  const headerRow = matrix[headerRowIdx];
  const headerMap = buildHeaderMap(headerRow);

  const cols = {
    contrato: headerMap.IDCONTRATO,
    nombre: headerMap.NOMBRETRABAJADOR,
    fecha: headerMap.FECHA,
    concepto: headerMap.CONCEPTODV,
    detalle: headerMap.DETALLEACTIVIDAD,
    ref: headerMap.REFERENCIA,
    digitoVerificacion: headerMap.DIGITOVERIFICACION
  };

  const actividades = {};
  const names = {};

  for (let i = headerRowIdx + 1; i < matrix.length; i++) {
    const row = matrix[i];
    if (!row || row.length === 0) continue;

    const contratoRaw = row[cols.contrato] ?? row[headerMap.IDCONTRATO];
    const contrato = normalizeContract(String(contratoRaw || ''));
    const nombre = String((row[cols.nombre] ?? row[headerMap.NOMBRETRABAJADOR]) || '').trim();
    const fechaRaw = row[cols.fecha] ?? row[headerMap.FECHA];
    const fecha = fechaRaw ? parsearFechaExcel(fechaRaw) : null;
    const nombreConcepto = String(
      [
        row[cols.concepto],
        row[headerMap.CONCEPTODV],
        row[cols.digitoVerificacion],
        row[headerMap.DIGITOVERIFICACION],
        row[headerMap.DIGITOVERIFICADOR]
      ].find(valor => String(valor || '').trim()) || ''
    ).trim() || 'Sin Concepto';
    const descripcion = String((row[cols.detalle] ?? row[headerMap.DETALLEACTIVIDAD]) || '').trim() || 'Sin Detalle';
    const referencia = String((row[cols.ref] ?? row[headerMap.REFERENCIA]) || '').trim() || 'S/R';

    if (contrato && fecha) {
      if (!actividades[contrato]) actividades[contrato] = [];
      if (nombre) names[contrato] = nombre;
      actividades[contrato].push({
        fecha: formatearFechaISO(fecha),
        concepto: nombreConcepto,
        detalle: descripcion,
        referencia: referencia
      });
    }
  }

  return { data: actividades, names };
};

module.exports = { parsearVigilancia, parsearNomina };
</file>

<file path="server/services/matrixService.js">
const xlsx = require('xlsx');
const { obtenerDiasLaborales } = require('../utils/dateUtils');

/**
 * Calcula la matriz laboral aplicando reglas diferenciadas para administrativos y operativos.
 * @param {Array} todosEmpleados - Lista de empleados (Maestro + No Registrados)
 * @param {Array} diasLaborales - Lista de fechas en formato ISO (YYYY-MM-DD)
 * @param {Object} acts - Actividades por contrato { contrato: [ {fecha, concepto...}, ... ] }
 * @param {Object} novs - Novedades por contrato { contrato: [ {fecha, tipo...}, ... ] }
 */
const calcularMatrizLaboral = (todosEmpleados, diasLaborales, acts, novs, anio = null) => {
  const matriz = [];

  todosEmpleados.forEach(emp => {
    const empActs = acts[emp.contrato] || [];
    const empNovs = novs[emp.contrato] || [];
    const conteoDias = {};

    // Identificar si es administrativo: Buscamos el código "DV01" en el Concepto de sus actividades
    const isAdmin = empActs.some(act => act.concepto && act.concepto.toUpperCase().includes('DV01'));

    diasLaborales.forEach(dia => {
      const actividadesDia = empActs.filter(a => a.fecha === dia);
      const actCount = actividadesDia.length;

      const novedadesDia = empNovs.filter(n => n.fecha === dia);
      const tiposNovedades = [...new Set(novedadesDia.map(n => n.tipo))].join(', ');

      const [anioDia, mesDia, diaMes] = dia.split('-').map(Number);
      const ultimoDiaMes = new Date(anioDia, mesDia, 0).getDate();
      const esUltimoDiaQuincena = diaMes === 15 || diaMes === ultimoDiaMes;

      let cellValue = '';

      if (isAdmin) {
        // Lógica Administrativos: Siempre debe incluir 'ADM'.
        // Excepción para la quincena administrativa: en el cierre de quincena
        // se reporta la cantidad real de días laborales de la quincena.
        const parts = [];
        const cantidadReporte = (isAdmin && esUltimoDiaQuincena && anio)
          ? (diaMes === 15
              ? 15
              : (() => {
                  const diasTotales = diaMes - 15;
                  const esDiaLaboralFinal = obtenerDiasLaborales(dia, dia, anio).length > 0;
                  return esDiaLaboralFinal ? diasTotales : diasTotales - 1;
                })())
          : actCount;

        if (cantidadReporte > 0) parts.push(cantidadReporte);
        parts.push('ADM');
        if (tiposNovedades) parts.push(tiposNovedades);
        cellValue = parts.join(', ');
      } else {
        // Lógica Operativos
        const parts = [];
        if (actCount > 0) parts.push(actCount);
        if (tiposNovedades) parts.push(tiposNovedades);
        cellValue = parts.join(', ');
      }
      
      if (cellValue !== '') {
        conteoDias[dia] = cellValue;
      }
    });

    matriz.push({
      contrato: emp.contrato,
      nombre: emp.nombre,
      conteo: conteoDias
    });
  });

  return matriz;
};

/**
 * Genera el contenido CSV de la matriz laboral.
 */
const generarCSVMatriz = (matriz, diasLaborales) => {
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  const formattedDays = diasLaborales.map(date => {
    const [y, m, d] = date.split('-');
    return `${d} ${months[parseInt(m) - 1]}`;
  });

  const header = ['Nombre', ...formattedDays].join(',');
  const rows = matriz.map(emp => {
    const rowValues = diasLaborales.map(date => {
      const val = emp.conteo[date] || '';
      return String(val).includes(',') ? `"${val}"` : val;
    });
    return [`"${emp.nombre}"`, ...rowValues].join(',');
  });

  return [header, ...rows].join('\n');
};

module.exports = { calcularMatrizLaboral, generarCSVMatriz };
</file>

<file path="server/utils/dateUtils.js">
const { FESTIVOS_COLOMBIA } = require('../config/constants');

const parsearFechaExcel = (valor) => {
  if (!valor) return null;
  if (typeof valor === 'number') {
    const excelEpoch = new Date(1900, 0, 1);
    return new Date(excelEpoch.getTime() + (valor - 1) * 24 * 60 * 60 * 1000);
  }
  if (valor instanceof Date) return valor;
  const date = new Date(valor);
  return isNaN(date) ? null : date;
};

const formatearFechaISO = (date) => {
  if (!date) return null;
  const d = date instanceof Date ? date : new Date(date);
  const anio = d.getFullYear();
  const mes = String(d.getMonth() + 1).padStart(2, '0');
  const dia = String(d.getDate()).padStart(2, '0');
  return `${anio}-${mes}-${dia}`;
};

const esFestivo = (fecha, anio) => {
  const f = fecha instanceof Date ? fecha : new Date(fecha);
  const mes = f.getMonth() + 1;
  const dia = f.getDate();
  const festivos = FESTIVOS_COLOMBIA[anio] || [];
  return festivos.some(f => f.mes === mes && f.dia === dia);
};

const esDiaLaboral = (fecha, anio) => {
  const d = fecha instanceof Date ? fecha : new Date(fecha);
  const diaSemana = d.getDay();
  if (diaSemana === 0) return false; // Domingo
  if (diaSemana === 6) return true;  // Sábado
  return !esFestivo(d, anio);
};

const obtenerDiasCalendario = (inicio, fin) => {
  const dias = [];
  const [anioI, mesI, diaI] = inicio.split('-').map(Number);
  const [anioF, mesF, diaF] = fin.split('-').map(Number);

  const actual = new Date(anioI, mesI - 1, diaI);
  const finale = new Date(anioF, mesF - 1, diaF);

  actual.setHours(0, 0, 0, 0);
  finale.setHours(0, 0, 0, 0);

  while (actual <= finale) {
    dias.push(formatearFechaISO(actual));
    actual.setDate(actual.getDate() + 1);
  }

  return dias;
};

const obtenerDiasLaborales = (inicio, fin, anio) => {
  const dias = [];
  
  // Parseo manual para evitar el desplazamiento de zona horaria (UTC vs Local)
  const [anioI, mesI, diaI] = inicio.split('-').map(Number);
  const [anioF, mesF, diaF] = fin.split('-').map(Number);
  
  const actual = new Date(anioI, mesI - 1, diaI);
  const finale = new Date(anioF, mesF - 1, diaF);
  
  actual.setHours(0, 0, 0, 0);
  finale.setHours(0, 0, 0, 0);
  
  while (actual <= finale) {
    if (esDiaLaboral(actual, anio)) {
      dias.push(formatearFechaISO(actual));
    }
    actual.setDate(actual.getDate() + 1);
  }
  return dias;
};

module.exports = {
  parsearFechaExcel,
  formatearFechaISO,
  esFestivo,
  esDiaLaboral,
  obtenerDiasCalendario,
  obtenerDiasLaborales
};
</file>

<file path="server/utils/stringUtils.js">
const normalizeContract = (val) => {
  if (!val) return '';
  let s = String(val).trim();
  
  // Si ya es una cadena de dígitos pura, la devolvemos tal cual para evitar cualquier transformación
  if (/^\d+$/.test(s)) {
    return s;
  }

  // Si el valor está en notación científica (ej. 1.00427E+11)
  if (s.toLowerCase().includes('e+')) {
    const num = Number(s);
    if (!isNaN(num)) {
      // Convertimos a string evitando la notación científica. 
      // Nota: Si Excel ya redondeó el valor, la precisión se perdió en el archivo.
      s = BigInt(Math.round(num)).toString();
    }
  }
  
  // Quitar cualquier carácter no numérico por seguridad
  return s.replace(/\D/g, '');
};

module.exports = { normalizeContract };

module.exports = { normalizeContract };
</file>

<file path="server/.env.example">
DATABASE_URL=postgres://postgres:password@db:5432/novedad_db
PORT=3001
NODE_ENV=development
</file>

<file path="server/index.js">
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const connectDB = require('./config/db');

const empleadosRoutes = require('./routes/empleados');
const auditoriaRoutes = require('./routes/auditoria');

const app = express();

// Conectar a la base de datos
connectDB();

// Permitir CORS explícitamente (acepta cualquier origen en producción; ajustar si se requiere)
app.use(cors({ origin: '*' }));
app.options('*', cors());

// Logger simple de peticiones entrantes (muestra método, ruta y origen)
app.use((req, res, next) => {
  try {
    const origin = req.headers.origin || '-';
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} Origin:${origin}`);
  } catch (e) {
    // no bloquear en caso de error
  }
  next();
});
app.use(express.json({ limit: '50mb' }));

// Asegurar carpeta uploads
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

// Rutas
app.use('/api/empleados', empleadosRoutes);
app.use('/api/auditoria', auditoriaRoutes);

app.get('/api/test', (req, res) => res.json({ status: 'OK' }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
</file>

<file path="server/package.json">
{
  "name": "server",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongoose": "^9.6.2",
    "multer": "^1.4.5-lts.1",
    "pg": "^8.11.3",
    "xlsx": "^0.18.5"
  }
}
</file>

<file path="server/servercopy.js">
require('dotenv').config();
const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();

// Configuración de CORS - PERMITIR TODOS LOS ORÍGENES
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Crear carpeta de uploads si no existe
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configuración para subida de archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// 🚀 ENDPOINT: Cargar y Procesar Archivos
app.post('/api/cargar', upload.fields([{ name: 'vigilancia' }, { name: 'nomina' }]), async (req, res) => {
  console.log('📥 Recibiendo solicitud en /api/cargar');
  console.log('Archivos recibidos:', req.files);
  
  try {
    if (!req.files || !req.files.vigilancia || !req.files.nomina) {
      console.error('❌ Error: No se recibieron ambos archivos');
      return res.status(400).json({ error: 'Se requieren ambos archivos Excel' });
    }

    const vigilanciaPath = req.files.vigilancia[0].path;
    const nominaPath = req.files.nomina[0].path;
    
    console.log('📄 Archivo Vigilancia:', vigilanciaPath);
    console.log('📄 Archivo Nómina:', nominaPath);

    // Leer archivos Excel
    const wbVigilancia = xlsx.readFile(vigilanciaPath);
    const wbNomina = xlsx.readFile(nominaPath);

    // Obtener datos de la primera hoja de cada archivo
    const datosVigilancia = xlsx.utils.sheet_to_json(wbVigilancia.Sheets[wbVigilancia.SheetNames[0]]);
    const datosNomina = xlsx.utils.sheet_to_json(wbNomina.Sheets[wbNomina.SheetNames[0]]);

    console.log(`Filas leídas Vigilancia: ${datosVigilancia.length}`);
    console.log(`Filas leídas Nómina: ${datosNomina.length}`);

    // Estructuras para guardar en memoria
    const trabajadores = new Map(); // Cédula -> {nombre, area}
    const novedadesMap = {};        // Cédula -> [ {fecha, tipo} ]
    const actividadMap = {};        // Cédula -> [ {fecha, concepto, valor} ]

    // Función para limpiar cédula
    const limpiarCedula = (val) => String(val).trim().replace(/\D/g, '');

    // Función para convertir fecha de Excel
    const excelSerialToDate = (excelDate) => {
      if (typeof excelDate === 'string') {
        const parsed = new Date(excelDate);
        if (!isNaN(parsed)) return parsed;
      }
      if (typeof excelDate === 'number') {
        const excelEpoch = new Date(1900, 0, 1);
        const jsDate = new Date(excelEpoch.getTime() + (excelDate - 1) * 24 * 60 * 60 * 1000);
        return jsDate;
      }
      if (excelDate instanceof Date) return excelDate;
      return new Date(excelDate);
    };

    // Función para verificar si es fin de semana
    const esFinDeSemana = (date) => {
      const d = new Date(date);
      return d.getDay() === 0 || d.getDay() === 6;
    };

    // Función para obtener fechas de un rango
    const obtenerFechasRango = (inicio, fin) => {
    const fechas = [];
    
    // Función auxiliar para parsear fechas de Excel
    const parsearFecha = (fechaValor) => {
        if (!fechaValor) return null;
        
        // Si es un número (serial de Excel)
        if (typeof fechaValor === 'number') {
            const excelEpoch = new Date(1900, 0, 1);
            const jsDate = new Date(excelEpoch.getTime() + (fechaValor - 1) * 24 * 60 * 60 * 1000);
            return jsDate;
        }
        
        // Si ya es un objeto Date
        if (fechaValor instanceof Date) {
            return fechaValor;
        }
        
        // Si es string, intentar diferentes formatos
        const str = String(fechaValor).trim();
        
        // Formato: "4/1/26" o "4/1/2026"
        const matchMDY = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/);
        if (matchMDY) {
            const [, mes, dia, anio] = matchMDY;
            const anioCompleto = anio.length === 2 ? `20${anio}` : anio;
            return new Date(parseInt(anioCompleto), parseInt(mes) - 1, parseInt(dia));
        }
        
        // Formato: "1-Apr-26" o "1-Apr-2026"
        const matchDMY = str.match(/^(\d{1,2})-([A-Za-z]{3})-(\d{2,4})$/);
        if (matchDMY) {
            const [, dia, mesStr, anio] = matchDMY;
            const meses = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
            const mes = meses[mesStr.toLowerCase()];
            const anioCompleto = anio.length === 2 ? `20${anio}` : anio;
            return new Date(parseInt(anioCompleto), mes, parseInt(dia));
        }
        
        // Intentar parseo normal de Date como último recurso
        const date = new Date(str);
        if (!isNaN(date.getTime())) {
            return date;
        }
        
        return null;
    };
    
    const fechaInicio = parsearFecha(inicio);
    const fechaFin = parsearFecha(fin);
    
    if (!fechaInicio || !fechaFin) {
        console.error('Error al parsear fechas:', { inicio, fin });
        return fechas;
    }
    
    // Normalizar a medianoche hora local
    fechaInicio.setHours(0, 0, 0, 0);
    fechaFin.setHours(0, 0, 0, 0);
    
    let actual = new Date(fechaInicio);
    
    while (actual <= fechaFin) {
        const anio = actual.getFullYear();
        const mes = String(actual.getMonth() + 1).padStart(2, '0');
        const dia = String(actual.getDate()).padStart(2, '0');
        
        fechas.push(`${anio}-${mes}-${dia}`);
        
        actual.setDate(actual.getDate() + 1);
    }
    
    return fechas;
};

    // 1. Procesar VIGILANCIA
    console.log('\n=== PROCESANDO VIGILANCIA ===');
    datosVigilancia.forEach((fila, idx) => {
      const cedula = limpiarCedula(fila.CEDULA);
      const tipo = String(fila['MOT.'] || '').toUpperCase();
      const fechaInicio = fila['FECHA INICIO'];
      const fechaFin = fila['FECHA TERMI'] || fila['FECHA INICIO'];
      const observacion = fila.OBSERVACION || '';

      const tiposValidos = ['EMG','AT','PERM','INAS','LLUTO','LEY MARÍA','LEY MARIA'];
      const esValida = cedula && fechaInicio && tiposValidos.some(t => tipo.includes(t));

      if (esValida) {
        trabajadores.set(cedula, { nombre: fila.TRABAJADOR, area: fila['AREA TRABAJO'] });
        if (!novedadesMap[cedula]) novedadesMap[cedula] = [];

        const fechas = obtenerFechasRango(fechaInicio, fechaFin);
        console.log(`  [Fila ${idx}] Cedula: ${cedula} | Nombre: ${fila.TRABAJADOR} | Tipo: ${tipo}`);
        
        fechas.forEach(f => {
          novedadesMap[cedula].push({
            fecha: f,
            tipo: tipo.includes('LEY') ? 'LEY_MARIA' : tipo,
            observacion: observacion
          });
        });
      }
    });

    // 2. Procesar NÓMINA
    console.log('\n=== PROCESANDO NÓMINA ===');
    datosNomina.forEach((fila, idx) => {
      const cedula = limpiarCedula(fila.Contrato || fila.Cedula);
      const fecha = fila.Fecha;
      const codigo = fila['Código'] || fila.Codigo || '';
      const descripcion = fila['Concepto (Detalle)'] || fila['Concepto'] || '';
      const concepto = codigo && descripcion ? `${codigo} - ${descripcion}` : (codigo || descripcion);

      if (cedula && fecha && concepto) {
        const fechaObj = excelSerialToDate(fecha);
        const fechaISO = fechaObj.toISOString().split('T')[0];
        
        console.log(`  [Fila ${idx}] Cedula: ${cedula} | Fecha: ${fechaISO} | Concepto: ${concepto}`);
        
        trabajadores.set(cedula, { nombre: fila.Nombre, area: '' });
        if (!actividadMap[cedula]) actividadMap[cedula] = [];
        
        actividadMap[cedula].push({
          fecha: fechaISO,
          concepto: concepto,
          detalle: fila.Detalle || '',
          valor: fila.TOTAL || 0
        });
      }
    });

    // 3. CRUCE DE DATOS (BUSCAR CONFLICTOS)
    console.log('\n=== BUSCANDO CONFLICTOS ===');
    const conflictos = [];

    for (const [cedula, novedades] of Object.entries(novedadesMap)) {
      const actividades = actividadMap[cedula] || [];
      
      if (actividades.length === 0) continue;

      const fechasConActividad = new Set(actividades.map(a => a.fecha));

      novedades.forEach(nov => {
        if (fechasConActividad.has(nov.fecha)) {
          const actividadDetalle = actividades.find(a => a.fecha === nov.fecha);
          console.log(`  ✗ CONFLICTO en ${nov.fecha}: ${nov.tipo} vs ${actividadDetalle.concepto}`);
          
          conflictos.push({
            cedula,
            nombre: trabajadores.get(cedula)?.nombre || 'Desconocido',
            area: trabajadores.get(cedula)?.area || '',
            fecha: nov.fecha,
            novedad: nov.tipo,
            observacion_nov: nov.observacion,
            concepto_actividad: actividadDetalle.concepto,
            detalle_actividad: actividadDetalle.detalle
          });
        }
      });
    }

    console.log(`\n=== RESUMEN ===`);
    console.log(`Total trabajadores: ${trabajadores.size}`);
    console.log(`Total conflictos encontrados: ${conflictos.length}`);

    // Limpiar archivos temporales
    fs.unlinkSync(vigilanciaPath);
    fs.unlinkSync(nominaPath);

    res.json({
      total_trabajadores: trabajadores.size,
      total_conflictos: conflictos.length,
      conflictos
    });

  } catch (error) {
    console.error('❌ Error en el servidor:', error);
    res.status(500).json({ error: error.message });
  }
});

// Endpoint de prueba
app.get('/api/test', (req, res) => {
  res.json({ message: 'Servidor funcionando correctamente' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
  console.log(`📊 Listo para recibir archivos Excel`);
  console.log(`🔗 Endpoint disponible: http://localhost:${PORT}/api/cargar`);
});
</file>

<file path=".gitignore">
# Dependencias
node_modules/
**/node_modules/

# Variables de Entorno (CRÍTICO)
.env
**.env

# Archivos temporales y logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
logs/
*.log

# Carpetas de subida temporales
server/uploads/

# Archivos del sistema
.DS_Store
Thumbs.db
.vscode/
.idea/

# Build de frontend
client/dist/
client/build/
</file>

<file path="create-test-files.js">
const XLSX = require('xlsx');
const fs = require('fs');

// Crear archivo de VIGILANCIA (permisos)
const vigilanciaData = [
  {
    'CEDULA': '1234567890',
    'TRABAJADOR': 'MIRANDA PALLARES LUIS MIGUEL',
    'MOT.': 'PERM',
    'AREA TRABAJO': 'OPERACIONES',
    'FECHA INICIO': new Date('2024-04-06'),
    'FECHA TERMI': new Date('2024-04-06'),
    'OBSERVACION': 'Permiso remunerado'
  }
];

const wbVigilancia = XLSX.utils.book_new();
const wsVigilancia = XLSX.utils.json_to_sheet(vigilanciaData);
XLSX.utils.book_append_sheet(wbVigilancia, wsVigilancia, 'Vigilancia');
XLSX.writeFile(wbVigilancia, 'uploads/test-vigilancia.xlsx');
console.log('✓ Created test-vigilancia.xlsx');

// Crear archivo de NÓMINA (actividades laborales)
const nominaData = [
  {
    'Contrato': '1234567890',
    'Nombre': 'MIRANDA PALLARES LUIS MIGUEL',
    'Fecha': new Date('2024-04-06'),
    'Código': '001',
    'Concepto (Detalle)': 'SALARIO BASE',
    'Detalle': 'Pago por servicios prestados',
    'TOTAL': 50000
  }
];

const wbNomina = XLSX.utils.book_new();
const wsNomina = XLSX.utils.json_to_sheet(nominaData);
XLSX.utils.book_append_sheet(wbNomina, wsNomina, 'Nómina');
XLSX.writeFile(wbNomina, 'uploads/test-nomina.xlsx');
console.log('✓ Created test-nomina.xlsx');

console.log('\n✅ Test files created successfully!');
console.log('Vigilancia file:', 'uploads/test-vigilancia.xlsx');
console.log('Nómina file:', 'uploads/test-nomina.xlsx');
</file>

<file path="docker-compose.yml">
version: '3.8'
services:
  app:
    image: mcr.microsoft.com/devcontainers/javascript-node:20
    command: sleep infinity
    ports:
      - "3000:3000"
      - "8080:8080"
    volumes:
      - ./:/workspace:cached
    environment:
      - DATABASE_URL=postgres://postgres:password@db:5432/novedad_db
      - PORT=8080
    depends_on:
      - db
  db:
    image: postgres:15
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
      POSTGRES_DB: novedad_db
    ports:
      - "5432:5432"
    volumes:
      - pg_data:/var/lib/postgresql/data
volumes:
  pg_data:
</file>

<file path="ESTRUCTURA_VALIDACION.md">
# Validación de Estructura del Proyecto - Correcciones Aplicadas

## Problemas Encontrados y Solucionados

### 1️⃣ **Docker Compose - Puertos No Expuestos**
**Problema:** El servicio `app` no mapeaba el puerto 3001 al host.
- ❌ Antes: Sin mapeo de puertos
- ✅ Después: Agregado `ports: ["3000:3000", "3001:3001"]`

**Ubicación:** `/docker-compose.yml`

---

### 2️⃣ **Vite - Sin Proxy al Backend**
**Problema:** El cliente (Vite) no tenía configurado proxy para redirigir llamadas API.
- ❌ Antes: Sin configuración de servidor proxy
- ✅ Después: Configurado proxy que redirige `/api/*` a `http://localhost:3001`

**Ubicación:** `/client/vite.config.js`

```javascript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3001',
      changeOrigin: true,
      secure: false,
    }
  }
}
```

---

### 3️⃣ **Hardcoded URLs en el Cliente**
**Problema:** La URL del backend estaba hardcodeada como `http://localhost:3001/api/cargar`
- ❌ Antes: `axios.post('http://localhost:3001/api/cargar', ...)`
- ✅ Después: `axios.post('/api/cargar', ...)` (URL relativa funciona con proxy)

**Ubicación:** `/client/src/App.jsx` (línea 26)

---

### 4️⃣ **Variables de Entorno No Configuradas**
**Problema:** El servidor no tenía archivo `.env` configurado.
- ✅ Creado: `/server/.env` con variables necesarias
- ✅ Creado: `/server/.env.example` como referencia

**Contenido:**
```env
DATABASE_URL=postgres://postgres:password@db:5432/novedad_db
PORT=3001
NODE_ENV=development
```

---

### 5️⃣ **Puerto No Utiliza Variable de Entorno**
**Problema:** Server.js tenía puerto hardcodeado.
- ❌ Antes: `const PORT = 3001;`
- ✅ Después: `const PORT = process.env.PORT || 3001;`

**Ubicación:** `/server/server.js` (última sección)

---

## ✅ Lista de Verificación - Estructura Correcta

- ✅ Docker Compose expone puertos 3000 y 3001
- ✅ Vite con proxy configurado para /api
- ✅ URLs relativas en cliente (no hardcodeadas)
- ✅ Variables de entorno configuradas
- ✅ Server.js lee PORT desde .env
- ✅ Bases de datos (tablas) creadas en `/db/init.sql`

---

## 🚀 Próximos Pasos

1. **Ejecutar el servidor:**
   ```bash
   cd server
   npm install  # Si no está instalado
   node server.js
   ```

2. **Ejecutar el cliente (en otra terminal):**
   ```bash
   cd client
   npm install  # Si no está instalado
   npm run dev
   ```

3. **Acceder en navegador:**
   - Frontend: `http://localhost:5173` (Vite default)
   - Backend: `http://localhost:3001` (Express)
   - Base de datos: `localhost:5432` (PostgreSQL)

---

## 🔧 Troubleshooting

**Error: "Cannot connect to database"**
- Verificar que PostgreSQL esté corriendo
- Confirmar `DATABASE_URL` es correcta en `.env`
- Verificar que las tablas estén creadas (ver `/db/init.sql`)

**Error: "Cannot POST /api/cargar"**
- Verificar que servidor esté corriendo en puerto 3001
- Verificar proxy de Vite esté activo
- Revisar console del navegador para CORS errors

**CORS Error en navegador**
- Proxy de Vite debe redirigir `/api` → backend
- Server debe tener CORS configurado (ya está con `app.use(cors())`)
</file>

<file path="package.json">
{
  "name": "novedad-control",
  "version": "1.0.0",
  "scripts": {
    "start": "cd server && node server.js",
    "dev:backend": "cd server && npx nodemon server.js",
    "dev:frontend": "cd client && npm run dev",
    "install:all": "cd server && npm install && cd ../client && npm install"
  },
  "dependencies": {
    "axios": "^1.15.2",
    "lucide-react": "^1.8.0"
  }
}
</file>

<file path="README.md">
# payrollresume
Auditoría de días laborales nómina
</file>

</files>
````

## File: .devcontainer/devcontainer.json
````json
{
  "name": "Novedad Control",
  "dockerComposeFile": ["../docker-compose.yml"],
  "service": "app",
  "workspaceFolder": "/workspace",
  "features": {
    "ghcr.io/devcontainers/features/node:1": {
      "version": "20"
    }
  },
  "forwardPorts": [3000, 8080, 5432],
  "customizations": {
    "vscode": {
      "extensions": [
        "dbaeumer.vscode-eslint",
        "bradlc.vscode-tailwindcss",
        "ms-azuretools.vscode-docker"
      ]
    }
  },
  "postCreateCommand": "mkdir -p client/src server/db"
}
````

## File: client/public/favicon.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="46" fill="none" viewBox="0 0 48 46"><path fill="#863bff" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z" style="fill:#863bff;fill:color(display-p3 .5252 .23 1);fill-opacity:1"/><mask id="a" width="48" height="46" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M25.842 44.938c-.664.844-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.183c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.498 0-3.579-1.842-3.579H1.133c-.92 0-1.456-1.04-.92-1.787L9.91.473c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.578 1.842 3.578h11.377c.943 0 1.473 1.088.89 1.832L25.843 44.94z" style="fill:#000;fill-opacity:1"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#ede6ff" rx="5.508" ry="14.704" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -4.47 31.516)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#ede6ff" rx="10.399" ry="29.851" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -39.328 7.883)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#7e14ff" rx="5.508" ry="30.487" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -25.913 -14.639)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -32.644 -3.334)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -34.34 30.47)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#ede6ff" rx="14.072" ry="22.078" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="rotate(93.35 24.506 48.493)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx=".387" cy="8.972" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(39.51 .387 8.972)"/></g><g filter="url(#k)"><ellipse cx="47.523" cy="-6.092" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 47.523 -6.092)"/></g><g filter="url(#l)"><ellipse cx="41.412" cy="6.333" fill="#47bfff" rx="5.971" ry="9.665" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 41.412 6.333)"/></g><g filter="url(#m)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#n)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#o)"><ellipse cx="35.651" cy="29.907" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 35.651 29.907)"/></g><g filter="url(#p)"><ellipse cx="38.418" cy="32.4" fill="#47bfff" rx="5.971" ry="15.297" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 38.418 32.4)"/></g></g><defs><filter id="b" width="60.045" height="41.654" x="-19.77" y="16.149" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-54.613" y="-7.533" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-49.64" y="2.03" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-45.045" y="20.029" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-43.513" y="21.178" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="15.756" y="-17.901" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-27.636" y="-22.853" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="20.116" y="-38.415" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="24.641" y="-11.323" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="8.244" y="-2.416" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="18.713" y="10.588" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter></defs></svg>
````

## File: client/public/icons.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="bluesky-icon" viewBox="0 0 16 17">
    <g clip-path="url(#bluesky-clip)"><path fill="#08060d" d="M7.75 7.735c-.693-1.348-2.58-3.86-4.334-5.097-1.68-1.187-2.32-.981-2.74-.79C.188 2.065.1 2.812.1 3.251s.241 3.602.398 4.13c.52 1.744 2.367 2.333 4.07 2.145-2.495.37-4.71 1.278-1.805 4.512 3.196 3.309 4.38-.71 4.987-2.746.608 2.036 1.307 5.91 4.93 2.746 2.72-2.746.747-4.143-1.747-4.512 1.702.189 3.55-.4 4.07-2.145.156-.528.397-3.691.397-4.13s-.088-1.186-.575-1.406c-.42-.19-1.06-.395-2.741.79-1.755 1.24-3.64 3.752-4.334 5.099"/></g>
    <defs><clipPath id="bluesky-clip"><path fill="#fff" d="M.1.85h15.3v15.3H.1z"/></clipPath></defs>
  </symbol>
  <symbol id="discord-icon" viewBox="0 0 20 19">
    <path fill="#08060d" d="M16.224 3.768a14.5 14.5 0 0 0-3.67-1.153c-.158.286-.343.67-.47.976a13.5 13.5 0 0 0-4.067 0c-.128-.306-.317-.69-.476-.976A14.4 14.4 0 0 0 3.868 3.77C1.546 7.28.916 10.703 1.231 14.077a14.7 14.7 0 0 0 4.5 2.306q.545-.748.965-1.587a9.5 9.5 0 0 1-1.518-.74q.191-.14.372-.293c2.927 1.369 6.107 1.369 8.999 0q.183.152.372.294-.723.437-1.52.74.418.838.963 1.588a14.6 14.6 0 0 0 4.504-2.308c.37-3.911-.63-7.302-2.644-10.309m-9.13 8.234c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.894 0 1.614.82 1.599 1.82.001 1-.705 1.82-1.6 1.82m5.91 0c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.893 0 1.614.82 1.599 1.82 0 1-.706 1.82-1.6 1.82"/>
  </symbol>
  <symbol id="documentation-icon" viewBox="0 0 21 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="m15.5 13.333 1.533 1.322c.645.555.967.833.967 1.178s-.322.623-.967 1.179L15.5 18.333m-3.333-5-1.534 1.322c-.644.555-.966.833-.966 1.178s.322.623.966 1.179l1.534 1.321"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M17.167 10.836v-4.32c0-1.41 0-2.117-.224-2.68-.359-.906-1.118-1.621-2.08-1.96-.599-.21-1.349-.21-2.848-.21-2.623 0-3.935 0-4.983.369-1.684.591-3.013 1.842-3.641 3.428C3 6.449 3 7.684 3 10.154v2.122c0 2.558 0 3.838.706 4.726q.306.383.713.671c.76.536 1.79.64 3.581.66"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M3 10a2.78 2.78 0 0 1 2.778-2.778c.555 0 1.209.097 1.748-.047.48-.129.854-.503.982-.982.145-.54.048-1.194.048-1.749a2.78 2.78 0 0 1 2.777-2.777"/>
  </symbol>
  <symbol id="github-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clip-rule="evenodd"/>
  </symbol>
  <symbol id="social-icon" viewBox="0 0 20 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M12.5 6.667a4.167 4.167 0 1 0-8.334 0 4.167 4.167 0 0 0 8.334 0"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M2.5 16.667a5.833 5.833 0 0 1 8.75-5.053m3.837.474.513 1.035c.07.144.257.282.414.309l.93.155c.596.1.736.536.307.965l-.723.73a.64.64 0 0 0-.152.531l.207.903c.164.715-.213.991-.84.618l-.872-.52a.63.63 0 0 0-.577 0l-.872.52c-.624.373-1.003.094-.84-.618l.207-.903a.64.64 0 0 0-.152-.532l-.723-.729c-.426-.43-.289-.864.306-.964l.93-.156a.64.64 0 0 0 .412-.31l.513-1.034c.28-.562.735-.562 1.012 0"/>
  </symbol>
  <symbol id="x-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M1.893 1.98c.052.072 1.245 1.769 2.653 3.77l2.892 4.114c.183.261.333.48.333.486s-.068.089-.152.183l-.522.593-.765.867-3.597 4.087c-.375.426-.734.834-.798.905a1 1 0 0 0-.118.148c0 .01.236.017.664.017h.663l.729-.83c.4-.457.796-.906.879-.999a692 692 0 0 0 1.794-2.038c.034-.037.301-.34.594-.675l.551-.624.345-.392a7 7 0 0 1 .34-.374c.006 0 .93 1.306 2.052 2.903l2.084 2.965.045.063h2.275c1.87 0 2.273-.003 2.266-.021-.008-.02-1.098-1.572-3.894-5.547-2.013-2.862-2.28-3.246-2.273-3.266.008-.019.282-.332 2.085-2.38l2-2.274 1.567-1.782c.022-.028-.016-.03-.65-.03h-.674l-.3.342a871 871 0 0 1-1.782 2.025c-.067.075-.405.458-.75.852a100 100 0 0 1-.803.91c-.148.172-.299.344-.99 1.127-.304.343-.32.358-.345.327-.015-.019-.904-1.282-1.976-2.808L6.365 1.85H1.8zm1.782.91 8.078 11.294c.772 1.08 1.413 1.973 1.425 1.984.016.017.241.02 1.05.017l1.03-.004-2.694-3.766L7.796 5.75 5.722 2.852l-1.039-.004-1.039-.004z" clip-rule="evenodd"/>
  </symbol>
</svg>
````

## File: client/src/assets/react.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
````

## File: client/src/assets/vite.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="77" height="47" fill="none" aria-labelledby="vite-logo-title" viewBox="0 0 77 47"><title id="vite-logo-title">Vite</title><style>.parenthesis{fill:#000}@media (prefers-color-scheme:dark){.parenthesis{fill:#fff}}</style><path fill="#9135ff" d="M40.151 45.71c-.663.844-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.493c-.92 0-1.457-1.04-.92-1.788l7.479-10.471c1.07-1.498 0-3.578-1.842-3.578H15.443c-.92 0-1.456-1.04-.92-1.788l9.696-13.576c.213-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.472c-1.07 1.497 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.087.89 1.83L40.153 45.712z"/><mask id="a" width="48" height="47" x="14" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M40.047 45.71c-.663.843-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.389c-.92 0-1.457-1.04-.92-1.788l7.479-10.472c1.07-1.497 0-3.578-1.842-3.578H15.34c-.92 0-1.456-1.04-.92-1.788l9.696-13.575c.213-.297.556-.474.92-.474H53.93c.92 0 1.456 1.04.92 1.788L47.37 13.03c-1.07 1.498 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.088.89 1.831L40.049 45.712z"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#eee6ff" rx="5.508" ry="14.704" transform="rotate(269.814 20.96 11.29)scale(-1 1)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#eee6ff" rx="10.399" ry="29.851" transform="rotate(89.814 -16.902 -8.275)scale(1 -1)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#8900ff" rx="5.508" ry="30.487" transform="rotate(89.814 -19.197 -7.127)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.928 4.177)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.738 5.52)scale(1 -1)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#eee6ff" rx="14.072" ry="22.078" transform="rotate(93.35 31.245 55.578)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx="14.592" cy="9.743" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(39.51 14.592 9.743)"/></g><g filter="url(#k)"><ellipse cx="61.728" cy="-5.321" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 61.728 -5.32)"/></g><g filter="url(#l)"><ellipse cx="55.618" cy="7.104" fill="#00c2ff" rx="5.971" ry="9.665" transform="rotate(37.892 55.618 7.104)"/></g><g filter="url(#m)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#n)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#o)"><ellipse cx="49.857" cy="30.678" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 49.857 30.678)"/></g><g filter="url(#p)"><ellipse cx="52.623" cy="33.171" fill="#00c2ff" rx="5.971" ry="15.297" transform="rotate(37.892 52.623 33.17)"/></g></g><path d="M6.919 0c-9.198 13.166-9.252 33.575 0 46.789h6.215c-9.25-13.214-9.196-33.623 0-46.789zm62.424 0h-6.215c9.198 13.166 9.252 33.575 0 46.789h6.215c9.25-13.214 9.196-33.623 0-46.789" class="parenthesis"/><defs><filter id="b" width="60.045" height="41.654" x="-5.564" y="16.92" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-40.407" y="-6.762" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-35.435" y="2.801" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-30.84" y="20.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-29.307" y="21.949" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="29.961" y="-17.13" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-13.43" y="-22.082" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="34.321" y="-37.644" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="38.847" y="-10.552" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="22.45" y="-1.645" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="32.919" y="11.36" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter></defs></svg>
````

## File: client/src/components/AuditManager.jsx
````javascript
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Upload, Loader2, Activity, FileDown, FileText, TableProperties } from 'lucide-react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function AuditManager() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(() => {
    const saved = localStorage.getItem('audit_results');
    return saved ? JSON.parse(saved) : null;
  });
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('conflictos');
  const [dates, setDates] = useState({ fechaInicio: '', fechaFin: '', anio: new Date().getFullYear().toString() });

  useEffect(() => {
    if (result) {
      localStorage.setItem('audit_results', JSON.stringify(result));
    }
  }, [result]);

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true); setError(''); setResult(null);
    localStorage.removeItem('audit_results');
    const formData = new FormData();
    formData.append('vigilancia', e.target.vigilancia.files[0]);
    formData.append('nomina', e.target.nomina.files[0]);
    formData.append('fechaInicio', dates.fechaInicio);
    formData.append('fechaFin', dates.fechaFin);
    formData.append('anio', dates.anio);
    try {
      const response = await axios.post('/api/auditoria/analizar', formData);
      setResult(response.data);
    } catch (err) { setError(err.response?.data?.error || 'Error al procesar la auditoría'); }
    finally { setLoading(false); }
  };

  const exportToExcel = async () => {
    try {
      const response = await axios.post('/api/auditoria/exportar', { result }, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `auditoria_${new Date().toISOString().split('T')[0]}.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch { setError('Error al exportar el archivo'); }
  };

  const exportMatrizCSV = async () => {
    try {
      const response = await axios.post('/api/auditoria/exportar-matriz', { result }, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `matriz_laboral_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch { setError('Error al exportar la matriz CSV'); }
  };

  const exportToPDF = () => {
    try {
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text('Informe de Auditoría de Nómina', 14, 20);
      doc.setFontSize(11);
      doc.text(`Periodo: ${dates.fechaInicio} al ${dates.fechaFin} | Año: ${dates.anio}`, 14, 30);

      const sections = [
        { title: 'Conflictos', data: result.conflictos, cols: ['Contrato', 'Nombre', 'Fecha', 'Novedad', 'Actividad'] },
        { title: 'Faltantes', data: result.faltantes, cols: ['Contrato', 'Nombre', 'Estado'] },
        { title: 'Inactivos', data: result.inactivos.map(i => ({ ...i, dias_faltantes: i.dias_faltantes.join(', ') })), cols: ['Contrato', 'Nombre', 'Días Faltantes'] },
        { title: 'No Registrados', data: result.noRegistrados, cols: ['Contrato', 'Nombre'] },
        { title: 'Múltiples Actividades', data: result.multiples.map(m => ({ ...m, actividades: m.actividades.join(', ') })), cols: ['Contrato', 'Nombre', 'Fecha', 'Actividades'] },
      ];

      let currentY = 40;
      sections.forEach(section => {
        if (section.data.length === 0) return;
        
        doc.setFontSize(14);
        doc.text(section.title, 14, currentY);
        
        const tableData = section.data.map(row => 
          section.cols.map(col => {
            const key = col.toLowerCase().replace(' ', '_').replace('múltiples', 'multiples');
            const mapping = {
              'contrato': 'contrato',
              'nombre': 'nombre',
              'fecha': 'fecha',
              'novedad': 'novedad',
              'actividad': 'actividad',
              'estado': 'status',
              'días_faltantes': 'dias_faltantes',
              'actividades': 'actividades'
            };
            return row[mapping[key.toLowerCase()] || key];
          })
        );

        doc.autoTable({
          startY: currentY + 5,
          head: [section.cols],
          body: tableData,
          margin: { left: 14, right: 14 },
          theme: 'grid',
          headStyles: { fillColor: [41, 128, 185] }
        });
        
        currentY = doc.lastAutoTable.finalY + 15;
        if (currentY > 270) {
          doc.addPage();
          currentY = 20;
        }
      });

      doc.save(`auditoria_${new Date().toISOString().split('T')[0]}.pdf`);
    } catch { setError('Error al generar el PDF'); }
  };

  const renderPivotTable = (data) => {
    if (!data || data.length === 0) {
      return (
        <div className="px-6 py-10 text-center text-gray-500">
          No se encontraron registros
        </div>
      );
    }

    return (
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase border-r">Nombre Concepto</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase border-r">Detalle</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase">Referencia</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {data.map((row, idx) => {
              const showConcepto = idx === 0 || row.concepto !== data[idx - 1]?.concepto;

              return (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className={`px-4 py-2 text-sm border-r ${showConcepto ? 'font-bold bg-white' : 'text-gray-400'}`}>
                    {showConcepto ? row.concepto : row.concepto}
                  </td>
                  <td className="px-4 py-2 text-sm border-r">
                    {row.detalle}
                  </td>
                  <td className="px-4 py-2 text-sm">
                    {row.referencias}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  const renderTable = (data, columns) => (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50 border-b">
          <tr>
            {columns.map(col => <th key={col.key} className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase">{col.label}</th>)}
          </tr>
        </thead>
        <tbody className="divide-y">
          {data.length > 0 ? data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50 transition-colors">
              {columns.map(col => (
                <td key={col.key} className="px-6 py-4 text-sm text-gray-600">
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          )) : (
            <tr><td colSpan={columns.length} className="px-6 py-10 text-center text-gray-500">No se encontraron registros</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><Activity size={20} className="text-blue-600" /> Configuración de Auditoría</h2>
        <form onSubmit={handleUpload} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div><label className="block text-sm font-medium text-gray-700 mb-1">Fecha Inicio</label><input type="date" required className="block w-full p-2 border rounded-lg" value={dates.fechaInicio} onChange={e => setDates({...dates, fechaInicio: e.target.value})}/></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1">Fecha Fin</label><input type="date" required className="block w-full p-2 border rounded-lg" value={dates.fechaFin} onChange={e => setDates({...dates, fechaFin: e.target.value})}/></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1">Año</label><input type="number" required className="block w-full p-2 border rounded-lg" value={dates.anio} onChange={e => setDates({...dates, anio: e.target.value})}/></div>
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4 mt-2">
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Archivo Vigilancia (.xlsx)</label><input type="file" name="vigilancia" accept=".xlsx" required className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Archivo Nómina (.xlsx)</label><input type="file" name="nomina" accept=".xlsx" required className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"/></div>
          </div>
          <div className="md:col-span-3"><button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition disabled:opacity-50">{loading ? <><Loader2 className="animate-spin" size={20} /> Analizando...</> : <><Upload size={20} /> Ejecutar Auditoría</>}</button></div>
        </form>
        {error && <p className="mt-4 text-red-600 bg-red-50 p-3 rounded">{error}</p>}
      </div>

      {result && (
        <div className="animate-fade-in-up">
          <div className="flex justify-between items-center mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 flex-1 mr-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500"><p className="text-sm text-gray-500">Conflictos</p><p className="text-2xl font-bold">{result.resumen.total_conflictos}</p></div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500"><p className="text-sm text-gray-500">Faltantes</p><p className="text-2xl font-bold">{result.resumen.total_faltantes}</p></div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500"><p className="text-sm text-gray-500">Inactivos</p><p className="text-2xl font-bold">{result.resumen.total_inactivos}</p></div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500"><p className="text-sm text-gray-500">No Registrados</p><p className="text-2xl font-bold">{result.resumen.total_no_registrados}</p></div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500"><p className="text-sm text-gray-500">Mult. Actividades</p><p className="text-2xl font-bold">{result.resumen.total_multiples}</p></div>
            </div>
            <div className="flex gap-2">
              <button onClick={exportToPDF} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition shadow-sm whitespace-nowrap">
                <FileText size={20} /> PDF
              </button>
              <button onClick={exportToExcel} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition shadow-sm whitespace-nowrap">
                <FileDown size={20} /> Excel
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex border-b overflow-x-auto">
              {['conflictos', 'faltantes', 'inactivos', 'noRegistrados', 'multiples', 'resumenDetalle', 'matriz'].map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${activeTab === tab ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-700'}`}>
                  {tab === 'conflictos' ? 'Conflictos' : tab === 'faltantes' ? 'Faltantes' : tab === 'inactivos' ? 'Inactivos' : tab === 'noRegistrados' ? 'No Registrados' : tab === 'multiples' ? 'Mult. Actividades' : tab === 'resumenDetalle' ? 'Resumen Detalles' : 'Matriz Laboral'}
                </button>
              ))}
            </div>
            
            <div className="p-0">
              {activeTab === 'conflictos' && renderTable(result.conflictos, [
                { key: 'contrato', label: 'Contrato' },
                { key: 'nombre', label: 'Nombre' },
                { key: 'fecha', label: 'Fecha' },
                { key: 'novedad', label: 'Novedad' },
                { key: 'actividad', label: 'Actividad' },
              ])}
              {activeTab === 'faltantes' && renderTable(result.faltantes, [
                { key: 'contrato', label: 'Contrato' },
                { key: 'nombre', label: 'Nombre' },
                { key: 'status', label: 'Estado' },
              ])}
              {activeTab === 'inactivos' && renderTable(result.inactivos, [
                { key: 'contrato', label: 'Contrato' },
                { key: 'nombre', label: 'Nombre' },
                { key: 'dias_faltantes', label: 'Días Faltantes', render: row => row.dias_faltantes.join(', ') },
              ])}
              {activeTab === 'noRegistrados' && renderTable(result.noRegistrados, [
                { key: 'contrato', label: 'Contrato' },
                { key: 'nombre', label: 'Nombre' },
              ])}
              {activeTab === 'multiples' && renderTable(result.multiples, [
                { key: 'contrato', label: 'Contrato' },
                { key: 'nombre', label: 'Nombre' },
                { key: 'fecha', label: 'Fecha' },
                { key: 'actividades', label: 'Actividades', render: row => row.actividades.join(', ') },
              ])}
              {activeTab === 'resumenDetalle' && renderPivotTable(result.resumenDetalles)}
              {activeTab === 'matriz' && (
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Matriz de Actividades Diarias</h3>
                    <button onClick={exportMatrizCSV} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition shadow-sm">
                      <FileDown size={20} /> Exportar Matriz CSV
                    </button>
                  </div>
                  <div className="overflow-x-auto border rounded-lg">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase sticky left-0 bg-gray-50 z-10 border-r">Nombre</th>
                          {result.diasLaborales.map(date => {
                            const [, m, d] = date.split('-');
                            const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
                            return <th key={date} className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase min-w-[80px]">{d} {months[parseInt(m)-1]}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {result.matriz.map((emp, idx) => (
                          <tr key={idx} className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 text-sm font-medium text-gray-900 sticky left-0 bg-white z-10 border-r">{emp.nombre}</td>
                            {result.diasLaborales.map(date => (
                              <td key={date} className="px-4 py-3 text-sm text-center text-gray-600">
                                {emp.conteo[date] || ''}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
````

## File: client/src/components/EmployeeManager.jsx
````javascript
import { useState, useEffect } from 'react';
import axios from 'axios';

// Configurar baseURL para producción si se define la variable Vite
axios.defaults.baseURL = import.meta.env.VITE_API_URL || '';
import { Upload, Loader2, Search, UserPlus, X, FileDown } from 'lucide-react';

export default function EmployeeManager() {
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [search, setSearch] = useState('');
  
  // Estado para el modal de agregar empleado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({ nombre: '', contrato: '' });
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get('/api/empleados');
        setEmployees(res.data);
      } catch (err) {
        console.error('Error fetching employees', err);
        setError('No se pudo cargar la lista de empleados. Ver consola para más detalles.');
      }
    };
    fetchEmployees();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true); setError(''); setSuccess('');
    const formData = new FormData();
    if (!e.target.csvFile.files[0]) {
      setError('Por favor seleccione un archivo');
      setLoading(false);
      return;
    }
    formData.append('file', e.target.csvFile.files[0]);
    try {
      const res = await axios.post('/api/empleados/cargar', formData);
      setSuccess(res.data.message);
      if (res.data.warnings && res.data.warnings.length > 0) {
        setError(`Atención: Se detectaron ${res.data.warnings.length} contratos en notación científica. Por favor, exporte el CSV con formato de Texto.`);
      }
      const updatedRes = await axios.get('/api/empleados');
      setEmployees(updatedRes.data);
    } catch (err) { setError(err.response?.data?.error || 'Error al cargar el archivo CSV'); }
    finally { setLoading(false); }
  };

  const handleAddNewEmployee = async (e) => {
    e.preventDefault();
    setAdding(true); setError(''); setSuccess('');
    try {
      const res = await axios.post('/api/empleados', newEmployee);
      setSuccess(res.data.message);
      setIsModalOpen(false);
      setNewEmployee({ nombre: '', contrato: '' });
      const updatedRes = await axios.get('/api/empleados');
      setEmployees(updatedRes.data);
    } catch (err) { setError(err.response?.data?.error || 'Error al agregar el empleado'); }
    finally { setAdding(false); }
  };

  const handleExportEmployees = async () => {
    try {
      const response = await axios.get('/api/empleados/exportar', { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `maestro_empleados_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch { setError('Error al exportar la lista de empleados'); }
  };

  const filteredEmployees = employees.filter(emp => 
    emp.nombre.toLowerCase().includes(search.toLowerCase()) || emp.contrato.includes(search)
  );

  const toggleStatus = async (contrato, currentStatus) => {
    const newStatus = currentStatus === 'activo' ? 'inactivo' : 'activo';
    try {
      await axios.put(`/api/empleados/${contrato}`, { status: newStatus });
      const res = await axios.get('/api/empleados');
      setEmployees(res.data);
    } catch { setError('Error al cambiar el estado'); }
  };

  const deleteEmployee = async (contrato) => {
    if(confirm('¿Estás seguro de eliminar este empleado?')) {
      try {
        await axios.delete(`/api/empleados/${contrato}`);
        const res = await axios.get('/api/empleados');
        setEmployees(res.data);
      } catch { setError('Error al eliminar el empleado'); }
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Gestión de Empleados</h1>
        <div className="flex gap-2 items-center">
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2 transition-colors"
          >
            <UserPlus className="w-4 h-4" /> Agregar Empleado
          </button>
          <button 
            onClick={handleExportEmployees}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 flex items-center gap-2 transition-colors"
          >
            <FileDown className="w-4 h-4" /> Exportar Maestro
          </button>
          <form onSubmit={handleUpload} className="flex gap-2 items-center">
            <input type="file" name="csvFile" accept=".csv" className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 flex items-center gap-2 transition-colors">
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              <Upload className="w-4 h-4" /> Cargar CSV
            </button>
          </form>
        </div>
      </div>

      {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">{error}</div>}
      {success && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">{success}</div>}

      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input 
          type="text" 
          placeholder="Buscar por nombre o contrato..." 
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden border">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase">Contrato</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase">Nombre</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase">Estado</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((emp, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{emp.contrato}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{emp.nombre}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${emp.status === 'activo' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-right flex justify-end gap-3">
                    <button onClick={() => toggleStatus(emp.contrato, emp.status)} className="text-blue-600 hover:text-blue-800 font-medium">
                      {emp.status === 'activo' ? 'Desactivar' : 'Activar'}
                    </button>
                    <button onClick={() => deleteEmployee(emp.contrato)} className="text-red-600 hover:text-red-800 font-medium">Eliminar</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-10 text-center text-gray-500">No se encontraron empleados</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal para agregar empleado */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-bold text-gray-800">Agregar Nuevo Empleado</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleAddNewEmployee} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                  value={newEmployee.nombre}
                  onChange={e => setNewEmployee({...newEmployee, nombre: e.target.value})}
                  placeholder="Ej. Juan Perez"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Número de Contrato / Cédula</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                  value={newEmployee.contrato}
                  onChange={e => setNewEmployee({...newEmployee, contrato: e.target.value})}
                  placeholder="Ej. 100427300941"
                />
              </div>
              <div className="pt-4 flex gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)} 
                  className="flex-1 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                >
                  Cancelar
                </button>
                <button 
                  type="submit" 
                  disabled={adding} 
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 font-medium transition-colors flex items-center justify-center gap-2"
                >
                  {adding && <Loader2 className="w-4 h-4 animate-spin" />}
                  Guardar Empleado
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
````

## File: client/src/App.css
````css
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}
````

## File: client/src/App.jsx
````javascript
import { useState } from 'react';
import { FileSpreadsheet, Users, Activity } from 'lucide-react';
import EmployeeManager from './components/EmployeeManager';
import AuditManager from './components/AuditManager';

export default function App() {
  const [activeTab, setActiveTab] = useState('audit');

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800 font-sans">
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-6 flex items-center gap-3 border-b border-blue-800">
          <FileSpreadsheet size={28} className="text-blue-300" />
          <span className="font-bold text-lg leading-tight">Auditoría<br/>Nómina</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button onClick={() => setActiveTab('employees')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeTab === 'employees' ? 'bg-blue-700 text-white shadow-inner' : 'text-blue-200 hover:bg-blue-800'}`}>
            <Users size={20} /> Maestro Empleados
          </button>
          <button onClick={() => setActiveTab('audit')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeTab === 'audit' ? 'bg-blue-700 text-white shadow-inner' : 'text-blue-200 hover:bg-blue-800'}`}>
            <Activity size={20} /> Analizar Auditoría
          </button>
        </nav>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {activeTab === 'employees' ? 'Gestión de Empleados' : 'Auditoría de Nómina'}
            </h1>
          </div>
          <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 text-sm font-medium text-gray-600">
            {new Date().toLocaleDateString()}
          </div>
        </header>

        {activeTab === 'employees' ? <EmployeeManager /> : <AuditManager />}
      </main>
    </div>
  );
}
````

## File: client/src/index.css
````css
@tailwind base;
@tailwind components;
@tailwind utilities;
````

## File: client/src/main.jsx
````javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios';
import './index.css'
import App from './App.jsx'

// Determina la URL de la API basándose en el entorno
const API_URL = import.meta.env.VITE_API_URL || 
               (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
                ? 'http://localhost:8080' 
                : '');

axios.defaults.baseURL = API_URL;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
````

## File: client/.gitignore
````
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
````

## File: client/eslint.config.js
````javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
````

## File: client/index.html
````html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>client</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
````

## File: client/package.json
````json
{
  "name": "client",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.15.2",
    "jspdf": "^4.2.1",
    "jspdf-autotable": "^5.0.8",
    "lucide-react": "^1.8.0",
    "react": "^19.2.5",
    "react-dom": "^19.2.5"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.4",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "autoprefixer": "^10.5.0",
    "eslint": "^9.39.4",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.5.0",
    "postcss": "^8.5.10",
    "tailwindcss": "3.4.19",
    "vite": "^8.0.9"
  }
}
````

## File: client/postcss.config.js
````javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
````

## File: client/README.md
````markdown
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
````

## File: client/tailwind.config.js
````javascript
/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
````

## File: client/vite.config.js
````javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
````

## File: db/init.sql
````sql
-- Initialize database schema
CREATE TABLE IF NOT EXISTS workers (
    id SERIAL PRIMARY KEY,
    cedula VARCHAR(20) UNIQUE NOT NULL,
    nombre TEXT NOT NULL,
    area TEXT
);

CREATE TABLE IF NOT EXISTS novelties (
    id SERIAL PRIMARY KEY,
    worker_id INTEGER REFERENCES workers(id) ON DELETE CASCADE,
    tipo VARCHAR(20) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    observacion TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(worker_id, fecha_inicio, tipo)
);

CREATE TABLE IF NOT EXISTS payroll_records (
    id SERIAL PRIMARY KEY,
    worker_id INTEGER REFERENCES workers(id) ON DELETE CASCADE,
    fecha DATE NOT NULL,
    concepto VARCHAR(50),
    detalle TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(worker_id, fecha, concepto)
);
````

## File: server/config/constants.js
````javascript
const FESTIVOS_COLOMBIA = {
  2026: [
    { mes: 1, dia: 1, nombre: "Año Nuevo" },
    { mes: 1, dia: 6, nombre: "Dia de los Reyes Magos" },
    { mes: 1, dia: 12, nombre: "Dia de San Juan" },
    { mes: 1, dia: 20, nombre: "Dia de San José" },
    { mes: 2, dia: 16, nombre: "Dia de la Constitución" },
    { mes: 2, dia: 23, nombre: "Dia de la Cultura" },
    { mes: 3, dia: 23, nombre: "Semana Santa" },
    { mes: 4, dia: 2, nombre: "Jueves Santo" },
    { mes: 4, dia: 3, nombre: "Viernes Santo" },
    { mes: 5, dia: 1, nombre: "Dia del Trabajo" },
    { mes: 5, dia: 18, nombre: "Dia de la Ascensión" },
    { mes: 6, dia: 15, nombre: "Corpus Christi" },
    { mes: 6, dia: 29, nombre: "San Pedro y San Pablo" },
    { mes: 7, dia: 20, nombre: "Dia de la Independencia" },
    { mes: 8, dia: 7, nombre: "Batalla de Boyacá" },
    { mes: 8, dia: 24, nombre: "Maria Stella" },
    { mes: 10, dia: 12, nombre: "Dia de la Raza" },
    { mes: 10, dia: 17, nombre: "Dia de la Universidad" },
    { mes: 11, dia: 2, nombre: "Dia de los Difuntos" },
    { mes: 11, dia: 16, nombre: "Dia de Cartagena" },
    { mes: 12, dia: 8, nombre: "Inmaculada Concepción" },
    { mes: 12, dia: 25, nombre: "Navidad" }
  ]
};

const TIPOS_VALIDOS_VIGILANCIA = ['EMG', 'AT', 'PERM', 'INAS', 'LLUTO', 'LEY MARÍA', 'VAC', 'SUSP', 'HOSP', 'NUEVO'];

module.exports = { FESTIVOS_COLOMBIA, TIPOS_VALIDOS_VIGILANCIA };
````

## File: server/config/db.js
````javascript
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
````

## File: server/models/Empleado.js
````javascript
const mongoose = require('mongoose');

const EmpleadoSchema = new mongoose.Schema({
  contrato: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['activo', 'inactivo'],
    default: 'activo'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);
````

## File: server/models/empleados.json
````json
{
  "actualizado": "2026-05-04T07:30:02.767Z",
  "empleados": [
    {
      "contrato": "1128104827",
      "nombre": "ALFARO CAMARGO ARLEY ALEJANDRO",
      "status": "activo"
    },
    {
      "contrato": "1193219009",
      "nombre": "ALGARIN MOYA WUILLIAM ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "19619861",
      "nombre": "ALVAREZ PADILLA JUAN CARLOS",
      "status": "activo"
    },
    {
      "contrato": "57272444",
      "nombre": "ALVIS BARRIOS MILENA PATRICIA",
      "status": "activo"
    },
    {
      "contrato": "195982123",
      "nombre": "ANAYA ANAYA JOSE ANGEL",
      "status": "activo"
    },
    {
      "contrato": "1193154681",
      "nombre": "ARAGON TAMARA CARLOS ANDRES",
      "status": "activo"
    },
    {
      "contrato": "10829328961",
      "nombre": "AREVALO OSORIO YOHANA LISETH",
      "status": "activo"
    },
    {
      "contrato": "84077062",
      "nombre": "ARPUSHANA CARLOS",
      "status": "activo"
    },
    {
      "contrato": "77166634",
      "nombre": "ARRIETA MARTINEZ LUIS ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "19602769",
      "nombre": "BARRANCO ARIAS EDWIN ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "1065123229",
      "nombre": "BARRANCO CERPA ELIAS DAVID",
      "status": "activo"
    },
    {
      "contrato": "195902971",
      "nombre": "BARRANCO OSPINO JOSE MARCELINO",
      "status": "activo"
    },
    {
      "contrato": "11281065801",
      "nombre": "BARRIOS JIMENEZ FRAY LUIS",
      "status": "activo"
    },
    {
      "contrato": "1084729362",
      "nombre": "BELTRAN VILLA DARWIN DAVID",
      "status": "activo"
    },
    {
      "contrato": "1193126015",
      "nombre": "BENAVIDES MANOTAS NORIS ELENA",
      "status": "activo"
    },
    {
      "contrato": "1131005354",
      "nombre": "BERDUGO MERCADO JHAN CARLOS",
      "status": "activo"
    },
    {
      "contrato": "1128106085",
      "nombre": "BOLAÑO MERCADO EFRAIN JAVIER",
      "status": "activo"
    },
    {
      "contrato": "1065641354",
      "nombre": "BUELVAS CASTRO VICTOR LUIS",
      "status": "activo"
    },
    {
      "contrato": "852901601",
      "nombre": "BURGOS ALEMAN YILMAR DE JESUS",
      "status": "activo"
    },
    {
      "contrato": "11931334081",
      "nombre": "CABARCAS GARCIA DANILO JAVIER",
      "status": "activo"
    },
    {
      "contrato": "1007095248",
      "nombre": "CABARCAS GARCIA FRANCISCO AVELARDO",
      "status": "activo"
    },
    {
      "contrato": "11932123284",
      "nombre": "CABARCAS MENDOZA FRANCISCO JOSE",
      "status": "activo"
    },
    {
      "contrato": "195103671",
      "nombre": "CABARCAS VERGARA TOMAS JOSE",
      "status": "activo"
    },
    {
      "contrato": "11342042751",
      "nombre": "CANTILLO  BARRANCO AMADO SEGUNDO",
      "status": "activo"
    },
    {
      "contrato": "77168224",
      "nombre": "CANTILLO CANTILLO DAVIER DAVID",
      "status": "activo"
    },
    {
      "contrato": "19619781",
      "nombre": "CANTILLO ESCORCIA RAFAEL ANTONIO",
      "status": "activo"
    },
    {
      "contrato": "195921121",
      "nombre": "CANTILLO FERNANDEZ PEDRO ANTONIO",
      "status": "activo"
    },
    {
      "contrato": "85290180",
      "nombre": "CANTILLO LOPEZ PEDRO ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "1193219294",
      "nombre": "CANTILLO MENDOZA YEISON DAVID",
      "status": "activo"
    },
    {
      "contrato": "7603924",
      "nombre": "CANTILLO MEZA CLEINER MANUEL",
      "status": "activo"
    },
    {
      "contrato": "1193140834",
      "nombre": "CANTILLO MIRANDA CARLOS ANDRES",
      "status": "activo"
    },
    {
      "contrato": "11281088502",
      "nombre": "CANTILLO RODRIGUEZ JULIO ANDRES",
      "status": "activo"
    },
    {
      "contrato": "195880601",
      "nombre": "CANTILLO VERGARA RAFAEL ANTONIO",
      "status": "activo"
    },
    {
      "contrato": "1128105601",
      "nombre": "CAÑA DE AVILA CARLOS SAMIR",
      "status": "activo"
    },
    {
      "contrato": "75972361",
      "nombre": "CARRILLO GARCIA LISARDO SANTANDER",
      "status": "activo"
    },
    {
      "contrato": "72210183",
      "nombre": "CARRILLO RAMOS CARLOS ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "11281095741",
      "nombre": "CASTELLANO ACOSTA ALONSO MIGUEL",
      "status": "activo"
    },
    {
      "contrato": "1134204290",
      "nombre": "CASTELLANO CARRACEDO GLENIS MARIA",
      "status": "inactivo"
    },
    {
      "contrato": "1193211838",
      "nombre": "CASTELLANO CARRACEDO JENIFFER",
      "status": "activo"
    },
    {
      "contrato": "1193576502",
      "nombre": "CASTRO ORDOÑEZ ARNULFO ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "1007929143",
      "nombre": "CASTRO POLO CARLOS DAVID",
      "status": "activo"
    },
    {
      "contrato": "1193154680",
      "nombre": "CASTRO POLO LUIS ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "1131040993",
      "nombre": "CATRILLO GAMEZ JOHAIDIS ANTONIO",
      "status": "activo"
    },
    {
      "contrato": "11932188552",
      "nombre": "CERVANTES CASTRO VANESSA PATRICIA",
      "status": "activo"
    },
    {
      "contrato": "11281040831",
      "nombre": "CERVANTES MUÑOZ ANDRES DAVID",
      "status": "activo"
    },
    {
      "contrato": "19592207",
      "nombre": "CERVANTES VALENCIA EVER LUIS",
      "status": "activo"
    },
    {
      "contrato": "195949781",
      "nombre": "CERVANTES VALENCIA RICHARD ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "19604486",
      "nombre": "CHARRIS CASTRO JAIDER ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "195982053",
      "nombre": "CHARRIS CASTRO PEDRO JOSE",
      "status": "activo"
    },
    {
      "contrato": "11931415601",
      "nombre": "CHARRIS RODRIGUEZ ROBERTO CARLOS",
      "status": "activo"
    },
    {
      "contrato": "852622151",
      "nombre": "CONTRERAS SALCEDO ALVARO RAFAEL",
      "status": "activo"
    },
    {
      "contrato": "195952111",
      "nombre": "CRESPO GARCIA MIGUEL ARCANGEL",
      "status": "activo"
    },
    {
      "contrato": "19596842",
      "nombre": "CRESPO VALENCIA NIBALDO ANTONIO",
      "status": "activo"
    },
    {
      "contrato": "7716586812",
      "nombre": "DE AGUAS ARIZA JAIRO ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "195907473",
      "nombre": "DE AVILA RIVERA JAIRO RAFAEL",
      "status": "activo"
    },
    {
      "contrato": "1193127906",
      "nombre": "DE AVILA TORRIJO SAMUEL DAVID",
      "status": "activo"
    },
    {
      "contrato": "1193285054",
      "nombre": "DELGAN CASTRILLO OMAR YESITH",
      "status": "activo"
    },
    {
      "contrato": "1128106269",
      "nombre": "DIAZ DE AVILA CRISTIAN DANIEL",
      "status": "activo"
    },
    {
      "contrato": "11281041401",
      "nombre": "DITA BERNATE JORGE LUIS",
      "status": "activo"
    },
    {
      "contrato": "86382431",
      "nombre": "DITA IGLESIAS ANGEL",
      "status": "activo"
    },
    {
      "contrato": "195968181",
      "nombre": "ENTRENA SALGADO LUIS FERNANDO",
      "status": "activo"
    },
    {
      "contrato": "10818027141",
      "nombre": "ESCANDON ALTAMAR ANDRES FRANCISCO",
      "status": "activo"
    },
    {
      "contrato": "195940161",
      "nombre": "ESCORCIA GARCIA JAIME  MANUEL",
      "status": "activo"
    },
    {
      "contrato": "771663711",
      "nombre": "ESTRADA PERTUZ LUIS ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "195888171",
      "nombre": "FABIAN PABON FELIX ANTONIO",
      "status": "activo"
    },
    {
      "contrato": "127037371",
      "nombre": "FABIAN PABON GERMAN ELIAS",
      "status": "activo"
    },
    {
      "contrato": "84077270",
      "nombre": "FINCE ARPUSHANA ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "17948898",
      "nombre": "FINCE ARPUSHANA JAIDER",
      "status": "activo"
    },
    {
      "contrato": "1079912747",
      "nombre": "FONTALVO PERTUZ VICTOR MANUEL",
      "status": "activo"
    },
    {
      "contrato": "85290136",
      "nombre": "GALVAN TEJEDA WUILSON JESUS",
      "status": "activo"
    },
    {
      "contrato": "1084735587",
      "nombre": "GAMERO TORRES ALVARO RAMON",
      "status": "activo"
    },
    {
      "contrato": "1128110681",
      "nombre": "GARCERAN CABARCAS DEINER FARID",
      "status": "activo"
    },
    {
      "contrato": "195905541",
      "nombre": "GARCERAN CAMACHO JULIO DOMINGO",
      "status": "activo"
    },
    {
      "contrato": "10031982332",
      "nombre": "GARCIA BARRANCO CRISTIAN RAFAEL",
      "status": "activo"
    },
    {
      "contrato": "11281049831",
      "nombre": "GARCIA CANTILLO MATIAS JOSE",
      "status": "activo"
    },
    {
      "contrato": "771665103",
      "nombre": "GARCIA GARCIA RAFAEL MARIA",
      "status": "activo"
    },
    {
      "contrato": "195986601",
      "nombre": "GARCIA GUZMAN WILFRIDO RAFAEL",
      "status": "activo"
    },
    {
      "contrato": "10079290891",
      "nombre": "GONZALEZ BERRIO YORLEDIS TAILITH",
      "status": "activo"
    },
    {
      "contrato": "19602023",
      "nombre": "GONZALEZ MARTINEZ JARRINSON ALFONSO",
      "status": "activo"
    },
    {
      "contrato": "195998631",
      "nombre": "GONZALEZ NOCHE WILMER ALFONSO",
      "status": "activo"
    },
    {
      "contrato": "853804321",
      "nombre": "GONZALEZ NOCHES BENJAMIN ANTONIO",
      "status": "activo"
    },
    {
      "contrato": "1065138960",
      "nombre": "GUERRERO VERGARA JESUS MANUEL",
      "status": "activo"
    },
    {
      "contrato": "1065132548",
      "nombre": "GUERRERO VERGARA LUIS EDUARDO",
      "status": "activo"
    },
    {
      "contrato": "11281053882",
      "nombre": "GUTIERREZ MARTINEZ ALJEDIS MIGUEL",
      "status": "activo"
    },
    {
      "contrato": "1128186055",
      "nombre": "GUTIERREZ PEDROZA JORGE LUIS",
      "status": "activo"
    },
    {
      "contrato": "1128106991",
      "nombre": "HERNANDEZ MEDINA JOAN CARLOS",
      "status": "activo"
    },
    {
      "contrato": "1128104125",
      "nombre": "HERRERA DIAZ CARLOS ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "179724621",
      "nombre": "IGUARAN  AVILA NESTOR SEGUNDO",
      "status": "activo"
    },
    {
      "contrato": "1123416869",
      "nombre": "IPUANA IPUANA EDINSON MANUEL",
      "status": "activo"
    },
    {
      "contrato": "11281062073",
      "nombre": "ISMAEL LOPEZ LUIS ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "11281097471",
      "nombre": "JIMENEZ ARIZA JENNIFER JOHANA",
      "status": "activo"
    },
    {
      "contrato": "1193142822",
      "nombre": "JIMENEZ ARIZA JOINER JAVIER",
      "status": "activo"
    },
    {
      "contrato": "1128104248",
      "nombre": "JIMENEZ CASTELLAR VALERIA KARINA",
      "status": "inactivo"
    },
    {
      "contrato": "11342042023",
      "nombre": "JIMENEZ ESCORCIA JAIME LUIS",
      "status": "activo"
    },
    {
      "contrato": "77170450",
      "nombre": "JIMENEZ MOJICA JUAN AGUSTIN",
      "status": "activo"
    },
    {
      "contrato": "1081819970",
      "nombre": "JIMENEZ MOLINARES DINA LUZ",
      "status": "activo"
    },
    {
      "contrato": "1128106227",
      "nombre": "JIMENEZ PEREZ DEIBER JOSE",
      "status": "activo"
    },
    {
      "contrato": "1193219583",
      "nombre": "JIMENEZ POLO WELSER ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "1151187355",
      "nombre": "JIMENEZ RODRIGUEZ CRISTIAN JESUS",
      "status": "activo"
    },
    {
      "contrato": "19596054",
      "nombre": "JIMENEZ RUIZ UBALDO ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "1128107546",
      "nombre": "JIMENEZ VALENCIA ALVARO JOSE",
      "status": "activo"
    },
    {
      "contrato": "85290076",
      "nombre": "JIMENEZ VALENCIA LUIS JAVIER",
      "status": "activo"
    },
    {
      "contrato": "12448339",
      "nombre": "JIMENEZ VARELA ANTONIO ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "1151456577",
      "nombre": "JUSAYU SALVADOR",
      "status": "activo"
    },
    {
      "contrato": "127037361",
      "nombre": "LARA ESPAÑA JUAN",
      "status": "activo"
    },
    {
      "contrato": "196016001",
      "nombre": "LARA VALDEZ FABIO",
      "status": "activo"
    },
    {
      "contrato": "57270890",
      "nombre": "MADRID FONSECA DIOCELINA DEL SOCORRO",
      "status": "activo"
    },
    {
      "contrato": "11281101131",
      "nombre": "MADRID PEREZ BRAYAN JOSE",
      "status": "activo"
    },
    {
      "contrato": "1081026016",
      "nombre": "MANJARRES NAVARRO DAVID ALFONSO",
      "status": "activo"
    },
    {
      "contrato": "19601585",
      "nombre": "MARTINEZ OROZCO CARLOS MARIO",
      "status": "activo"
    },
    {
      "contrato": "1065138852",
      "nombre": "MARTINEZ OROZCO DIEGO ARMANDO",
      "status": "activo"
    },
    {
      "contrato": "127037211",
      "nombre": "MARTINEZ PARODIS PEDRO MANUEL",
      "status": "activo"
    },
    {
      "contrato": "7636550",
      "nombre": "MATOSO MARTINEZ RAMON DE JESUS",
      "status": "activo"
    },
    {
      "contrato": "1128104868",
      "nombre": "MAZA VERGARA BENJAMIN",
      "status": "activo"
    },
    {
      "contrato": "1128105334",
      "nombre": "MENDINUETA BENAVIDES CARLOS ARTURO",
      "status": "activo"
    },
    {
      "contrato": "1128106782",
      "nombre": "MENDINUETA MAESTRE ARMANDO LUIS",
      "status": "activo"
    },
    {
      "contrato": "1193219020",
      "nombre": "MENDOZA DE AVILA JORGE LUIS",
      "status": "activo"
    },
    {
      "contrato": "1193133417",
      "nombre": "MENDOZA DE AVILA KEIDER JOSE",
      "status": "activo"
    },
    {
      "contrato": "11281094671",
      "nombre": "MENDOZA MENDOZA JESUS DAVID",
      "status": "activo"
    },
    {
      "contrato": "1193133960",
      "nombre": "MERCADO RODRIGUEZ ELKIN ALFONSO",
      "status": "activo"
    },
    {
      "contrato": "1081819320",
      "nombre": "MEZA ACOSTA WALTER JOSE",
      "status": "activo"
    },
    {
      "contrato": "11932192201",
      "nombre": "MEZA GARCIA EDINSON RAFAEL",
      "status": "activo"
    },
    {
      "contrato": "11934378521",
      "nombre": "MEZA MENCO LUIS FELIPE",
      "status": "activo"
    },
    {
      "contrato": "11281087871",
      "nombre": "MIRANDA DE LA CERDA ARAMIS MANUEL",
      "status": "activo"
    },
    {
      "contrato": "10658181841",
      "nombre": "MIRANDA LOPEZ ANDRES FELIPE",
      "status": "activo"
    },
    {
      "contrato": "195991841",
      "nombre": "MIRANDA MEZA MIGUEL ANTONIO",
      "status": "activo"
    },
    {
      "contrato": "11932114042",
      "nombre": "MIRANDA PABOLA JOSE CARLOS",
      "status": "activo"
    },
    {
      "contrato": "1193127524",
      "nombre": "MIRANDA PALLARES LUIS MIGUEL",
      "status": "activo"
    },
    {
      "contrato": "195952071",
      "nombre": "MOLINA CORONADO CIGISFREDO",
      "status": "activo"
    },
    {
      "contrato": "195967871",
      "nombre": "MOLINA CORONADO FREDI EDUARDO",
      "status": "activo"
    },
    {
      "contrato": "10077730503",
      "nombre": "MOLINA PIÑA EDUARDO JOSE",
      "status": "activo"
    },
    {
      "contrato": "85290062",
      "nombre": "MORA REYES RIGO JAIDER",
      "status": "activo"
    },
    {
      "contrato": "1193133627",
      "nombre": "MORA REYES YERSON ESNEIDER",
      "status": "activo"
    },
    {
      "contrato": "85290134",
      "nombre": "MORALES BARRANCO JUAN  CARLOS",
      "status": "activo"
    },
    {
      "contrato": "100427300941",
      "nombre": "MORALES ECHAVARRIA JEAN CARLOS",
      "status": "activo"
    },
    {
      "contrato": "195898421",
      "nombre": "MOVILLA DE AVILA CARLOS CRISTOBAL",
      "status": "activo"
    },
    {
      "contrato": "195947041",
      "nombre": "MOVILLA DE AVILA GENITO ANTONIO",
      "status": "activo"
    },
    {
      "contrato": "195994191",
      "nombre": "MUÑOZ BERDUGO LUIS JAVIER",
      "status": "activo"
    },
    {
      "contrato": "1063947881",
      "nombre": "MUÑOZ GUTIERREZ LUIS ALFONSO",
      "status": "activo"
    },
    {
      "contrato": "1193068106",
      "nombre": "NAVARRO DE AVILA JUAN CARLOS",
      "status": "activo"
    },
    {
      "contrato": "572000542",
      "nombre": "NIETO ORTEGA CLAUDIA PATRICIA",
      "status": "activo"
    },
    {
      "contrato": "1065124272",
      "nombre": "OCHOA GUTIERREZ CARLOS ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "19595727",
      "nombre": "OCHOA VALENCIA RAMON MANUEL",
      "status": "activo"
    },
    {
      "contrato": "19594052",
      "nombre": "OLIVAREZ DIAZ NISON RAFAEL",
      "status": "activo"
    },
    {
      "contrato": "197080432",
      "nombre": "OLIVEROS RODRIGUEZ JOSE LUIS",
      "status": "activo"
    },
    {
      "contrato": "1193584618",
      "nombre": "OROZCO CRESPO ALBA PATRICIA",
      "status": "activo"
    },
    {
      "contrato": "85479117",
      "nombre": "OROZCO GUTIERREZ WUILSON RAFAEL",
      "status": "activo"
    },
    {
      "contrato": "11932105881",
      "nombre": "OROZCO LARA LUIS FELIPE",
      "status": "activo"
    },
    {
      "contrato": "10651396241",
      "nombre": "OROZCO LUGO JHAN CARLOS",
      "status": "activo"
    },
    {
      "contrato": "196011682",
      "nombre": "OROZCO MENDINUETA FRAY LUIS",
      "status": "activo"
    },
    {
      "contrato": "11310401051",
      "nombre": "OROZCO SALCEDO RAFAEL ANTONIO",
      "status": "activo"
    },
    {
      "contrato": "1065123812",
      "nombre": "ORTEGA ARIZA JAIRO ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "19562671",
      "nombre": "ORTEGA BALDONADO DOMINGO",
      "status": "activo"
    },
    {
      "contrato": "9876628",
      "nombre": "ORTIZ GARCIA RENILFO MANUEL",
      "status": "activo"
    },
    {
      "contrato": "1079911799",
      "nombre": "ORTIZ RODRIGUEZ FELIX DAVID",
      "status": "activo"
    },
    {
      "contrato": "195879171",
      "nombre": "OTERO CASTILLO JUAN FRANCISCO",
      "status": "activo"
    },
    {
      "contrato": "1193067476",
      "nombre": "OTERO MANOTAS JESUS ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "11932188745",
      "nombre": "OYOLA MADRID JULIO CESAR",
      "status": "activo"
    },
    {
      "contrato": "11281090663",
      "nombre": "OYOLA MADRID LUIS DAVID",
      "status": "activo"
    },
    {
      "contrato": "196163901",
      "nombre": "OYOLA VILLA DAVID ANTONIO",
      "status": "activo"
    },
    {
      "contrato": "195890201",
      "nombre": "PACHECO ALEMAN JOSE LUIS",
      "status": "activo"
    },
    {
      "contrato": "572001331",
      "nombre": "PADILLA JIMENEZ LUZ MARINA",
      "status": "activo"
    },
    {
      "contrato": "1128105128",
      "nombre": "PADILLA TORRES JUAN JOSE",
      "status": "activo"
    },
    {
      "contrato": "195983111",
      "nombre": "PALMERA PALMA JORGE MARIO",
      "status": "activo"
    },
    {
      "contrato": "75941581",
      "nombre": "PALMERA SIERRA JUAN DE DIOS",
      "status": "activo"
    },
    {
      "contrato": "196134131",
      "nombre": "PARRA POLO JAIRO ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "195917041",
      "nombre": "PEDRAZA CLAROS EFRAIN",
      "status": "activo"
    },
    {
      "contrato": "195905681",
      "nombre": "PEDROZA MONTENEGRO ERAZMO RAFAEL",
      "status": "activo"
    },
    {
      "contrato": "1128104321",
      "nombre": "PEDROZA OÑATE JESUS DAVID",
      "status": "activo"
    },
    {
      "contrato": "19602499",
      "nombre": "PEÑALOZA SANCHEZ YESIR",
      "status": "activo"
    },
    {
      "contrato": "11281090511",
      "nombre": "PEREA ARIZA ROBINSON ANTONIO",
      "status": "activo"
    },
    {
      "contrato": "852901791",
      "nombre": "PEREZ TATIS JULIO CESAR",
      "status": "activo"
    },
    {
      "contrato": "11281063262",
      "nombre": "PEREZ TERNERA DARIO JOSE",
      "status": "activo"
    },
    {
      "contrato": "771660711",
      "nombre": "PEREZ TERNERA MANUEL SALVADOR",
      "status": "activo"
    },
    {
      "contrato": "11281082232",
      "nombre": "PEREZ VERGARA CARLOS ANDRES",
      "status": "activo"
    },
    {
      "contrato": "11931415814",
      "nombre": "PERTUZ PADILLA CARLOS ANDRES",
      "status": "activo"
    },
    {
      "contrato": "1128105269",
      "nombre": "PERTUZ PADILLA JUAN CAMILO",
      "status": "activo"
    },
    {
      "contrato": "195986401",
      "nombre": "PERTUZ ROJANO JUAN CARLOS",
      "status": "activo"
    },
    {
      "contrato": "1193219499",
      "nombre": "PERTUZ SIERRA GEOVANY RAFAEL",
      "status": "activo"
    },
    {
      "contrato": "11932188302",
      "nombre": "PERTUZ SIERRA LEONEL ENRIQUE",
      "status": "inactivo"
    },
    {
      "contrato": "11932188303",
      "nombre": "PERTUZ SIERRA LEONEL ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "10031978731",
      "nombre": "PLATA PADILLA HUGO HERNESTO",
      "status": "activo"
    },
    {
      "contrato": "11281047631",
      "nombre": "PLATA PADILLA JOSE DE JESUS",
      "status": "activo"
    },
    {
      "contrato": "1193133416",
      "nombre": "POLO BOLAÑO JESUS DAVID",
      "status": "activo"
    },
    {
      "contrato": "11931387932",
      "nombre": "POLO BOLAÑO JULIO MIGUEL",
      "status": "activo"
    },
    {
      "contrato": "11931334231",
      "nombre": "POLO BOLAÑO PABLO JOSE",
      "status": "activo"
    },
    {
      "contrato": "195911841",
      "nombre": "POLO CASTRO ALBERTO LUIS",
      "status": "activo"
    },
    {
      "contrato": "11932190272",
      "nombre": "POLO JULIO JULIO RAFAEL",
      "status": "activo"
    },
    {
      "contrato": "1081786787",
      "nombre": "POLO PERTUZ EDGAR ALEXANDER",
      "status": "activo"
    },
    {
      "contrato": "771673431",
      "nombre": "POLO PERTUZ JOSE FRANCISCO",
      "status": "activo"
    },
    {
      "contrato": "195950751",
      "nombre": "POLO TAPIA LEANDRO",
      "status": "activo"
    },
    {
      "contrato": "77166522",
      "nombre": "POLO TAPIA WILFRIDO RAFAEL",
      "status": "activo"
    },
    {
      "contrato": "1134204057",
      "nombre": "POLO TAPIAS WILLIAN ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "1193218840",
      "nombre": "POTES LOPEZ JOSE LUIS",
      "status": "activo"
    },
    {
      "contrato": "11281085834",
      "nombre": "PUELLO CANTILLO DAIRO JOSE",
      "status": "activo"
    },
    {
      "contrato": "51771351",
      "nombre": "PUSHAINA EPIEYU LORENZO",
      "status": "activo"
    },
    {
      "contrato": "1128105771",
      "nombre": "QUIROZ GOMEZ FRANK DAVID",
      "status": "activo"
    },
    {
      "contrato": "11281119912",
      "nombre": "REYES JIMENEZ DIEGO ANDRES",
      "status": "activo"
    },
    {
      "contrato": "11281069341",
      "nombre": "REYES LEONES JAIME LUIS",
      "status": "activo"
    },
    {
      "contrato": "11932188631",
      "nombre": "REYES LEONES JUAN CARLOS",
      "status": "activo"
    },
    {
      "contrato": "1007095283",
      "nombre": "REYES OSPINO CARLOS JOSE",
      "status": "activo"
    },
    {
      "contrato": "852900511",
      "nombre": "REYES RODRIGUEZ ANDRES EMILIO",
      "status": "activo"
    },
    {
      "contrato": "196004431",
      "nombre": "REYES RODRIGUEZ HECTOR RUBIEL",
      "status": "activo"
    },
    {
      "contrato": "1128106167",
      "nombre": "RODRIGUEZ AHUMADA CARLOS ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "10651252022",
      "nombre": "RODRIGUEZ CERVANTES JORGE ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "771667523",
      "nombre": "RODRIGUEZ CERVANTES SAUL ALBERTO",
      "status": "inactivo"
    },
    {
      "contrato": "771667524",
      "nombre": "RODRIGUEZ CERVANTES SAUL ALBERTO",
      "status": "inactivo"
    },
    {
      "contrato": "1128105230",
      "nombre": "RODRIGUEZ RODRIGUEZ ROQUE JACINTO",
      "status": "activo"
    },
    {
      "contrato": "1193593333",
      "nombre": "RUDA SIERRA EDINSON MANUEL",
      "status": "activo"
    },
    {
      "contrato": "77165358",
      "nombre": "RUDAS CALVO EZEQUIEL",
      "status": "activo"
    },
    {
      "contrato": "1193043710",
      "nombre": "SARMIENTO PIÑA HAROLD DAVID",
      "status": "activo"
    },
    {
      "contrato": "196204381",
      "nombre": "SILVA TAPIAS CALIXTO JOSE",
      "status": "activo"
    },
    {
      "contrato": "126259671",
      "nombre": "SILVA TAPIAS JORGE ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "124105361",
      "nombre": "TATI CABARCAS ENOC SENEN",
      "status": "inactivo"
    },
    {
      "contrato": "10651339271",
      "nombre": "TATI DE LA ROSA ENOC SENEN",
      "status": "activo"
    },
    {
      "contrato": "19599883",
      "nombre": "TOVAR PATIÑO EDWIN HERNAN",
      "status": "activo"
    },
    {
      "contrato": "84107580",
      "nombre": "URIANA ABSHANA RAFAEL",
      "status": "activo"
    },
    {
      "contrato": "84107151",
      "nombre": "URIANA ARPUSHANA JUAN",
      "status": "activo"
    },
    {
      "contrato": "84108624",
      "nombre": "URIANA ARPUSHANA MARTIN",
      "status": "activo"
    },
    {
      "contrato": "195951551",
      "nombre": "VALENCIA VIZCAINO HUMBERTO JOSE",
      "status": "activo"
    },
    {
      "contrato": "11932114136",
      "nombre": "VARELA OSPINO DAVID ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "195844081",
      "nombre": "VASQUEZ PLAZAS LUIS ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "11342043811",
      "nombre": "VERGARA GONZALEZ JUAN CARLOS",
      "status": "activo"
    },
    {
      "contrato": "1128105341",
      "nombre": "VIDES BERDUGO JAIR ENRIQUE",
      "status": "activo"
    },
    {
      "contrato": "195967011",
      "nombre": "VILLA CALVO EDWIN JESUS",
      "status": "activo"
    },
    {
      "contrato": "85261916",
      "nombre": "VILORIA SERPA YESID JOSE",
      "status": "activo"
    },
    {
      "contrato": "1193538182",
      "nombre": "VIZCAINO DITA OMAR DAVID",
      "status": "inactivo"
    },
    {
      "contrato": "11935381825",
      "nombre": "VIZCAINO DITA OMAR DAVID",
      "status": "activo"
    },
    {
      "contrato": "75972185",
      "nombre": "VIZCAINO PALLARES JOSE LUIS",
      "status": "activo"
    },
    {
      "contrato": "19590629",
      "nombre": "VIZCAINO SALGADO LUIS ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "364545961",
      "nombre": "VIZCAINO SALGADO LUZ ELENA",
      "status": "activo"
    },
    {
      "contrato": "1193208823",
      "nombre": "VIZCAINO TORRES IVAN DAVID",
      "status": "activo"
    },
    {
      "contrato": "10651230943",
      "nombre": "YEPES DE LEON MARIO ALBERTO",
      "status": "activo"
    },
    {
      "contrato": "1128105136",
      "nombre": "OROZCO NAVARRLO ALEJANDRO FIDEL",
      "status": "activo"
    },
    {
      "contrato": "11931547232",
      "nombre": "OYOLA MADRID CARLOS ANDRES",
      "status": "activo"
    },
    {
      "contrato": "11281072303",
      "nombre": "JIMENEZ ESCORCIA EDUAR FRANCISCO",
      "status": "activo"
    },
    {
      "contrato": "10031969051",
      "nombre": "CHARRIS MARTINEZ JEAN CARLOS",
      "status": "activo"
    }
  ]
}
````

## File: server/routes/auditoria.js
````javascript
const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');
const { parsearVigilancia, parsearNomina } = require('../services/excelParser');
const { obtenerDiasCalendario, obtenerDiasLaborales } = require('../utils/dateUtils');
const { calcularMatrizLaboral, generarCSVMatriz } = require('../services/matrixService');
const Empleado = require('../models/Empleado');

const upload = multer({ dest: 'uploads/' });

router.post('/analizar', upload.fields([{ name: 'vigilancia' }, { name: 'nomina' }]), async (req, res) => {
  try {
    const { fechaInicio, fechaFin, anio } = req.body;
    if (!req.files?.vigilancia || !req.files?.nomina) {
      return res.status(400).json({ error: 'Se requieren ambos archivos Excel' });
    }

    const maestro = await Empleado.find({ status: 'activo' });
    const vigRes = parsearVigilancia(req.files.vigilancia[0].path);
    const nomRes = parsearNomina(req.files.nomina[0].path);

    const novs = vigRes.data;
    const novNames = vigRes.names;
    const acts = nomRes.data;
    const actNames = nomRes.names;

    // 1. DETECCIÓN DE CONFLICTOS
    const conflictos = [];
    for (const contrato in novs) {
      const actividades = acts[contrato] || [];
      const contratoLimpio = contrato.trim();
      const empleado = maestro.find(emp => String(emp.contrato || '').trim() === contratoLimpio);
      const nombre = empleado ? empleado.nombre : (actNames[contrato] || novNames[contrato] || 'Desconocido');

      novs[contrato].forEach(n => {
        if (fechaInicio && fechaFin && (n.fecha < fechaInicio || n.fecha > fechaFin)) {
          return;
        }
        const act = actividades.find(a => a.fecha === n.fecha);
        if (act) {
          conflictos.push({ contrato, nombre, fecha: n.fecha, novedad: n.tipo, actividad: act.concepto });
        }
      });
    }

    // 2. DETECCIÓN DE EMPLEADOS FALTANTES
    const contratosEnArchivos = new Set([...Object.keys(novs), ...Object.keys(acts)]);
    const faltantes = maestro.filter(emp => !contratosEnArchivos.has(emp.contrato));

    // 3. DETECCIÓN DE EMPLEADOS NO REGISTRADOS
    const contratosMaestro = new Set(maestro.map(emp => emp.contrato));
    const noRegistrados = [];
    for (const contrato of contratosEnArchivos) {
      if (!contratosMaestro.has(contrato)) {
        const nombre = actNames[contrato] || novNames[contrato] || 'Nombre no encontrado en archivos';
        noRegistrados.push({ contrato, nombre });
      }
    }

    // 4. DETECCIÓN DE INACTIVIDAD
    let inactivos = [];
    if (fechaInicio && fechaFin && anio) {
      const diasLaborales = obtenerDiasLaborales(fechaInicio, fechaFin, parseInt(anio));
      maestro.forEach(emp => {
        const empNovs = novs[emp.contrato] || [];
        const empActs = acts[emp.contrato] || [];
        const fechasConRegistro = new Set([...empNovs.map(n => n.fecha), ...empActs.map(a => a.fecha)]);
        const diasSinRegistro = diasLaborales.filter(dia => !fechasConRegistro.has(dia));
        if (diasSinRegistro.length > 0) {
          inactivos.push({ contrato: emp.contrato, nombre: emp.nombre, dias_faltantes: diasSinRegistro });
        }
      });
    }

    // 5. DETECCIÓN DE MÚLTIPLES ACTIVIDADES (> 2 el mismo día)
    const multiples = [];
    for (const contrato in acts) {
      const actividades = acts[contrato];
      const contratoLimpio = contrato.trim();
      const empleado = maestro.find(emp => String(emp.contrato || '').trim() === contratoLimpio);
      const nombre = empleado ? empleado.nombre : (actNames[contrato] || 'Desconocido');

      const conteoPorFecha = {};
      actividades.forEach(act => {
        if (!conteoPorFecha[act.fecha]) conteoPorFecha[act.fecha] = [];
        conteoPorFecha[act.fecha].push(act.concepto);
      });

      for (const fecha in conteoPorFecha) {
        if (conteoPorFecha[fecha].length > 2) {
          multiples.push({
            contrato,
            nombre,
            fecha,
            actividades: conteoPorFecha[fecha]
          });
        }
      }
    }

    // 6. RESUMEN DE DETALLES Y REFERENCIAS
    const resumenDetallesMap = {};
    for (const contrato in acts) {
      const actividades = acts[contrato];
      actividades.forEach(act => {
        const concepto = act.concepto || 'Sin Concepto';
        const detalle = act.detalle || 'Sin Detalle';
        const ref = act.referencia || 'S/R';
        const key = `${concepto}:::${detalle}`;

        if (!resumenDetallesMap[key]) {
          resumenDetallesMap[key] = {
            concepto: concepto,
            detalle: detalle,
            refs: new Set()
          };
        }
        resumenDetallesMap[key].refs.add(ref);
      });
    }

    const resumenDetalles = Object.values(resumenDetallesMap).map(item => ({
      concepto: item.concepto,
      detalle: item.detalle,
      referencias: Array.from(item.refs).sort((a, b) => {
        const aNum = parseInt(a);
        const bNum = parseInt(b);
        if (!isNaN(aNum) && !isNaN(bNum)) return aNum - bNum;
        return a.localeCompare(b);
      }).join(', ')
    }));

    // 7. MATRIZ LABORAL
        const diasLaborales = (fechaInicio && fechaFin && anio)
      ? obtenerDiasLaborales(fechaInicio, fechaFin, parseInt(anio))
      : [];
    const diasMatriz = (fechaInicio && fechaFin)
      ? obtenerDiasCalendario(fechaInicio, fechaFin)
      : [];

    const todosEmpleados = [];
    maestro.forEach(emp => todosEmpleados.push({ contrato: emp.contrato, nombre: emp.nombre }));

    for (const contrato in acts) {
      if (!contratosMaestro.has(contrato)) {
        todosEmpleados.push({
          contrato,
          nombre: actNames[contrato] || novNames[contrato] || 'Desconocido'
        });
      }
    }
    for (const contrato in novs) {
      if (!contratosMaestro.has(contrato) && !acts[contrato]) {
        todosEmpleados.push({
          contrato,
          nombre: novNames[contrato] || 'Desconocido'
        });
      }
    }

    const matriz = calcularMatrizLaboral(todosEmpleados, diasMatriz, acts, novs, parseInt(anio));

    res.json({
      resumen: {
        total_conflictos: conflictos.length,
        total_faltantes: faltantes.length,
        total_inactivos: inactivos.length,
        total_no_registrados: noRegistrados.length,
        total_multiples: multiples.length
      },
      conflictos,
      faltantes,
      inactivos,
      noRegistrados,
      multiples,
      resumenDetalles,
      matriz,
      diasLaborales: diasMatriz
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.post('/exportar-matriz', (req, res) => {
  try {
    const { result } = req.body;
    if (!result || !result.matriz || !result.diasLaborales) {
      return res.status(400).json({ error: 'Datos insuficientes para exportar la matriz' });
    }

    const csvContent = generarCSVMatriz(result.matriz, result.diasLaborales);

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="matriz_laboral.csv"');
    res.status(200).send(csvContent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al generar el CSV de la matriz' });
  }
});

router.post('/exportar', (req, res) => {
  try {
    const { result } = req.body;
    if (!result) return res.status(400).json({ error: 'No se proporcionaron datos para exportar' });

    const wb = xlsx.utils.book_new();

    const sheets = [
      { name: 'Conflictos', data: result.conflictos },
      { name: 'Faltantes', data: result.faltantes },
      { name: 'Inactivos', data: result.inactivos.map(i => ({ ...i, dias_faltantes: i.dias_faltantes.join(', ') })) },
      { name: 'No Registrados', data: result.noRegistrados },
      { name: 'Multiples Actividades', data: result.multiples.map(m => ({ ...m, actividades: m.actividades.join(', ') })) },
      { name: 'Resumen Detalles', data: result.resumenDetalles },
    ];

    sheets.forEach(sheet => {
      const ws = xlsx.utils.json_to_sheet(sheet.data);
      xlsx.utils.book_append_sheet(wb, ws, sheet.name);
    });

    const buf = xlsx.write(wb, { type: 'buffer', bookType: 'xlsx' });
    res.setHeader('Content-Disposition', 'attachment; filename="auditoria.xlsx"');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(buf);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al generar el archivo Excel' });
  }
});

module.exports = router;
````

## File: server/routes/empleados.js
````javascript
const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { parsearMaestroEmpleados } = require('../services/csvParser');
const { normalizeContract } = require('../utils/stringUtils');
const Empleado = require('../models/Empleado');

const upload = multer({ dest: 'uploads/' });
const DB_PATH = path.join(__dirname, '../models/empleados.json');

// Auxiliar para migrar datos de JSON a MongoDB si la colección está vacía
const migrateIfNeeded = async () => {
  try {
    const count = await Empleado.countDocuments();
    if (count === 0 && fs.existsSync(DB_PATH)) {
      console.log('Migrando datos de JSON a MongoDB...');
      const data = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
      if (data.empleados && data.empleados.length > 0) {
        await Empleado.insertMany(data.empleados);
        console.log(`Migración completada: ${data.empleados.length} empleados importados.`);
      }
    }
  } catch (e) {
    console.error('Error durante la migración:', e);
  }
};

// Ejecutar migración al cargar las rutas
migrateIfNeeded();

// POST /api/empleados/cargar
router.post('/cargar', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No se subió ningún archivo' });
    
    const { empleados, warnings } = parsearMaestroEmpleados(req.file.path);
    
    // Usamos bulkWrite para eficiencia
    const operations = empleados.map(emp => ({
      updateOne: {
        filter: { contrato: emp.contrato },
        update: { $set: emp },
        upsert: true
      }
    }));

    await Empleado.bulkWrite(operations);
    
    fs.unlinkSync(req.file.path);
    res.json({ 
      message: 'Maestro de empleados cargado con éxito', 
      total: empleados.length,
      warnings: warnings 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/empleados
router.get('/', async (req, res) => {
  try {
    const empleados = await Empleado.find({});
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener empleados' });
  }
});

// POST /api/empleados (Agregar un solo empleado)
router.post('/', async (req, res) => {
  try {
    const { nombre, contrato } = req.body;
    if (!nombre || !contrato) {
      return res.status(400).json({ error: 'El nombre y el contrato son requeridos' });
    }

    const normalizedContrato = normalizeContract(contrato);
    if (!normalizedContrato) {
      return res.status(400).json({ error: 'El contrato no tiene un formato válido' });
    }

    const exists = await Empleado.findOne({ contrato: normalizedContrato });
    if (exists) {
      return res.status(400).json({ error: 'El contrato ya existe en el sistema' });
    }

    const nuevoEmpleado = new Empleado({ 
      contrato: normalizedContrato, 
      nombre: nombre.trim(), 
      status: 'activo' 
    });

    await nuevoEmpleado.save();
    res.status(201).json({ message: 'Empleado agregado con éxito', empleado: nuevoEmpleado });
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el empleado' });
  }
});

// PUT /api/empleados/:contrato (Actualizar estado o nombre)
router.put('/:contrato', async (req, res) => {
  const { contrato } = req.params;
  const { status, nombre } = req.body;
  
  try {
    const updateData = {};
    if (status) updateData.status = status;
    if (nombre) updateData.nombre = nombre;

    const emp = await Empleado.findOneAndUpdate(
      { contrato },
      { $set: updateData },
      { new: true }
    );

    if (!emp) return res.status(404).json({ error: 'Empleado no encontrado' });
    res.json({ message: 'Empleado actualizado', empleado: emp });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el empleado' });
  }
});

// DELETE /api/empleados/:contrato
router.delete('/:contrato', async (req, res) => {
  const { contrato } = req.params;
  try {
    const result = await Empleado.deleteOne({ contrato });
    if (result.deletedCount === 0) return res.status(404).json({ error: 'Empleado no encontrado' });
    res.json({ message: 'Empleado eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el empleado' });
  }
});

module.exports = router;
````

## File: server/services/csvParser.js
````javascript
const fs = require('fs');
const { COLUMNAS_EMPLEADO } = require('../config/constants');
const { normalizeContract } = require('../utils/stringUtils');

const parsearMaestroEmpleados = (filePath) => {
  const contenido = fs.readFileSync(filePath, 'utf8');
  const lineas = contenido.split(/\r?\n/).filter(l => l.trim() !== '');
  
  if (lineas.length < 2) throw new Error('El archivo CSV está vacío o no tiene datos');

  const encabezados = lineas[0].split(',').map(h => h.trim().replace(/"/g, ''));
  
  const idxContrato = encabezados.indexOf('Contrato');
  const idxNombre = encabezados.indexOf('Nombre');

  if (idxContrato === -1 || idxNombre === -1) {
    throw new Error(`El CSV debe tener las columnas: ${COLUMNAS_EMPLEADO.join(', ')}`);
  }

  const empleados = [];
  const contratosVistos = new Set();
  const warnings = [];

  for (let i = 1; i < lineas.length; i++) {
    const columnas = lineas[i].split(',').map(c => c.trim().replace(/"/g, ''));
    const contratoRaw = columnas[idxContrato];
    const nombre = columnas[idxNombre];

    if (!contratoRaw || !nombre) continue;
    
    if (contratoRaw.toLowerCase().includes('e+')) {
      warnings.push(`Línea ${i + 1}: El contrato ${contratoRaw} está en notación científica. Se recomienda exportar como Texto.`);
    }

    const contrato = normalizeContract(contratoRaw);
    if (!contrato) continue;
    if (contratosVistos.has(contrato)) continue;

    // Asignar estado activo por defecto
    empleados.push({ contrato, nombre, status: 'activo' });
    contratosVistos.add(contrato);
  }

  return { empleados, warnings };
};

module.exports = { parsearMaestroEmpleados };
````

## File: server/services/excelParser.js
````javascript
const xlsx = require('xlsx');
const { parsearFechaExcel, formatearFechaISO } = require('../utils/dateUtils');
const { TIPOS_VALIDOS_VIGILANCIA } = require('../config/constants');
const { normalizeContract } = require('../utils/stringUtils');

const normalizeKey = (key) =>
  String(key || '')
    .toUpperCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^A-Z0-9]/g, '')
    .trim();

const buildHeaderMap = (headerRow) =>
  headerRow.reduce((acc, cell, index) => {
    const key = normalizeKey(cell);
    if (key) acc[key] = index;
    return acc;
  }, {});

const parsearVigilancia = (path) => {
  const wb = xlsx.readFile(path);
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const matrix = xlsx.utils.sheet_to_json(sheet, { header: 1, raw: false });

  if (matrix.length === 0) throw new Error('El archivo de Vigilancia está vacío');

  let headerRowIdx = -1;
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i].map(cell => normalizeKey(String(cell || '')));
    if (row.includes('IDCONTRATO') && row.includes('FECHAINICIO')) {
      headerRowIdx = i;
      break;
    }
  }

  if (headerRowIdx === -1) throw new Error('No se encontró la fila de encabezados en Vigilancia (ID_CONTRATO y FECHA_INICIO)');

  const headerRow = matrix[headerRowIdx];
  const headerMap = buildHeaderMap(headerRow);

  const cols = {
    contrato: headerMap.IDCONTRATO,
    nombre: headerMap.NOMBRETRABAJADOR,
    fechaInicio: headerMap.FECHAINICIO,
    fechaFin: headerMap.FECHAFIN,
    tipo: headerMap.IDNOVEDAD
  };

  const novedades = {};
  const names = {};

  for (let i = headerRowIdx + 1; i < matrix.length; i++) {
    const row = matrix[i];
    if (!row || row.length === 0) continue;

    const contratoRaw = row[cols.contrato] ?? row[headerMap.IDCONTRATO];
    const contrato = normalizeContract(String(contratoRaw || ''));
    const nombre = String((row[cols.nombre] ?? row[headerMap.NOMBRETRABAJADOR]) || '').trim();
    const fechaInicioRaw = row[cols.fechaInicio] ?? row[headerMap.FECHAINICIO];
    const fechaInicio = fechaInicioRaw ? parsearFechaExcel(fechaInicioRaw) : null;
    const fechaFinRaw = row[cols.fechaFin] ?? row[headerMap.FECHAFIN];
    const fechaFin = fechaFinRaw ? parsearFechaExcel(fechaFinRaw) : fechaInicio;
    const tipo = String((row[cols.tipo] ?? row[headerMap.IDNOVEDAD]) || '').toUpperCase().trim();

    if (contrato && fechaInicio && TIPOS_VALIDOS_VIGILANCIA.some(t => tipo.includes(t))) {
      if (!novedades[contrato]) novedades[contrato] = [];
      if (nombre) names[contrato] = nombre;
      const actual = new Date(fechaInicio);
      const limite = fechaFin || fechaInicio;
      while (actual <= limite) {
        novedades[contrato].push({ fecha: formatearFechaISO(actual), tipo: tipo });
        actual.setDate(actual.getDate() + 1);
      }
    }
  }
  return { data: novedades, names };
};

const parsearNomina = (path) => {
  const wb = xlsx.readFile(path);
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const matrix = xlsx.utils.sheet_to_json(sheet, { header: 1, raw: false });

  if (matrix.length === 0) throw new Error('El archivo de Nómina está vacío');

  let headerRowIdx = -1;
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i].map(cell => normalizeKey(String(cell || '')));
    if (row.includes('IDCONTRATO') && row.includes('FECHA')) {
      headerRowIdx = i;
      break;
    }
  }

  if (headerRowIdx === -1) throw new Error('No se encontró la fila de encabezados en Nómina (ID_CONTRATO y FECHA)');

  const headerRow = matrix[headerRowIdx];
  const headerMap = buildHeaderMap(headerRow);

  const cols = {
    contrato: headerMap.IDCONTRATO,
    nombre: headerMap.NOMBRETRABAJADOR,
    fecha: headerMap.FECHA,
    concepto: headerMap.CONCEPTODV,
    detalle: headerMap.DETALLEACTIVIDAD,
    ref: headerMap.REFERENCIA,
    digitoVerificacion: headerMap.DIGITOVERIFICACION
  };

  const actividades = {};
  const names = {};

  for (let i = headerRowIdx + 1; i < matrix.length; i++) {
    const row = matrix[i];
    if (!row || row.length === 0) continue;

    const contratoRaw = row[cols.contrato] ?? row[headerMap.IDCONTRATO];
    const contrato = normalizeContract(String(contratoRaw || ''));
    const nombre = String((row[cols.nombre] ?? row[headerMap.NOMBRETRABAJADOR]) || '').trim();
    const fechaRaw = row[cols.fecha] ?? row[headerMap.FECHA];
    const fecha = fechaRaw ? parsearFechaExcel(fechaRaw) : null;
    const nombreConcepto = String(
      [
        row[cols.concepto],
        row[headerMap.CONCEPTODV],
        row[cols.digitoVerificacion],
        row[headerMap.DIGITOVERIFICACION],
        row[headerMap.DIGITOVERIFICADOR]
      ].find(valor => String(valor || '').trim()) || ''
    ).trim() || 'Sin Concepto';
    const descripcion = String((row[cols.detalle] ?? row[headerMap.DETALLEACTIVIDAD]) || '').trim() || 'Sin Detalle';
    const referencia = String((row[cols.ref] ?? row[headerMap.REFERENCIA]) || '').trim() || 'S/R';

    if (contrato && fecha) {
      if (!actividades[contrato]) actividades[contrato] = [];
      if (nombre) names[contrato] = nombre;
      actividades[contrato].push({
        fecha: formatearFechaISO(fecha),
        concepto: nombreConcepto,
        detalle: descripcion,
        referencia: referencia
      });
    }
  }

  return { data: actividades, names };
};

module.exports = { parsearVigilancia, parsearNomina };
````

## File: server/services/matrixService.js
````javascript
const xlsx = require('xlsx');
const { obtenerDiasLaborales } = require('../utils/dateUtils');

/**
 * Calcula la matriz laboral aplicando reglas diferenciadas para administrativos y operativos.
 * @param {Array} todosEmpleados - Lista de empleados (Maestro + No Registrados)
 * @param {Array} diasLaborales - Lista de fechas en formato ISO (YYYY-MM-DD)
 * @param {Object} acts - Actividades por contrato { contrato: [ {fecha, concepto...}, ... ] }
 * @param {Object} novs - Novedades por contrato { contrato: [ {fecha, tipo...}, ... ] }
 */
const calcularMatrizLaboral = (todosEmpleados, diasLaborales, acts, novs, anio = null) => {
  const matriz = [];

  todosEmpleados.forEach(emp => {
    const empActs = acts[emp.contrato] || [];
    const empNovs = novs[emp.contrato] || [];
    const conteoDias = {};

    // Identificar si es administrativo: Buscamos el código "DV01" en el Concepto de sus actividades
    const isAdmin = empActs.some(act => act.concepto && act.concepto.toUpperCase().includes('DV01'));

    diasLaborales.forEach(dia => {
      const actividadesDia = empActs.filter(a => a.fecha === dia);
      const actCount = actividadesDia.length;

      const novedadesDia = empNovs.filter(n => n.fecha === dia);
      const tiposNovedades = [...new Set(novedadesDia.map(n => n.tipo))].join(', ');

      const [anioDia, mesDia, diaMes] = dia.split('-').map(Number);
      const ultimoDiaMes = new Date(anioDia, mesDia, 0).getDate();
      const esUltimoDiaQuincena = diaMes === 15 || diaMes === ultimoDiaMes;

      let cellValue = '';

      if (isAdmin) {
        // Lógica Administrativos: Siempre debe incluir 'ADM'.
        // Excepción para la quincena administrativa: en el cierre de quincena
        // se reporta la cantidad real de días laborales de la quincena.
        const parts = [];
        const cantidadReporte = (isAdmin && esUltimoDiaQuincena && anio)
          ? (diaMes === 15
              ? 15
              : (() => {
                  const diasTotales = diaMes - 15;
                  const esDiaLaboralFinal = obtenerDiasLaborales(dia, dia, anio).length > 0;
                  return esDiaLaboralFinal ? diasTotales : diasTotales - 1;
                })())
          : actCount;

        if (cantidadReporte > 0) parts.push(cantidadReporte);
        parts.push('ADM');
        if (tiposNovedades) parts.push(tiposNovedades);
        cellValue = parts.join(', ');
      } else {
        // Lógica Operativos
        const parts = [];
        if (actCount > 0) parts.push(actCount);
        if (tiposNovedades) parts.push(tiposNovedades);
        cellValue = parts.join(', ');
      }
      
      if (cellValue !== '') {
        conteoDias[dia] = cellValue;
      }
    });

    matriz.push({
      contrato: emp.contrato,
      nombre: emp.nombre,
      conteo: conteoDias
    });
  });

  return matriz;
};

/**
 * Genera el contenido CSV de la matriz laboral.
 */
const generarCSVMatriz = (matriz, diasLaborales) => {
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  const formattedDays = diasLaborales.map(date => {
    const [y, m, d] = date.split('-');
    return `${d} ${months[parseInt(m) - 1]}`;
  });

  const header = ['Nombre', ...formattedDays].join(',');
  const rows = matriz.map(emp => {
    const rowValues = diasLaborales.map(date => {
      const val = emp.conteo[date] || '';
      return String(val).includes(',') ? `"${val}"` : val;
    });
    return [`"${emp.nombre}"`, ...rowValues].join(',');
  });

  return [header, ...rows].join('\n');
};

module.exports = { calcularMatrizLaboral, generarCSVMatriz };
````

## File: server/utils/dateUtils.js
````javascript
const { FESTIVOS_COLOMBIA } = require('../config/constants');

const parsearFechaExcel = (valor) => {
  if (!valor) return null;
  if (typeof valor === 'number') {
    const excelEpoch = new Date(1900, 0, 1);
    return new Date(excelEpoch.getTime() + (valor - 1) * 24 * 60 * 60 * 1000);
  }
  if (valor instanceof Date) return valor;
  const date = new Date(valor);
  return isNaN(date) ? null : date;
};

const formatearFechaISO = (date) => {
  if (!date) return null;
  const d = date instanceof Date ? date : new Date(date);
  const anio = d.getFullYear();
  const mes = String(d.getMonth() + 1).padStart(2, '0');
  const dia = String(d.getDate()).padStart(2, '0');
  return `${anio}-${mes}-${dia}`;
};

const esFestivo = (fecha, anio) => {
  const f = fecha instanceof Date ? fecha : new Date(fecha);
  const mes = f.getMonth() + 1;
  const dia = f.getDate();
  const festivos = FESTIVOS_COLOMBIA[anio] || [];
  return festivos.some(f => f.mes === mes && f.dia === dia);
};

const esDiaLaboral = (fecha, anio) => {
  const d = fecha instanceof Date ? fecha : new Date(fecha);
  const diaSemana = d.getDay();
  if (diaSemana === 0) return false; // Domingo
  if (diaSemana === 6) return true;  // Sábado
  return !esFestivo(d, anio);
};

const obtenerDiasCalendario = (inicio, fin) => {
  const dias = [];
  const [anioI, mesI, diaI] = inicio.split('-').map(Number);
  const [anioF, mesF, diaF] = fin.split('-').map(Number);

  const actual = new Date(anioI, mesI - 1, diaI);
  const finale = new Date(anioF, mesF - 1, diaF);

  actual.setHours(0, 0, 0, 0);
  finale.setHours(0, 0, 0, 0);

  while (actual <= finale) {
    dias.push(formatearFechaISO(actual));
    actual.setDate(actual.getDate() + 1);
  }

  return dias;
};

const obtenerDiasLaborales = (inicio, fin, anio) => {
  const dias = [];
  
  // Parseo manual para evitar el desplazamiento de zona horaria (UTC vs Local)
  const [anioI, mesI, diaI] = inicio.split('-').map(Number);
  const [anioF, mesF, diaF] = fin.split('-').map(Number);
  
  const actual = new Date(anioI, mesI - 1, diaI);
  const finale = new Date(anioF, mesF - 1, diaF);
  
  actual.setHours(0, 0, 0, 0);
  finale.setHours(0, 0, 0, 0);
  
  while (actual <= finale) {
    if (esDiaLaboral(actual, anio)) {
      dias.push(formatearFechaISO(actual));
    }
    actual.setDate(actual.getDate() + 1);
  }
  return dias;
};

module.exports = {
  parsearFechaExcel,
  formatearFechaISO,
  esFestivo,
  esDiaLaboral,
  obtenerDiasCalendario,
  obtenerDiasLaborales
};
````

## File: server/utils/stringUtils.js
````javascript
const normalizeContract = (val) => {
  if (!val) return '';
  let s = String(val).trim();
  
  // Si ya es una cadena de dígitos pura, la devolvemos tal cual para evitar cualquier transformación
  if (/^\d+$/.test(s)) {
    return s;
  }

  // Si el valor está en notación científica (ej. 1.00427E+11)
  if (s.toLowerCase().includes('e+')) {
    const num = Number(s);
    if (!isNaN(num)) {
      // Convertimos a string evitando la notación científica. 
      // Nota: Si Excel ya redondeó el valor, la precisión se perdió en el archivo.
      s = BigInt(Math.round(num)).toString();
    }
  }
  
  // Quitar cualquier carácter no numérico por seguridad
  return s.replace(/\D/g, '');
};

module.exports = { normalizeContract };

module.exports = { normalizeContract };
````

## File: server/.env.example
````
DATABASE_URL=postgres://postgres:password@db:5432/novedad_db
PORT=3001
NODE_ENV=development
````

## File: server/index.js
````javascript
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const connectDB = require('./config/db');

const empleadosRoutes = require('./routes/empleados');
const auditoriaRoutes = require('./routes/auditoria');

const app = express();

// Conectar a la base de datos
connectDB();

// Permitir CORS explícitamente (acepta cualquier origen en producción; ajustar si se requiere)
app.use(cors({ origin: '*' }));
app.options('*', cors());

// Logger simple de peticiones entrantes (muestra método, ruta y origen)
app.use((req, res, next) => {
  try {
    const origin = req.headers.origin || '-';
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} Origin:${origin}`);
  } catch (e) {
    // no bloquear en caso de error
  }
  next();
});
app.use(express.json({ limit: '50mb' }));

// Asegurar carpeta uploads
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

// Rutas
app.use('/api/empleados', empleadosRoutes);
app.use('/api/auditoria', auditoriaRoutes);

app.get('/api/test', (req, res) => res.json({ status: 'OK' }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
````

## File: server/package.json
````json
{
  "name": "server",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongoose": "^9.6.2",
    "multer": "^1.4.5-lts.1",
    "pg": "^8.11.3",
    "xlsx": "^0.18.5"
  }
}
````

## File: server/servercopy.js
````javascript
require('dotenv').config();
const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();

// Configuración de CORS - PERMITIR TODOS LOS ORÍGENES
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Crear carpeta de uploads si no existe
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configuración para subida de archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// 🚀 ENDPOINT: Cargar y Procesar Archivos
app.post('/api/cargar', upload.fields([{ name: 'vigilancia' }, { name: 'nomina' }]), async (req, res) => {
  console.log('📥 Recibiendo solicitud en /api/cargar');
  console.log('Archivos recibidos:', req.files);
  
  try {
    if (!req.files || !req.files.vigilancia || !req.files.nomina) {
      console.error('❌ Error: No se recibieron ambos archivos');
      return res.status(400).json({ error: 'Se requieren ambos archivos Excel' });
    }

    const vigilanciaPath = req.files.vigilancia[0].path;
    const nominaPath = req.files.nomina[0].path;
    
    console.log('📄 Archivo Vigilancia:', vigilanciaPath);
    console.log('📄 Archivo Nómina:', nominaPath);

    // Leer archivos Excel
    const wbVigilancia = xlsx.readFile(vigilanciaPath);
    const wbNomina = xlsx.readFile(nominaPath);

    // Obtener datos de la primera hoja de cada archivo
    const datosVigilancia = xlsx.utils.sheet_to_json(wbVigilancia.Sheets[wbVigilancia.SheetNames[0]]);
    const datosNomina = xlsx.utils.sheet_to_json(wbNomina.Sheets[wbNomina.SheetNames[0]]);

    console.log(`Filas leídas Vigilancia: ${datosVigilancia.length}`);
    console.log(`Filas leídas Nómina: ${datosNomina.length}`);

    // Estructuras para guardar en memoria
    const trabajadores = new Map(); // Cédula -> {nombre, area}
    const novedadesMap = {};        // Cédula -> [ {fecha, tipo} ]
    const actividadMap = {};        // Cédula -> [ {fecha, concepto, valor} ]

    // Función para limpiar cédula
    const limpiarCedula = (val) => String(val).trim().replace(/\D/g, '');

    // Función para convertir fecha de Excel
    const excelSerialToDate = (excelDate) => {
      if (typeof excelDate === 'string') {
        const parsed = new Date(excelDate);
        if (!isNaN(parsed)) return parsed;
      }
      if (typeof excelDate === 'number') {
        const excelEpoch = new Date(1900, 0, 1);
        const jsDate = new Date(excelEpoch.getTime() + (excelDate - 1) * 24 * 60 * 60 * 1000);
        return jsDate;
      }
      if (excelDate instanceof Date) return excelDate;
      return new Date(excelDate);
    };

    // Función para verificar si es fin de semana
    const esFinDeSemana = (date) => {
      const d = new Date(date);
      return d.getDay() === 0 || d.getDay() === 6;
    };

    // Función para obtener fechas de un rango
    const obtenerFechasRango = (inicio, fin) => {
    const fechas = [];
    
    // Función auxiliar para parsear fechas de Excel
    const parsearFecha = (fechaValor) => {
        if (!fechaValor) return null;
        
        // Si es un número (serial de Excel)
        if (typeof fechaValor === 'number') {
            const excelEpoch = new Date(1900, 0, 1);
            const jsDate = new Date(excelEpoch.getTime() + (fechaValor - 1) * 24 * 60 * 60 * 1000);
            return jsDate;
        }
        
        // Si ya es un objeto Date
        if (fechaValor instanceof Date) {
            return fechaValor;
        }
        
        // Si es string, intentar diferentes formatos
        const str = String(fechaValor).trim();
        
        // Formato: "4/1/26" o "4/1/2026"
        const matchMDY = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/);
        if (matchMDY) {
            const [, mes, dia, anio] = matchMDY;
            const anioCompleto = anio.length === 2 ? `20${anio}` : anio;
            return new Date(parseInt(anioCompleto), parseInt(mes) - 1, parseInt(dia));
        }
        
        // Formato: "1-Apr-26" o "1-Apr-2026"
        const matchDMY = str.match(/^(\d{1,2})-([A-Za-z]{3})-(\d{2,4})$/);
        if (matchDMY) {
            const [, dia, mesStr, anio] = matchDMY;
            const meses = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
            const mes = meses[mesStr.toLowerCase()];
            const anioCompleto = anio.length === 2 ? `20${anio}` : anio;
            return new Date(parseInt(anioCompleto), mes, parseInt(dia));
        }
        
        // Intentar parseo normal de Date como último recurso
        const date = new Date(str);
        if (!isNaN(date.getTime())) {
            return date;
        }
        
        return null;
    };
    
    const fechaInicio = parsearFecha(inicio);
    const fechaFin = parsearFecha(fin);
    
    if (!fechaInicio || !fechaFin) {
        console.error('Error al parsear fechas:', { inicio, fin });
        return fechas;
    }
    
    // Normalizar a medianoche hora local
    fechaInicio.setHours(0, 0, 0, 0);
    fechaFin.setHours(0, 0, 0, 0);
    
    let actual = new Date(fechaInicio);
    
    while (actual <= fechaFin) {
        const anio = actual.getFullYear();
        const mes = String(actual.getMonth() + 1).padStart(2, '0');
        const dia = String(actual.getDate()).padStart(2, '0');
        
        fechas.push(`${anio}-${mes}-${dia}`);
        
        actual.setDate(actual.getDate() + 1);
    }
    
    return fechas;
};

    // 1. Procesar VIGILANCIA
    console.log('\n=== PROCESANDO VIGILANCIA ===');
    datosVigilancia.forEach((fila, idx) => {
      const cedula = limpiarCedula(fila.CEDULA);
      const tipo = String(fila['MOT.'] || '').toUpperCase();
      const fechaInicio = fila['FECHA INICIO'];
      const fechaFin = fila['FECHA TERMI'] || fila['FECHA INICIO'];
      const observacion = fila.OBSERVACION || '';

      const tiposValidos = ['EMG','AT','PERM','INAS','LLUTO','LEY MARÍA','LEY MARIA'];
      const esValida = cedula && fechaInicio && tiposValidos.some(t => tipo.includes(t));

      if (esValida) {
        trabajadores.set(cedula, { nombre: fila.TRABAJADOR, area: fila['AREA TRABAJO'] });
        if (!novedadesMap[cedula]) novedadesMap[cedula] = [];

        const fechas = obtenerFechasRango(fechaInicio, fechaFin);
        console.log(`  [Fila ${idx}] Cedula: ${cedula} | Nombre: ${fila.TRABAJADOR} | Tipo: ${tipo}`);
        
        fechas.forEach(f => {
          novedadesMap[cedula].push({
            fecha: f,
            tipo: tipo.includes('LEY') ? 'LEY_MARIA' : tipo,
            observacion: observacion
          });
        });
      }
    });

    // 2. Procesar NÓMINA
    console.log('\n=== PROCESANDO NÓMINA ===');
    datosNomina.forEach((fila, idx) => {
      const cedula = limpiarCedula(fila.Contrato || fila.Cedula);
      const fecha = fila.Fecha;
      const codigo = fila['Código'] || fila.Codigo || '';
      const descripcion = fila['Concepto (Detalle)'] || fila['Concepto'] || '';
      const concepto = codigo && descripcion ? `${codigo} - ${descripcion}` : (codigo || descripcion);

      if (cedula && fecha && concepto) {
        const fechaObj = excelSerialToDate(fecha);
        const fechaISO = fechaObj.toISOString().split('T')[0];
        
        console.log(`  [Fila ${idx}] Cedula: ${cedula} | Fecha: ${fechaISO} | Concepto: ${concepto}`);
        
        trabajadores.set(cedula, { nombre: fila.Nombre, area: '' });
        if (!actividadMap[cedula]) actividadMap[cedula] = [];
        
        actividadMap[cedula].push({
          fecha: fechaISO,
          concepto: concepto,
          detalle: fila.Detalle || '',
          valor: fila.TOTAL || 0
        });
      }
    });

    // 3. CRUCE DE DATOS (BUSCAR CONFLICTOS)
    console.log('\n=== BUSCANDO CONFLICTOS ===');
    const conflictos = [];

    for (const [cedula, novedades] of Object.entries(novedadesMap)) {
      const actividades = actividadMap[cedula] || [];
      
      if (actividades.length === 0) continue;

      const fechasConActividad = new Set(actividades.map(a => a.fecha));

      novedades.forEach(nov => {
        if (fechasConActividad.has(nov.fecha)) {
          const actividadDetalle = actividades.find(a => a.fecha === nov.fecha);
          console.log(`  ✗ CONFLICTO en ${nov.fecha}: ${nov.tipo} vs ${actividadDetalle.concepto}`);
          
          conflictos.push({
            cedula,
            nombre: trabajadores.get(cedula)?.nombre || 'Desconocido',
            area: trabajadores.get(cedula)?.area || '',
            fecha: nov.fecha,
            novedad: nov.tipo,
            observacion_nov: nov.observacion,
            concepto_actividad: actividadDetalle.concepto,
            detalle_actividad: actividadDetalle.detalle
          });
        }
      });
    }

    console.log(`\n=== RESUMEN ===`);
    console.log(`Total trabajadores: ${trabajadores.size}`);
    console.log(`Total conflictos encontrados: ${conflictos.length}`);

    // Limpiar archivos temporales
    fs.unlinkSync(vigilanciaPath);
    fs.unlinkSync(nominaPath);

    res.json({
      total_trabajadores: trabajadores.size,
      total_conflictos: conflictos.length,
      conflictos
    });

  } catch (error) {
    console.error('❌ Error en el servidor:', error);
    res.status(500).json({ error: error.message });
  }
});

// Endpoint de prueba
app.get('/api/test', (req, res) => {
  res.json({ message: 'Servidor funcionando correctamente' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
  console.log(`📊 Listo para recibir archivos Excel`);
  console.log(`🔗 Endpoint disponible: http://localhost:${PORT}/api/cargar`);
});
````

## File: .gitignore
````
# Dependencias
node_modules/
**/node_modules/

# Variables de Entorno (CRÍTICO)
.env
**.env

# Archivos temporales y logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
logs/
*.log

# Carpetas de subida temporales
server/uploads/

# Archivos del sistema
.DS_Store
Thumbs.db
.vscode/
.idea/

# Build de frontend
client/dist/
client/build/
````

## File: create-test-files.js
````javascript
const XLSX = require('xlsx');
const fs = require('fs');

// Crear archivo de VIGILANCIA (permisos)
const vigilanciaData = [
  {
    'CEDULA': '1234567890',
    'TRABAJADOR': 'MIRANDA PALLARES LUIS MIGUEL',
    'MOT.': 'PERM',
    'AREA TRABAJO': 'OPERACIONES',
    'FECHA INICIO': new Date('2024-04-06'),
    'FECHA TERMI': new Date('2024-04-06'),
    'OBSERVACION': 'Permiso remunerado'
  }
];

const wbVigilancia = XLSX.utils.book_new();
const wsVigilancia = XLSX.utils.json_to_sheet(vigilanciaData);
XLSX.utils.book_append_sheet(wbVigilancia, wsVigilancia, 'Vigilancia');
XLSX.writeFile(wbVigilancia, 'uploads/test-vigilancia.xlsx');
console.log('✓ Created test-vigilancia.xlsx');

// Crear archivo de NÓMINA (actividades laborales)
const nominaData = [
  {
    'Contrato': '1234567890',
    'Nombre': 'MIRANDA PALLARES LUIS MIGUEL',
    'Fecha': new Date('2024-04-06'),
    'Código': '001',
    'Concepto (Detalle)': 'SALARIO BASE',
    'Detalle': 'Pago por servicios prestados',
    'TOTAL': 50000
  }
];

const wbNomina = XLSX.utils.book_new();
const wsNomina = XLSX.utils.json_to_sheet(nominaData);
XLSX.utils.book_append_sheet(wbNomina, wsNomina, 'Nómina');
XLSX.writeFile(wbNomina, 'uploads/test-nomina.xlsx');
console.log('✓ Created test-nomina.xlsx');

console.log('\n✅ Test files created successfully!');
console.log('Vigilancia file:', 'uploads/test-vigilancia.xlsx');
console.log('Nómina file:', 'uploads/test-nomina.xlsx');
````

## File: docker-compose.yml
````yaml
version: '3.8'
services:
  app:
    image: mcr.microsoft.com/devcontainers/javascript-node:20
    command: sleep infinity
    ports:
      - "3000:3000"
      - "8080:8080"
    volumes:
      - ./:/workspace:cached
    environment:
      - DATABASE_URL=postgres://postgres:password@db:5432/novedad_db
      - PORT=8080
    depends_on:
      - db
  db:
    image: postgres:15
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
      POSTGRES_DB: novedad_db
    ports:
      - "5432:5432"
    volumes:
      - pg_data:/var/lib/postgresql/data
volumes:
  pg_data:
````

## File: ESTRUCTURA_VALIDACION.md
````markdown
# Validación de Estructura del Proyecto - Correcciones Aplicadas

## Problemas Encontrados y Solucionados

### 1️⃣ **Docker Compose - Puertos No Expuestos**
**Problema:** El servicio `app` no mapeaba el puerto 3001 al host.
- ❌ Antes: Sin mapeo de puertos
- ✅ Después: Agregado `ports: ["3000:3000", "3001:3001"]`

**Ubicación:** `/docker-compose.yml`

---

### 2️⃣ **Vite - Sin Proxy al Backend**
**Problema:** El cliente (Vite) no tenía configurado proxy para redirigir llamadas API.
- ❌ Antes: Sin configuración de servidor proxy
- ✅ Después: Configurado proxy que redirige `/api/*` a `http://localhost:3001`

**Ubicación:** `/client/vite.config.js`

```javascript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3001',
      changeOrigin: true,
      secure: false,
    }
  }
}
```

---

### 3️⃣ **Hardcoded URLs en el Cliente**
**Problema:** La URL del backend estaba hardcodeada como `http://localhost:3001/api/cargar`
- ❌ Antes: `axios.post('http://localhost:3001/api/cargar', ...)`
- ✅ Después: `axios.post('/api/cargar', ...)` (URL relativa funciona con proxy)

**Ubicación:** `/client/src/App.jsx` (línea 26)

---

### 4️⃣ **Variables de Entorno No Configuradas**
**Problema:** El servidor no tenía archivo `.env` configurado.
- ✅ Creado: `/server/.env` con variables necesarias
- ✅ Creado: `/server/.env.example` como referencia

**Contenido:**
```env
DATABASE_URL=postgres://postgres:password@db:5432/novedad_db
PORT=3001
NODE_ENV=development
```

---

### 5️⃣ **Puerto No Utiliza Variable de Entorno**
**Problema:** Server.js tenía puerto hardcodeado.
- ❌ Antes: `const PORT = 3001;`
- ✅ Después: `const PORT = process.env.PORT || 3001;`

**Ubicación:** `/server/server.js` (última sección)

---

## ✅ Lista de Verificación - Estructura Correcta

- ✅ Docker Compose expone puertos 3000 y 3001
- ✅ Vite con proxy configurado para /api
- ✅ URLs relativas en cliente (no hardcodeadas)
- ✅ Variables de entorno configuradas
- ✅ Server.js lee PORT desde .env
- ✅ Bases de datos (tablas) creadas en `/db/init.sql`

---

## 🚀 Próximos Pasos

1. **Ejecutar el servidor:**
   ```bash
   cd server
   npm install  # Si no está instalado
   node server.js
   ```

2. **Ejecutar el cliente (en otra terminal):**
   ```bash
   cd client
   npm install  # Si no está instalado
   npm run dev
   ```

3. **Acceder en navegador:**
   - Frontend: `http://localhost:5173` (Vite default)
   - Backend: `http://localhost:3001` (Express)
   - Base de datos: `localhost:5432` (PostgreSQL)

---

## 🔧 Troubleshooting

**Error: "Cannot connect to database"**
- Verificar que PostgreSQL esté corriendo
- Confirmar `DATABASE_URL` es correcta en `.env`
- Verificar que las tablas estén creadas (ver `/db/init.sql`)

**Error: "Cannot POST /api/cargar"**
- Verificar que servidor esté corriendo en puerto 3001
- Verificar proxy de Vite esté activo
- Revisar console del navegador para CORS errors

**CORS Error en navegador**
- Proxy de Vite debe redirigir `/api` → backend
- Server debe tener CORS configurado (ya está con `app.use(cors())`)
````

## File: package.json
````json
{
  "name": "novedad-control",
  "version": "1.0.0",
  "scripts": {
    "start": "cd server && node server.js",
    "dev:backend": "cd server && npx nodemon server.js",
    "dev:frontend": "cd client && npm run dev",
    "install:all": "cd server && npm install && cd ../client && npm install"
  },
  "dependencies": {
    "axios": "^1.15.2",
    "lucide-react": "^1.8.0"
  }
}
````

## File: README.md
````markdown
# payrollresume
Auditoría de días laborales nómina
````
