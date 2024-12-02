`Including Bootstrap`
1. Responsive: Mobile-first design for all device sizes.
2. Components: Pre-styled elements like buttons and navbars.
3. Customizable: Modify default styles as needed.
4. Cross-Browser: Consistent look across browsers.
5. Open-Source: Free with community support.

1. Install:
npm i bootstrap@5.3.2
2. import
import "bootstrap/dist/css/bootstrap.min.css";

`Fragments`
1. What?
Allows grouping of multiple elements without extra DOM nodes.
2. Why?
• Return multiple elements without a wrapping parent.
• Cleaner DOM and consistent styling.
3. How? Two syntaxes:
1. <React.Fragment>...</React.Fragment>
2. Short: <>...</>

 `Map Method`
1. Purpose: Render lists from array data.
2. JSX Elements: Transform array items into JSX.
3. Inline Rendering: Directly inside JSX {items.map(item => <li key={item.id}>{item.name}</li>)}
4. Key Prop: Assign unique key for optimized re-renders.<div key={item.id}>{item.name}</div> 

`Conditional Rendering`

# Conditional Rendering
• Displaying content based on certain conditions.
• Allows for dynamic user interfaces.
# Methods
• If-else statements: Choose between two blocks of content.
• Ternary operators: Quick way to choose between two options.
• Logical operators: Useful for rendering content when a condition is true.
# Benefits
• Enhances user experience.
• Reduces unnecessary rendering.
• Makes apps more interactive and responsive.

`Props`
# Props in React
• Short for properties
• Mechanism for passing data.
• Read-only by default
# Usage
• Pass data from parent to child component.
• Makes components reusable.
• Defined as attributes in JSX.
# Key Points
• Data flows one-way (downwards).
• Props are immutable.
• Used for communication between components.

# Wrong code
const Title = (title) => {
  return (
    <h1>
      {title}
    </h1>
  );
};

export default Title;
import Title from "./Title";

const App = () => {
  let title = "Healthy Foods";
  return <Title>{title}</Title>;
};

export default App;

# Right code 

const Title = ({value}) => {
  return (
    <h1>
      {value}
    </h1>
  );
};

export default Title;
import Title from "./Title";

const App = () => {
  let title = "Healthy Foods";
  return <Title value ={title}></Title>;
};

export default App;

# Reason : React passes props as an object, so you need to destructure or access the property properly.

`CSS Modules`
1. Localized class names to avoid global conflicts.
2. Styles are scoped to individual components.
3. Helps in creating component-specific styles.
4. Automatically generates unique class names.
5. Promotes modular and maintainable CSS.
6. Can use alongside global CSS when needed.

`Passing Children`
1. children is a special prop for passing elements into components.
2. Used for flexible and reusable component designs.
3. Common in layout or container components.
4. Accessed with props.children.
5. Can be any content: strings, numbers, JSX, or components.
6. Enhances component composability and reusability.