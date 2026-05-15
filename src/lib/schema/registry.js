/**
 * 🧩 SCHEMA REGISTRY
 * Base UI templates for each category
 */

export const schemaRegistry = {
    /**
     *  FASHION
     */
    fashion: {
        layout: "FashionLayout",

        components: [
            {
                type: "hero",
            },

            {
                type: "filters",
            },

            {
                type: "productGrid",
            },
        ],
    },

    /**
     *  ELECTRONICS
     */
    electronics: {
        layout: "ElectronicsLayout",

        components: [
            {
                type: "hero",
            },

            {
                type: "specs",
            },

            {
                type: "comparisonTable",
            },

            {
                type: "productGrid",
            },
        ],
    },

    /**
     *  FOOD
     */
    food: {
        layout: "FoodLayout",

        components: [
            {
                type: "hero",
            },

            {
                type: "recipeList",
            },
        ],
    },
    skincare: {
        layout: "SkincareLayout",

        components: [
            {
                type: "hero",
            },

            {
                type: "filters",
            },

            {
                type: "trending",
            },

            {
                type: "productGrid",
            },
        ],
    },
    news: {
        layout: "NewsLayout",
        components: [
            {
                type: "hero",
            },

            {
                type: "breakingNews",
            },


            {
                type: "newsFeed",
            },
        ],
    },
    clarification: {
        layout: "DefaultLayout",
        components: [
            {
                type: "hero",
            },
        ],
    },
  /**
   * GENERIC DEFAULT
   */
  generic: {
        layout: "DefaultLayout",

        components: [
            {
                type: "hero",
            },
        ],
    },
};
