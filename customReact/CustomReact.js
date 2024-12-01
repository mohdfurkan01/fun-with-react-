function CustomRender(ReactElement, container) {
  /* 
  const domElement = document.createElement(ReactElement.type);
  domElement.innerHTML = ReactElement.children;

  domElement.setAttribute("href", ReactElement.props.href);
  domElement.setAttribute("target", ReactElement.props.target);

  Container.appendChild(domElement);
  */
  const domElement = document.createElement(ReactElement.type);
  domElement.innerHTML = ReactElement.children;

  for (const prop in ReactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, ReactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const ReactElement = {
  type: "a",
  props: {
    href: "https://zen-browser.app/",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const MainContainer = document.querySelector("#root");

CustomRender(ReactElement, MainContainer);
