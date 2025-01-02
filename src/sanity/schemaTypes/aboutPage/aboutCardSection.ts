export const aboutCardSection = {
    title: 'About Card Section',
    name: 'aboutCardSection',
    type: 'object',
    fields: [
        {
            title: 'Card Entry',
            name: 'cardEntry',
            type: 'array',
            of: [
                {
                    title: 'Card',
                    name: 'card',
                    type: 'object',
                    fields: [
                        {
                            title: 'Card Image',
                            name: 'cardImage',
                            type: 'image',
                        },
                        {
                            title: 'Card Title',
                            name: 'cardTitle',
                            type: 'string',
                        },
                        {
                            title: 'Card Description',
                            name: 'cardDescription',
                            type: 'string',
                        },
                    ],
                },
            ],
           
        },
        
    ],
}