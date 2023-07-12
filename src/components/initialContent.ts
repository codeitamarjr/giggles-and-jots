export const initialContent = `
<h1>Embracing the Advantages of Tailwind CSS</h1>
    <h3>by Itamar Junior</h3>

    <p>Hello, fellow web enthusiasts! Today, I'm thrilled to delve into a CSS framework that's been making waves in the front-end community: Tailwind CSS. You're in for quite the treat!</p>

    <h2>Introduction</h2>

    <p>Tailwind CSS is a utility-first framework for building custom UIs. Unlike many CSS frameworks that corner you into a predefined design, Tailwind empowers you to craft unique designs without leaving your HTML.</p>

    <h2>How does it work?</h2>

    <p>Tailwind promotes the use of utility classes to apply styles directly to your HTML elements. Here's an illustrative example:</p>

    <pre><code class="language-html">
    &lt;button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"&gt;
        Click me
    &lt;/button&gt;
    </code></pre>

    <p>We've used multiple utility classes to style a button in the example above. Each class directly correlates to a CSS rule, fostering a highly composable and reusable design approach.</p>

    <h2>Advantages of Tailwind CSS</h2>

    <h3>1. Complete Customization</h3>

    <p>Tailwind CSS is design-agnostic. It equips you with low-level utility classes, paving the way for you to design the user interface just the way you envisaged.</p>

    <div class="quote-block">
        <p>"Tailwind CSS is about freedom and efficiency. It is like a painter being given the most vibrant palette - the power to create unique designs is in your hands."</p>
    </div>

    <h3>2. Development Efficiency</h3>

    <p>Tailwind's utility-first nature allows you to witness style changes directly in the markup, sidestepping the need to constantly switch to a separate CSS file. This radically boosts development speed.</p>

    <h3>3. Simplified Responsive Design</h3>

    <p>Tailwind CSS democratizes responsive design with its intuitive, device-level utility classes. Let's take a look:</p>

    <pre><code class="language-html">
    &lt;div class="w-full sm:w-1/2 md:w-1/3"&gt;
        &lt;!-- Content --&gt;
    &lt;/div&gt;
    </code></pre>

    <p>In this example, the width of the element adapts responsively. It is 100% on small devices (\`w-full\`), 50% on medium-sized devices (\`sm:w-1/2\`), and 33.33% on large devices (\`md:w-1/3\`).</p>

    <h2>Conclusion</h2>

    <p>With its promise of customization and development efficiency, Tailwind CSS is a game-changer. I recommend giving it a try in your next project and experiencing the difference first-hand!</p>
`;
