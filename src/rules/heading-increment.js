/**
 * @fileoverview Rule to enforce heading levels increment by one.
 * @author Nicholas C. Zakas
 */

//-----------------------------------------------------------------------------
// Rule Definition
//-----------------------------------------------------------------------------

export default {
    meta: {
        type: "problem",

        docs: {
            recommended: true,
            description: "Enforce heading levels increment by one."
        },

        messages: {
            skippedHeading: "Heading level skipped from {{fromLevel}} to {{toLevel}}."
        }
    },

    create(context) {
        let lastHeadingDepth = 0;

        return {
            heading(node) {

                if (lastHeadingDepth > 0 && node.depth > lastHeadingDepth + 1) {
                    context.report({
                        loc: node.position,
                        messageId: "skippedHeading",
                        data: {
                            fromLevel: lastHeadingDepth,
                            toLevel: node.depth
                        }
                    });
                }

                lastHeadingDepth = node.depth;
            }
        };
    }
};
