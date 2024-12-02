`Class vs Function Components`
# Class Components
• Stateful: Can manage state.
• Lifecycle: Access to lifecycle methods.
• Verbose: More boilerplate code.
• Not Preferred anymore.
# Functional Components
• Initially stateless.
• Can use Hooks for state and effects.
• Simpler and more concise.
• More Popular   

`What is JSX?`
1. Definition: **JSX determines how the UI will look wherever the component is used.**
2. Not HTML: **Though it resembles HTML, you're actually writing JSX, which stands for JavaScript XML.**
3. Conversion: **JSX gets converted to regular JavaScript.**
4. Babeljs.io/repl is a tool that allows you to see how JSX is transformed into JavaScript.

`Exporting components`
1. Enables the use of a component in other parts.
2. Default Export: Allows exporting a single component as the default from a module.
3. Named Export: Allows exporting multiple items from a module.
4. Importing: To use an exported component, you need to import it in the destination file using import syntax.

`Other important Points`
1. Naming: Must be capitalized lowercase for default HTML.
2. HTML: Unlike vanilla JS where you can't directly write HTML, in React,you can embed HTML-like syntax using JSX.
3. CSS: In React, CSS can be directly imported into component files, allowing for modular and component-specific styling.

`Dynamic Components`
1. Dynamic Content: JSX allows the creation of dynamic and interactive UI components.
2. JavaScript Expressions: Using {}, we can embed any JS expression directly within JSX. This includes variables, function calls, and more.

`Reusable Components`
1. Modularity: Components are modular, allowing for easy reuse across different parts of an application.
2. Consistency: Reusing components ensures UI consistency and reduces the chance of discrepancies.
3. Efficiency: Reduces development time and effort by avoiding duplication of code.
4. Maintainability: Changes made to a reused component reflect everywhere it's used,simplifying updates and bug fixes.