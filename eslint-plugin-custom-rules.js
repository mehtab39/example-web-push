export default {
    rules: {
      "require-data-testid": {
        create(context) {
          return {
            JSXOpeningElement(node) {
              const actionableElements = [
                "button",
                "a",
                "input",
                "select",
                "textarea",
              ];
              if (actionableElements.includes(node.name.name)) {
                const hasTestId = node.attributes.find(
                  (attr) => attr.name?.name === "data-testid"
                );
                if (!hasTestId) {
                  context.report({
                    node,
                    message: `${node.name.name} element is missing a data-testid attribute.`,
                  });
                }
              }
            },
          };
        },
      },
    },
  };
  