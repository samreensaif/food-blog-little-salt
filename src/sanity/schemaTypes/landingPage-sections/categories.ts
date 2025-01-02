export const categories = {
    title: 'Categories',
    name: 'categories',
    type: 'object',
    fields: [
       
        {
            title: 'Card',
            name: 'card',
            type:'array',
            of:[

                {
                    title:'Category Card Entry',
                    name:'categoryCardEntry',
                    type:'object',
                    fields:[
                        {
                            title: 'Title',
                            name: 'title',
                            type: 'string',
                        },
                        {
                            title:' Img',
                            name:'img',
                            type:'image',
                        },
                        {
                            title:'Date',
                            name:'date',
                            type:'string',
                        },
                        {
                            title:' Minutes',
                            name:'minutes',
                            type:'string',
                        },
                        
                        {
                            title: 'Para',
                            name: 'para',
                            type: 'string',
                        },
                        {
                            title:'ID',
                            name:'id',
                            type:'number',
                        }

                    ]
                }
            ]
        }
    ],
}