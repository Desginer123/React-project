module.exports = {
    // Specify the line length. Prettier default is 80.
    printWidth: 400,
  
    // Specify the number of spaces per indentation-level.
    tabWidth: 4,
  
    // Indent lines with spaces rather than tabs.
    useTabs: false,
  
    // Prettier has no direct equivalent for 'jsx-indent' and 'jsx-indent-props'
    // but using 'tabWidth' will apply for JSX as well.
    singleQuote: true,

    // Include parentheses around a sole arrow function parameter.
    arrowParens: 'always',
  
    // Format JSX files as well.
    jsxBracketSameLine: false,
  
    // Specify the end of line used.
    endOfLine: 'auto',
  
    // Specify the global linebreak style
    // Prettier automatically infers it but you can set it explicitly
    // 'lf' - Line Feed only (\n), common on Linux and macOS as well as inside git repos
    // 'crlf' - Carriage Return + Line Feed characters (\r\n), common on Windows
    // 'cr' - Carriage Return character only (\r), used very rarely
    // 'auto' - Maintain existing line endings (mixed values within one file are normalised by looking at what's used after the first line)
  };
  
  // Note: Prettier does not handle things like 'no-unused-vars', 'react/require-default-props', or 'i18next/no-literal-string' as these are beyond its scope.
  