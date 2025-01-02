export const hero = {
    title: 'Hero ',
    name: 'hero',
    type: 'object',
    fields: [
        
       {
            title: 'Hero Section',
            name: 'heroSection',
            type: 'array',
            of: [
               {title: 'Hero Section Entry', 
                name: 'heroSectionEntry', 
                type: 'object',
                fields: [   

                    {
                        title: 'Main Heading',
                        name: 'mainHeading',
                        type: 'string',
                    },
                    {
                        title: 'Paragraph',
                        name: 'para1',
                        type: 'string',
                    },
                   
                    {
                        title: 'Hero Image',
                        name: 'heroImage',
                        type: 'image',
                        
            
                    },
                ]
            
            
            
            
            }
            ]
        
        }
        
        
        
        
    ]
}