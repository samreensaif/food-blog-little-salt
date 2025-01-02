export const latestArticles = {
    title: 'Latest Articles',
    name: 'latestArticles',
    type: 'object',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Articles Entry',
            name: 'articlesEntry',
            type: 'array',
            of: [
                {
                    title:"",
                    name:"",
                    type: 'object',
                    fields: [
                        {
                            title: 'Minutes',
                            name: 'minutes',
                            type: 'string',
                        },
                        {
                            title: ' Title',
                            name: 'title',
                            type: 'string',
                        },
                        {
                            title: 'Article Image',
                            name: 'articleImage',
                            type: 'image',
                        },
                        {
                            title: 'Description',
                            name: 'description',
                            type: 'string',
                        },
                        {
                            title:'Date',
                            name:'date',
                            type:'string',
                        },
                        
                        {
                            title:'ID',
                            name:'id',
                            type:'number',
                        }
                    ],
                   
                },
            ],
        },
    ],



}